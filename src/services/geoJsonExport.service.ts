

import type { Feature, FeatureCollection, Geometry } from "geojson";



export const exportFeaturesAsGeoJSON = (
  features: Feature<Geometry>[],
  fileName: string = "drawn-features.geojson"
) => {
  const featureCollection: FeatureCollection = {
    type: "FeatureCollection",
    features,
  };

  const geoJsonString = JSON.stringify(featureCollection, null, 2);

  const blob = new Blob([geoJsonString], {
    type: "application/geo+json",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();

  
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
