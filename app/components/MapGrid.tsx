"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const GRID_SIZE = 100; // 100x100 = 10,000 squares
const CELL_SIZE = 1; // each cell is 1x1 unit
const MAP_SIZE = GRID_SIZE * CELL_SIZE; // total map size in units

// Cell status types
type CellStatus = "available" | "owned" | "premium";

interface CellData {
  x: number;
  y: number;
  status: CellStatus;
  owner?: string;
  name?: string;
}

// Generate random cell data for demonstration
function generateCellData(): Map<string, CellData> {
  const cells = new Map<string, CellData>();
  
  const statuses: CellStatus[] = ["available", "owned", "premium" ];

  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      const key = `${x},${y}`;
      const rand = Math.random();
      let status: CellStatus = "available";

      if (rand < 0.55) {
        status = "available";
      } else if (rand < 0.82) {
        status = "owned";
      } else if (rand < 0.93) {
        status = "premium";
      }

      cells.set(key, {
        x,
        y,
        status,
        owner: status === "owned" ? `User_${Math.floor(Math.random() * 9999)}` : undefined,
        name: status === "premium" ? `Estate #${Math.floor(Math.random() * 500)}` : undefined,
      });
    }
  }
  return cells;
}

const STATUS_COLORS: Record<CellStatus, string> = {
  available: "#253b37",
  owned: "#00715c",
  premium: "rgb(170, 146, 69)",
};

const STATUS_LABELS: Record<CellStatus, string> = {
  available: "Available",
  owned: "Owned",
  premium: "Premium",
};

