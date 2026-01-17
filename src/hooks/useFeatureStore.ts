

import { useCallback } from "react";
import type { Feature, Geometry } from "geojson";

import { useFeatureStore as useStore } from "../store/featureStore";



export const useFeatureStore = () => {
  const features = useStore((state) => state.features);
  const error = useStore((state) => state.error);

  const addFeature = useStore((state) => state.addFeature);
  const removeFeature = useStore((state) => state.removeFeature);
  const clearFeatures = useStore((state) => state.clearFeatures);
  const setError = useStore((state) => state.setError);
  const clearError = useStore((state) => state.clearError);

  
  const safeAddFeature = useCallback(
    (feature: Feature<Geometry>) => {
      addFeature(feature);
    },
    [addFeature]
  );

  return {
    features,
    error,

    addFeature: safeAddFeature,
    removeFeature,
    clearFeatures,
    setError,
    clearError,
  };
};
