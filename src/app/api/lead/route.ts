import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_MAP = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(ip);

  if (!entry || now > entry.resetAt) {
    RATE_LIMIT_MAP.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Çok fazla istek gönderildi. Lütfen bir dakika bekleyin." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(formData) as Record<string, string>;
  }

  // Honeypot check — hidden field filled = bot
  if (body.company_fax) {
    return NextResponse.json({ success: true });
  }

  const { website, name, email, phone, message, company, service, budget } = body;

  if (!website || !name || !email) {
    return NextResponse.json(
      { error: "Website, ad soyad ve e-posta alanları zorunludur." },
      { status: 400 }
    );
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Geçerli bir e-posta adresi girin." },
      { status: 400 }
    );
  }

  // Send notification email via Resend (if configured)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SEOROAS <noreply@seoroas.com>",
          to: ["info@seoroas.com"],
          subject: `Yeni Lead: ${name} — ${website}`,
          html: `
            <h2>Yeni SEO Analiz Talebi</h2>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Website:</strong> ${website}</p>
            ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ""}
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
            ${service ? `<p><strong>Hizmet:</strong> ${service}</p>` : ""}
            ${budget ? `<p><strong>Bütçe:</strong> ${budget}</p>` : ""}
            ${message ? `<p><strong>Mesaj:</strong> ${message}</p>` : ""}
          `,
        }),
      });
    } catch {
      // Log error but don't fail the request
      console.error("Resend email failed");
    }
  }

  // Return success — redirect handled client-side
  return NextResponse.json({ success: true, redirect: "/tesekkurler" });
}
