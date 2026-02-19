"use client";

import dynamic from "next/dynamic";

const MapGrid = dynamic(() => import("./MapGrid"), {
  ssr: false,
  loading: () => (
    <div
      className="map-grid-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ color: "rgba(255,255,255,0.5)" }}>Loading map...</span>
    </div>
  ),
});

export default function MapGridWrapper() {
  return <MapGrid />;
}
