import { ImageResponse } from "next/og";

export const alt = "Codando Ideias — Sites e Sistemas para Empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b1220",
          backgroundImage:
            "radial-gradient(circle at 22% 18%, rgba(250,204,21,0.18), transparent 45%), radial-gradient(circle at 82% 85%, rgba(59,130,246,0.16), transparent 45%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#fcd34d",
            marginBottom: 28,
          }}
        >
          Codando Ideias
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Sua empresa merece ser encontrada.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(255,255,255,0.72)",
            marginTop: 32,
            textAlign: "center",
            maxWidth: 820,
          }}
        >
          Sites e sistemas de alta performance, feitos sob medida para
          converter visitantes em clientes.
        </div>
      </div>
    ),
    { ...size }
  );
}
