
import L from "leaflet";
import { useCallback } from "react";
import type { Feature } from "geojson";

import { useFeatureStore } from "../store/featureStore";
import { validateAndProcessShape } from "../utils/geometry.utils";
import type { ShapeType } from "../types/geometry.types";


export const useDrawing = () => {
  const addFeature = useFeatureStore((state) => state.addFeature);
  const setError = useFeatureStore((state) => state.setError);

  
  const handleCreate = useCallback(
    (layer: L.Layer, shapeType: ShapeType) => {
      try {
        
        const geoJson = layer.toGeoJSON() as Feature;

        
        const processedFeature = validateAndProcessShape({
          geoJson,
          shapeType,
        });

        if (!processedFeature) {
          setError("Invalid geometry. Shape creation blocked.");
          return;
        }

        
        addFeature(processedFeature);
      } catch (error) {
       
        setError(
          error instanceof Error
            ? error.message
            : "Failed to process drawn shape"
        );
      }
    },
    [addFeature, setError]
  );

  return {
    handleCreate,
  };
};
