

import { useMap as useLeafletMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";



export const useMap = () => {
  const map = useLeafletMap();

  useEffect(() => {
    if (!map) return;

   
    map.options.zoomSnap = 0.5;
    map.options.zoomDelta = 0.5;

    map.scrollWheelZoom.enable();

   
  }, [map]);

  return map;
};
