

import type { ShapeType } from "./geometry.types";
export type ShapeLimitConfig = Record<ShapeType, number>;

export interface AppConfig {
  shapeLimits: ShapeLimitConfig;
}
