import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { breadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Ana Sayfa", url: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <SchemaOrg schema={breadcrumbSchema(allItems)} />
      <ol className="inline-flex items-center gap-1 text-sm text-on-surface-variant">
        {allItems.map((item, index) => (
          <li key={`${index}-${item.url}`} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
            {index === allItems.length - 1 ? (
              <span className="text-on-surface font-medium">{item.name}</span>
            ) : (
              <Link href={item.url} className="hover:text-primary transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
