import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NORDBLADE | Premium Knife Brands & Manufacturing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 40%, rgba(197,160,89,0.18), transparent 55%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          {/* Circle + triangle mark */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: 999,
              background: "#050505",
              border: "3px solid #c5a059",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "36px solid transparent",
                borderRight: "36px solid transparent",
                borderBottom: "62px solid #ffffff",
                marginBottom: 8,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 72,
                letterSpacing: 18,
                color: "#c5a059",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              NORDBLADE
            </div>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 8,
                color: "#b0aaa2",
                textTransform: "uppercase",
              }}
            >
              Premium Knife Brands & Manufacturing
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
