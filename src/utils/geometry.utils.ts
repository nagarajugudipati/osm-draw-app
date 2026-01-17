
import type {
  Feature,
  Geometry,
  Polygon,
  MultiPolygon,
  FeatureCollection,
} from "geojson";
import * as turf from "@turf/turf";

import type { ShapeType } from "../types/geometry.types";
import { useFeatureStore } from "../store/featureStore";


interface ValidateParams {
  geoJson: Feature<Geometry>;
  shapeType: ShapeType;
}


const isPolygonal = (type: ShapeType) =>
  type === "polygon" || type === "rectangle" || type === "circle";


export const validateAndProcessShape = ({
  geoJson,
  shapeType,
}: ValidateParams): Feature<Geometry> | null => {
 
  if (shapeType === "polyline") {
    return attachMetadata(geoJson, shapeType);
  }

 
  const existingFeatures = useFeatureStore.getState().features;

  let processedGeometry: Feature<Polygon | MultiPolygon> =
    geoJson as Feature<Polygon | MultiPolygon>;

  for (const existing of existingFeatures) {
    const existingType = existing.properties?.shapeType as ShapeType;

   
    if (!isPolygonal(existingType)) continue;

  
    if (
      turf.booleanContains(
        processedGeometry as any,
        existing as any
      )
    ) {
      return null;
    }

  
    if (
      turf.booleanIntersects(
        processedGeometry as any,
        existing as any
      )
    ) {
      const difference = turf.difference(
        processedGeometry as any,
        existing as any
      ) as Feature<Polygon | MultiPolygon> | null;

     
      if (!difference) {
        return null;
      }

      processedGeometry = difference;
    }
  }

 
  return attachMetadata(processedGeometry, shapeType);
};

const attachMetadata = (
  feature: Feature<Geometry>,
  shapeType: ShapeType
): Feature<Geometry> => {
  return {
    ...feature,
    properties: {
      ...(feature.properties || {}),
      id: crypto.randomUUID(),
      shapeType,
      createdAt: new Date().toISOString(),
    },
  };
};
