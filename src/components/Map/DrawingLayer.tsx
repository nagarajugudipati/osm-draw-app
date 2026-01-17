

import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import L, { LeafletEvent } from "leaflet";

import { useFeatureStore } from "../../store/featureStore";
import { validateAndProcessShape } from "../../utils/geometry.utils";
import type { ShapeType } from "../../types/geometry.types";


const DrawingLayer = () => {
  const addFeature = useFeatureStore((state) => state.addFeature);

  
  const onCreated = (event: LeafletEvent) => {
    const layer = (event as any).layer as L.Layer;
    const layerType = (event as any).layerType as ShapeType;

    
    const geoJson = layer.toGeoJSON();

    const processedFeature = validateAndProcessShape({
      geoJson,
      shapeType: layerType,
    });

   
    if (!processedFeature) {
      return;
    }

    addFeature(processedFeature);
  };

  return (
    <FeatureGroup>
      <EditControl
        position="topleft"
        onCreated={onCreated}
        draw={{
          polyline: true, // Line String
          polygon: true,
          rectangle: true,
          circle: true,
          marker: false,
          circlemarker: false,
        }}
        edit={{
          edit: false,
          remove: false,
        }}
      />
    </FeatureGroup>
  );
};

export default DrawingLayer;
