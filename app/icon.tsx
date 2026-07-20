import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F0E0C",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
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
      </div>
    ),
    { ...size }
  );
}
