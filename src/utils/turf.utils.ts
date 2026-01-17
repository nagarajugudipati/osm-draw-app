
import type {
  Feature,
  Geometry,
  Polygon,
  MultiPolygon,
  LineString,
} from "geojson";
import * as turf from "@turf/turf";



export const isFullyContaining = (
  source: Feature<Polygon | MultiPolygon>,
  target: Feature<Polygon | MultiPolygon>
): boolean => {
  return turf.booleanContains(source as any, target as any);
};


export const isIntersecting = (
  source: Feature<Geometry>,
  target: Feature<Geometry>
): boolean => {
  return turf.booleanIntersects(source as any, target as any);
};


export const subtractPolygon = (
  source: Feature<Polygon | MultiPolygon>,
  target: Feature<Polygon | MultiPolygon>
): Feature<Polygon | MultiPolygon> | null => {
  return turf.difference(
    source as any,
    target as any
  ) as Feature<Polygon | MultiPolygon> | null;
};

export const circleToPolygon = (
  center: [number, number],
  radiusInMeters: number,
  steps = 64
): Feature<Polygon> => {
  return turf.circle(center, radiusInMeters, {
    steps,
    units: "meters",
  }) as Feature<Polygon>;
};


export const isValidGeometry = (
  feature: Feature<Geometry>
): boolean => {
  try {
    turf.area(feature as any);
    return true;
  } catch {
    return false;
  }
};


export const calculateArea = (
  feature: Feature<Polygon | MultiPolygon>
): number => {
  return turf.area(feature as any);
};


export const calculateLength = (
  feature: Feature<LineString>
): number => {
  return turf.length(feature as any, { units: "kilometers" });
};
