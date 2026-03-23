import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background: "#4d4ad5",
        }}
      >
        <span
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: "#faf6ff",
            lineHeight: 1,
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size },
  );
}
