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
          backgroundColor: "#0b1220",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 800,
            color: "#fcd34d",
          }}
        >
          CI
        </div>
      </div>
    ),
    { ...size }
  );
}
