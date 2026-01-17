

import { useEffect } from "react";
import L from "leaflet";


const DrawingToolbar = () => {
  useEffect(() => {

  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top:"220px",
        left: "10px",
        zIndex: 1000,
        background: "#ffffff",
        borderRadius: "8px",
        padding: "12px 14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontSize: "14px",
        lineHeight: "1.4",
      }}
    >
      <strong>Drawing Tools</strong>
      <ul style={{ margin: "8px 0 0", paddingLeft: "16px" }}>
        <li>Line String</li>
        <li>Polygon</li>
        <li>Rectangle</li>
        <li>Circle</li>
        
      </ul>

      <div style={{ marginTop: "8px", color: "#6b7280" }}>
        
              Use map controls to draw
      </div>
    </div>
  );
};

export default DrawingToolbar;
