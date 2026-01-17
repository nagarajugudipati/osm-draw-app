

import type { Feature, Geometry } from "geojson";

import { validateAndProcessShape } from "../utils/geometry.utils";
import type { ShapeType } from "../types/geometry.types";
import { useFeatureStore } from "../store/featureStore";



interface ValidateParams {
  geoJson: Feature<Geometry>;
  shapeType: ShapeType;
}

export const useShapeValidation = () => {
  const addFeature = useFeatureStore((state) => state.addFeature);
  const setError = useFeatureStore((state) => state.setError);

 
  const validateShape = ({ geoJson, shapeType }: ValidateParams) => {
    try {
      const processedFeature = validateAndProcessShape({
        geoJson,
        shapeType,
      });

      if (!processedFeature) {
        setError(
          "Shape creation blocked: polygon cannot fully enclose another polygon."
        );
        return false;
      }

      addFeature(processedFeature);
      return true;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to validate geometry"
      );
      return false;
    }
  };

  return {
    validateShape,
  };
};
