


export type ShapeType =
  | "polygon"
  | "rectangle"
  | "circle"
  | "polyline";

export type PolygonalShapeType =
  | "polygon"
  | "rectangle"
  | "circle";


export const isPolygonalShape = (
  shapeType: ShapeType
): shapeType is PolygonalShapeType => {
  return (
    shapeType === "polygon" ||
    shapeType === "rectangle" ||
    shapeType === "circle"
  );
};
