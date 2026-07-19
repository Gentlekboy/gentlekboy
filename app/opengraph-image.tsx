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
        <div
          style={{
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
            marginTop: 28,
            fontSize: 32,
            color: "#A89F92",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Software engineer crafting calm, dependable products.
        </div>
        <div
          style={{
            marginTop: 48,
            width: 64,
            height: 4,
            background: "#E8A144",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
