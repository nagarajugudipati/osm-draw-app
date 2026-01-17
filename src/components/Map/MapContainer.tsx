

import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import DrawingLayer from "./DrawingLayer";
import FeatureLayer from "./FeatureLayer";

const MapContainer = () => {
  return (
    <LeafletMap
      center={[20.5937, 78.9629]} 
      zoom={5}
      minZoom={2}
      style={{ height: "100vh", width: "100%" }}
      preferCanvas={true} 
    >
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <DrawingLayer />

      <FeatureLayer />
    </LeafletMap>
  );
};

export default MapContainer;
