

import { GeoJSON } from "react-leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";

import { useFeatureStore } from "../../store/featureStore";


const FeatureLayer = () => {
  const features = useFeatureStore((state) => state.features);

  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features: features as Feature<Geometry>[],
  };

  return (
    <GeoJSON
      data={featureCollection}
      style={(feature) => {
        switch (feature?.properties?.shapeType) {
          case "polygon":
          case "rectangle":
            return { color: "#2563eb", weight: 2, fillOpacity: 0.3 };

          case "circle":
            return { color: "#16a34a", weight: 2, fillOpacity: 0.3 };

          case "polyline":
            return { color: "#dc2626", weight: 3 };

          default:
            return { color: "#000000" };
        }
      }}
    />
  );
};

export default FeatureLayer;
