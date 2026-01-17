# OpenStreetMap Drawing Application

# Project Overview
This project is a web application built using **React.js + TypeScript** that renders **OpenStreetMap free tiles** and allows users to draw and manage geometrical features on the map.

Users can draw **Polygon, Rectangle, Circle, and LineString** shapes with defined spatial constraints and export all drawn features in **GeoJSON format**.

---

# Features
- Render OpenStreetMap tiles with smooth zooming and panning
- Draw the following geometrical features:
  - Polygon
  - Rectangle
  - Circle
  - LineString
- Enforce non-overlapping rules for polygonal features
- Automatically trim overlapping polygon areas
- Block shapes that fully enclose existing shapes
- Allow LineStrings to freely intersect any shape
- Export all drawn features as a GeoJSON file
- Configurable maximum limits for each shape type
- Clean, modular, and scalable code structure

---

# Tech Stack
- React.js
- TypeScript
- Vite
- Leaflet & React-Leaflet
- Leaflet Draw
- Turf.js (for spatial operations)
- Zustand (state management)

---

# Setup & Run Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/nagarajugudipati/osm-draw-app.git

# Live Demo
https://osm-draw-app-g1zm.vercel.app/
