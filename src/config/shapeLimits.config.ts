

import type { ShapeType } from "../types/geometry.types";


export const shapeLimits: Record<ShapeType, number> = {
  polygon: 10,
  rectangle: 5,
  circle: 5,
  polyline: Infinity,
};
