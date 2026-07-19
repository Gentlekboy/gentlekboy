import { ImageResponse } from "next/og";

export const alt = "Kufre Udoh — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0F0E0C",
          backgroundImage:
            "radial-gradient(700px circle at 20% 20%, rgba(232,161,68,0.16), transparent 60%)",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
          <path
            d="M32,12 L32,56"
            stroke="#E8A144"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <circle cx="32" cy="82" r="7" fill="#E8A144" />
          <path
            d="M76,12 L32,40 L76,84"
            stroke="#E8A144"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            marginTop: 32,
            fontSize: 96,
            fontWeight: 600,
            color: "#EDE8E0",
            fontFamily: "serif",
            letterSpacing: "-0.02em",
          }}
        >
          Kufre Udoh
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#A89F92",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Software engineer crafting calm, dependable products.
        </div>
      </div>
    ),
    { ...size }
  );
}