export default function MapGrid() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const canvasLayerRef = useRef<L.GridLayer | null>(null);
  const cellDataRef = useRef<Map<string, CellData>>(new Map());
  const [selectedCell, setSelectedCell] = useState<CellData | null>(null);
  const [hoveredCell, setHoveredCell] = useState<CellData | null>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  const getCellAtPoint = useCallback((latlng: L.LatLng): CellData | null => {
    const x = Math.floor(latlng.lng);
    const y = Math.floor(latlng.lat);
    if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return null;
    return cellDataRef.current.get(`${x},${y}`) || null;
  }, []);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Generate cell data once
    cellDataRef.current = generateCellData();

    // Create map with simple CRS (pixel coordinates)
    const map = L.map(mapRef.current, {
      crs: L.CRS.Simple,
      minZoom: 2,
      maxZoom: 8,
      zoomSnap: 0.25,
      zoomDelta: 0.5,
      attributionControl: false,
      zoomControl: false,
      preferCanvas: true,
    });

    // Set bounds to cover the entire grid
    const bounds: L.LatLngBoundsExpression = [
      [0, 0],
      [MAP_SIZE, MAP_SIZE],
    ];

    map.fitBounds(bounds);
    map.setMaxBounds([
      [-20, -20],
      [MAP_SIZE + 20, MAP_SIZE + 20],
    ]);

    // Add zoom control to top-right
    L.control.zoom({ position: "topright" }).addTo(map);

    // Custom canvas GridLayer for performance
    const GridCellLayer = L.GridLayer.extend({
      createTile: function (coords: L.Coords) {
        const tile = document.createElement("canvas") as HTMLCanvasElement;
        const tileSize = this.getTileSize();
        tile.width = tileSize.x;
        tile.height = tileSize.y;

        const ctx = tile.getContext("2d");
        if (!ctx) return tile;

        const zoom = coords.z;
        const tileOrigin = L.point(coords.x * tileSize.x, coords.y * tileSize.y);
        const tileBounds = this._tileCoordsToBounds(coords);

        // Calculate visible cell range based on tile geographic bounds
        const startX = Math.max(0, Math.floor(tileBounds.getWest()));
        const endX = Math.min(GRID_SIZE - 1, Math.ceil(tileBounds.getEast()) - 1);
        const startY = Math.max(0, Math.floor(tileBounds.getSouth()));
        const endY = Math.min(GRID_SIZE - 1, Math.ceil(tileBounds.getNorth()) - 1);

        if (startX > endX || startY > endY) {
          return tile;
        }

        for (let x = startX; x <= endX; x++) {
          for (let y = startY; y <= endY; y++) {
            // Flip Y for rendering (Leaflet CRS.Simple has Y going up)
            const cellKey = `${x},${y}`;
            const cell = cellDataRef.current.get(cellKey);
            if (!cell) continue;

            // Calculate pixel position within the tile using projected points
            const topLeft = this._map.project(L.latLng(y + 1, x), zoom);
            const bottomRight = this._map.project(L.latLng(y, x + 1), zoom);

            const px = Math.min(topLeft.x, bottomRight.x) - tileOrigin.x;
            const py = Math.min(topLeft.y, bottomRight.y) - tileOrigin.y;
            const width = Math.max(Math.abs(bottomRight.x - topLeft.x), 1);
            const height = Math.max(Math.abs(bottomRight.y - topLeft.y), 1);
            const size = Math.min(width, height);

            // Fill cell
            ctx.fillStyle = STATUS_COLORS[cell.status];
            ctx.fillRect(px, py, width, height);

            // Draw border if zoomed in enough
            if (size >= 2) {
              ctx.strokeStyle = "#000000";
              ctx.lineWidth = size >= 6 ? 1.25 : 1;
              ctx.strokeRect(px + 0.5, py + 0.5, width - 1, height - 1);
            }

            // Draw coordinates text if zoomed in enough
            if (size >= 40) {
              ctx.fillStyle = "rgba(255,255,255,0.5)";
              ctx.font = `${Math.min(10, size / 5)}px Inter, sans-serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText(
                `${x},${y}`,
                px + width / 2,
                py + height / 2
              );
            }
          }
        }

        return tile;
      },
    });

    const gridLayer = new (GridCellLayer as any)({
      tileSize: 256,
      noWrap: true,
    });
    gridLayer.addTo(map);
    canvasLayerRef.current = gridLayer;

    // Handle mouse events
    map.on("mousemove", (e: L.LeafletMouseEvent) => {
      const cell = getCellAtPoint(e.latlng);
      setHoveredCell(cell);
      setCoordinates({
        x: Math.floor(e.latlng.lng),
        y: Math.floor(e.latlng.lat),
      });

      if (tooltipRef.current) {
        const container = mapRef.current!.getBoundingClientRect();
        tooltipRef.current.style.left = `${e.containerPoint.x + 15}px`;
        tooltipRef.current.style.top = `${e.containerPoint.y - 10}px`;
      }
    });

    map.on("click", (e: L.LeafletMouseEvent) => {
      const cell = getCellAtPoint(e.latlng);
      setSelectedCell(cell);
    });

    map.on("mouseout", () => {
      setHoveredCell(null);
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [getCellAtPoint]);

  return (
    <div className="map-grid-container">
      {/* Legend */}
      <div className="map-legend">
        <h3>LAND MAP</h3>
        <div className="legend-items">
          {(Object.keys(STATUS_COLORS) as CellStatus[]).map((status) => (
            <div key={status} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: STATUS_COLORS[status] }}
              />
              <span className="legend-label">{STATUS_LABELS[status]}</span>
            </div>
          ))}
        </div>
        <div className="legend-stats">
          <span>Grid: {GRID_SIZE}×{GRID_SIZE}</span>
          <span>Total: {GRID_SIZE * GRID_SIZE} parcels</span>
        </div>
      </div>

      {/* Map */}
      <div ref={mapRef} className="map-leaflet" />

      {/* Tooltip on hover */}
      {hoveredCell && (
        <div ref={tooltipRef} className="map-tooltip">
          <div className="tooltip-coords">
            ({hoveredCell.x}, {hoveredCell.y})
          </div>
          <div
            className="tooltip-status"
            style={{ color: STATUS_COLORS[hoveredCell.status] }}
          >
            {STATUS_LABELS[hoveredCell.status]}
          </div>
          {hoveredCell.owner && (
            <div className="tooltip-owner">Owner: {hoveredCell.owner}</div>
          )}
          {hoveredCell.name && (
            <div className="tooltip-name">{hoveredCell.name}</div>
          )}
        </div>
      )}

      {/* Coordinates display */}
      <div className="map-coords-display">
        X: {coordinates.x} &nbsp; Y: {coordinates.y}
      </div>

      {/* Selected cell panel */}
      {selectedCell && (
        <div className="map-cell-panel">
          <button className="panel-close" onClick={() => setSelectedCell(null)}>
            ✕
          </button>
          <h3>
            Parcel ({selectedCell.x}, {selectedCell.y})
          </h3>
          <div className="panel-info">
            <div className="panel-row">
              <span>Status</span>
              <span
                className="panel-status"
                style={{ color: STATUS_COLORS[selectedCell.status] }}
              >
                {STATUS_LABELS[selectedCell.status]}
              </span>
            </div>
            <div className="panel-row">
              <span>Coordinates</span>
              <span>
                ({selectedCell.x}, {selectedCell.y})
              </span>
            </div>
            {selectedCell.owner && (
              <div className="panel-row">
                <span>Owner</span>
                <span>{selectedCell.owner}</span>
              </div>
            )}
            {selectedCell.name && (
              <div className="panel-row">
                <span>Name</span>
                <span>{selectedCell.name}</span>
              </div>
            )}
          </div>
          {selectedCell.status === "available" && (
            <button className="btn-buy">Buy Land</button>
          )}
        </div>
      )}
    </div>
  );
}
