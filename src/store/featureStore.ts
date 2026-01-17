

import { create } from "zustand";
import type { Feature, Geometry } from "geojson";

import type { ShapeType } from "../types/geometry.types";
import type { AppFeature } from "../types/feature.types";
import { shapeLimits } from "../config/shapeLimits.config";



interface FeatureStoreState {
  features: AppFeature[];

  error: string | null;
  addFeature: (feature: Feature<Geometry>) => void;
  removeFeature: (id: string) => void;
  clearFeatures: () => void;

  setError: (message: string) => void;
  clearError: () => void;
}

const countByShapeType = (
  features: AppFeature[],
  shapeType: ShapeType
): number => {
  return features.filter(
    (f) => f.properties?.shapeType === shapeType
  ).length;
};

export const useFeatureStore = create<FeatureStoreState>((set, get) => ({
  features: [],
  error: null,

  addFeature: (feature) => {
    const shapeType = feature.properties?.shapeType as ShapeType;

    if (!shapeType) {
      set({ error: "Invalid feature: missing shape type" });
      return;
    }

    const currentFeatures = get().features;
    const currentCount = countByShapeType(currentFeatures, shapeType);
    const maxAllowed = shapeLimits[shapeType];

    if (currentCount >= maxAllowed) {
      set({
        error: `Maximum ${maxAllowed} ${shapeType}(s) allowed`,
      });
      return;
    }

    set({
      features: [...currentFeatures, feature as AppFeature],
      error: null,
    });
  },

  removeFeature: (id) => {
    set({
      features: get().features.filter(
        (feature) => feature.properties?.id !== id
      ),
    });
  },

  clearFeatures: () => {
    set({
      features: [],
      error: null,
    });
  },

  setError: (message) => set({ error: message }),
  clearError: () => set({ error: null }),
}));
