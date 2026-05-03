export const BASE_STYLE = 'mapbox://styles/mapbox/outdoors-v12';

export const DEFAULT_TERRAIN_EXAGGERATION = 1.2;

export const HILLSHADE_PAINT = {
  'hillshade-shadow-color': '#3A2E1E',
  'hillshade-highlight-color': '#F8F5EE',
  'hillshade-accent-color': '#8C7A5B',
  'hillshade-illumination-direction': 335,
  'hillshade-illumination-anchor': 'viewport',
  'hillshade-exaggeration': 0.45,
};

export const COUNTRY_BORDER_PAINT = {
  'line-color': '#5C4A2A',
  'line-width': [
    'interpolate', ['linear'], ['zoom'],
    0, 0.4, 4, 0.9, 8, 2.0, 12, 3.2,
  ],
  'line-opacity': 0.88,
};

export const ADMIN1_BORDER_PAINT = {
  'line-color': '#7A6A52',
  'line-width': [
    'interpolate', ['linear'], ['zoom'],
    4, 0.4, 8, 1.0, 12, 1.8,
  ],
  'line-opacity': 0.55,
  'line-dasharray': [4, 3],
};

export const COUNTRY_HIGHLIGHT_PAINT = {
  'fill-color': '#E67E22',
  'fill-opacity': 0.15,
  'fill-outline-color': '#C0561A',
};
