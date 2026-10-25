import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "#c21875",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        InnerSpace
      </div>
    )
  );
}