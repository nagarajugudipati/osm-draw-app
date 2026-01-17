

import type { ShapeType } from "../types/geometry.types";
import { shapeLimits } from "../config/shapeLimits.config";



export const getMaxAllowedShapes = (shapeType: ShapeType): number => {
  return shapeLimits[shapeType] ?? Infinity;
};

export const canAddShape = (
  shapeType: ShapeType,
  currentCount: number
): boolean => {
  const maxAllowed = getMaxAllowedShapes(shapeType);
  return currentCount < maxAllowed;
};
