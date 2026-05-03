import { useEffect } from 'react';
import { useMap } from '../MapContext';

const RASTER_SOURCE_ID = 'folio-climate-raster';
const RASTER_LAYER_ID = 'folio-climate-raster-layer';
const GEOJSON_SOURCE_ID = 'folio-climate-geojson';
const GEOJSON_LAYER_ID = 'folio-climate-geojson-layer';

/**
 * Semi-transparent climate overlay. Supports two modes:
 *
 * Raster mode (tileUrl provided):
 *   Supply any XYZ tile URL, e.g. OpenWeatherMap temperature tiles:
 *     tileUrl="https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=YOUR_KEY"
 *   Or NASA GIBS land surface temperature:
 *     tileUrl="https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_Land_Surface_Temp_Day/default/GoogleMapsCompatible_Level7/{z}/{y}/{x}.jpg"
 *
 * GeoJSON mode (geoJsonUrl provided, tileUrl absent):
 *   Fetches a GeoJSON FeatureCollection where each feature has a `climate`
 *   property matching a key in KOPPEN_COLORS (e.g. "Cfb", "BWh"). Renders
 *   filled polygons using the standard Köppen color scheme.
 *
 * Props:
 *   tileUrl    — XYZ raster tile URL template (mutually exclusive with geoJsonUrl)
 *   geoJsonUrl — URL to a GeoJSON FeatureCollection with Köppen properties
 *   colorMap   — override for GeoJSON mode: { "Cfb": "#96FF96", ... }
 *   opacity    — overall opacity (default: 0.5)
 *   tileSize   — tile size in pixels for raster mode (default: 256)
 *   visible    — show/hide the layer
 */
export function ClimateLayer({
  tileUrl,
  geoJsonUrl,
  colorMap,
  opacity = 0.5,
  tileSize = 256,
  visible = true,
}) {
  const { map, isLoaded } = useMap();

  // Raster mode
  useEffect(() => {
    if (!map || !isLoaded || !tileUrl) return;

    if (!map.getSource(RASTER_SOURCE_ID)) {
      map.addSource(RASTER_SOURCE_ID, {
        type: 'raster',
        tiles: [tileUrl],
        tileSize,
      });
    }

    if (!map.getLayer(RASTER_LAYER_ID)) {
      map.addLayer({
        id: RASTER_LAYER_ID,
        type: 'raster',
        source: RASTER_SOURCE_ID,
        layout: { visibility: visible ? 'visible' : 'none' },
        paint: { 'raster-opacity': opacity },
      });
    }

    return () => {
      try {
        if (map.getLayer(RASTER_LAYER_ID)) map.removeLayer(RASTER_LAYER_ID);
        if (map.getSource(RASTER_SOURCE_ID)) map.removeSource(RASTER_SOURCE_ID);
      } catch { /* map already removed */ }
    };
  }, [map, isLoaded, tileUrl, tileSize]); // eslint-disable-line react-hooks/exhaustive-deps

  // GeoJSON mode
  useEffect(() => {
    if (!map || !isLoaded || !geoJsonUrl || tileUrl) return;

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(geoJsonUrl);
        const geojson = await res.json();
        if (cancelled || !map) return;

        if (!map.getSource(GEOJSON_SOURCE_ID)) {
          map.addSource(GEOJSON_SOURCE_ID, { type: 'geojson', data: geojson });
        }

        if (!map.getLayer(GEOJSON_LAYER_ID)) {
          const resolvedColors = colorMap || {};
          const colorExpression = ['match', ['get', 'climate'],
            ...Object.entries(resolvedColors).flat(),
            'rgba(0,0,0,0)',
          ];

          map.addLayer({
            id: GEOJSON_LAYER_ID,
            type: 'fill',
            source: GEOJSON_SOURCE_ID,
            layout: { visibility: visible ? 'visible' : 'none' },
            paint: {
              'fill-color': colorExpression,
              'fill-opacity': opacity,
            },
          });
        }
      } catch { /* fetch or parse error */ }
    })();

    return () => {
      cancelled = true;
      try {
        if (map.getLayer(GEOJSON_LAYER_ID)) map.removeLayer(GEOJSON_LAYER_ID);
        if (map.getSource(GEOJSON_SOURCE_ID)) map.removeSource(GEOJSON_SOURCE_ID);
      } catch { /* map already removed */ }
    };
  }, [map, isLoaded, geoJsonUrl, tileUrl]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync visibility
  useEffect(() => {
    if (!map || !isLoaded) return;
    const vis = visible ? 'visible' : 'none';
    if (map.getLayer(RASTER_LAYER_ID)) map.setLayoutProperty(RASTER_LAYER_ID, 'visibility', vis);
    if (map.getLayer(GEOJSON_LAYER_ID)) map.setLayoutProperty(GEOJSON_LAYER_ID, 'visibility', vis);
  }, [visible, map, isLoaded]);

  // Sync opacity
  useEffect(() => {
    if (!map || !isLoaded) return;
    if (map.getLayer(RASTER_LAYER_ID)) map.setPaintProperty(RASTER_LAYER_ID, 'raster-opacity', opacity);
    if (map.getLayer(GEOJSON_LAYER_ID)) map.setPaintProperty(GEOJSON_LAYER_ID, 'fill-opacity', opacity);
  }, [opacity, map, isLoaded]);

  return null;
}
