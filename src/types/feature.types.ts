

import type { Feature, Geometry } from "geojson";
import type { ShapeType } from "./geometry.types";




export interface FeatureProperties {
  id: string;
  shapeType: ShapeType;
  createdAt: string;
}


export type AppFeature = Feature<Geometry, FeatureProperties>;


export interface FeatureError {
  message: string;
  timestamp: number;
}
