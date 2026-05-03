```
---id: module-map-rendering-systemtype: moduledomain: geospatial-renderingstatus: reusableorchestrator_compatible: true---# 🧭 Module: Map Rendering System## 🎯 PurposeProvide a reusable, data-driven system for rendering country-level maps in React using layered geospatial data.This module converts a **visual reference style** into a **scalable rendering architecture**.---## 🧠 When to UseUse this module when:- Building interactive maps in React- Replicating topographic / climate / political map styles- Supporting multiple countries with consistent visuals- Avoiding static image-based rendering---## 🎯 Goal Template (goal-scout)```textBuild a reusable React map rendering system that reproduces a shaded topographic + political + climate aesthetic using real geospatial data, and works for any country.
```

---

## 🏗️ System Architecture (system-architect)

### Layer Model

```
Base Layer     → Elevation (DEM / raster)Overlay Layer  → Climate / vegetationVector Layer   → Borders (GeoJSON)Label Layer    → Cities / regionsUI Layer       → Controls
```

---

### Rendering Stack

```
core:  - react  - mapbox-gl-jsoptional:  - deck-gl  - d3data_formats:  - geojson  - topojson  - raster tiles
```

---

## 📦 Component System

### Required Components

```
<MapContainer /><TerrainLayer /><ClimateLayer /><BordersLayer /><LabelsLayer /><LayerControls />
```

---

### Component Responsibilities

#### MapContainer

- Initializes map instance
- Handles viewport, projection, bounds

#### TerrainLayer

- Applies elevation shading
- Uses DEM / terrain tiles

#### ClimateLayer

- Semi-transparent overlay
- Toggleable visibility

#### BordersLayer

- Renders GeoJSON boundaries

#### LabelsLayer

- Renders text (cities, regions)

#### LayerControls

- Toggle layers
- Adjust opacity

---

## 🌍 Data Requirements

### Elevation (Required)

```
type: raster (DEM)uses:  - hillshade  - elevation coloring
```

---

### Borders (Required)

```
type: geojsonincludes:  - country boundaries  - optional subregions
```

---

### Climate (Optional)

```
type: polygon or rasterexample: koppen classification
```

---

### Labels (Optional)

```
type: point dataexamples:  - cities  - rivers  - regions
```

---

## 🎨 Visual Style Rules

### Elevation Gradient

```
low → greenmid → yellow / tanhigh → brown → gray → white
```

---

### Climate Overlay

```
wet → greensemi-arid → yellowarid → brownopacity → 0.3–0.5
```

---

### Borders

```
thinlow contrastnon-dominant
```

---

### Labels

```
top layerminimal clutterlegible at multiple zoom levels
```

---

## ⚙️ Implementation Skeleton

```
<MapContainer country="FRA">  <TerrainLayer />  <ClimateLayer visible opacity={0.4} />  <BordersLayer />  <LabelsLayer />  <LayerControls /></MapContainer>
```

---

## 🔁 Reusability Contract

The system MUST:

- Accept `country` as a prop
- Dynamically load:
    - boundaries
    - terrain
    - overlays
- Avoid hardcoded geography
- Maintain consistent styling across regions

---

## 🚫 Anti-Patterns

Do NOT:

- Use static images as map sources
- Hardcode coordinates or shapes
- Tie logic to a single country
- Flatten layers into one render pass

---

## 🧪 Validation Checklist (plan-auditor)

- [ ]  Works for multiple countries
- [ ]  Layers toggle independently
- [ ]  Scales cleanly with zoom
- [ ]  Visual style remains consistent
- [ ]  No raster-only dependency

---

## 🤖 Claude Code Handoff (output-formatter)

```
Build a reusable React map rendering system with the following constraints:- Use Mapbox GL JS- Implement layered rendering:  - Terrain (DEM + hillshade)  - Climate overlay (semi-transparent)  - Borders (GeoJSON)  - Labels- Create modular React components:  - MapContainer  - TerrainLayer  - ClimateLayer  - BordersLayer  - LabelsLayer  - LayerControls- Ensure the system works for any country- Load all data dynamically (no hardcoding)Output:- Clean React component structure- Clear separation of concerns- Instructions for adding new countries
```

---

## 🔌 Extensions

```
future:  - 3d terrain  - time-based climate layers  - hover inspection (elevation, biome)  - export to static images  - inset region support
```

---

## 🔗 Related Modules

```
module-visual-composition-systemmodule-data-layering-systemmodule-react-component-architecture
```

```
---# 🧠 How This Fits Your SystemThis module now cleanly plugs into your pipeline:### 1. intent-classifier→ detects: *“map generation / visualization”*### 2. goal-scout→ uses embedded goal template### 3. system-architect→ pulls this module as a building block### 4. plan-auditor→ runs validation checklist### 5. output-formatter→ uses Claude handoff block---# ⚡ Optional Next Move (High Leverage)If you want to level this up further, the next smart module would be:
```

module-geospatial-data-sourcing.md

```
That would standardize:- where terrain comes from- how GeoJSON is fetched- caching strategy- normalizationRight now, your rendering system assumes data—this would *complete the pipeline*.---If you want, :contentReference[oaicite:0]{index=0}
```