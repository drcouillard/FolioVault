import { useEffect } from 'react';
import { useMap } from '../MapContext';
import { BUILTIN_LABEL_LAYER_IDS } from '../utils/sourceConfig';

const CUSTOM_SOURCE_ID = 'folio-custom-labels';
const DOT_LAYER_ID = 'folio-label-dot';
const TEXT_LAYER_ID = 'folio-label-text';

/**
 * Controls place labels — both Mapbox's built-in labels and custom educational markers.
 *
 * Custom labels are passed as an array of feature objects:
 *   { id, name, coordinates: [lng, lat], type?: 'capital'|'city'|'place' }
 *
 * Props:
 *   features          — array of label objects to render as map markers
 *   visible           — show/hide all label layers
 *   showBuiltinLabels — toggle Mapbox style's built-in place/country labels (default: true)
 */
export function LabelsLayer({ features = [], visible = true, showBuiltinLabels = true }) {
  const { map, isLoaded } = useMap();

  // Toggle built-in Mapbox label layers
  useEffect(() => {
    if (!map || !isLoaded) return;
    const vis = (visible && showBuiltinLabels) ? 'visible' : 'none';
    BUILTIN_LABEL_LAYER_IDS.forEach(id => {
      if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis);
    });
  }, [visible, showBuiltinLabels, map, isLoaded]);

  // Mount: add GeoJSON source and custom label layers
  useEffect(() => {
    if (!map || !isLoaded) return;

    const geojson = buildGeojson(features);

    if (!map.getSource(CUSTOM_SOURCE_ID)) {
      map.addSource(CUSTOM_SOURCE_ID, { type: 'geojson', data: geojson });
    }

    if (!map.getLayer(DOT_LAYER_ID)) {
      map.addLayer({
        id: DOT_LAYER_ID,
        type: 'circle',
        source: CUSTOM_SOURCE_ID,
        layout: { visibility: visible ? 'visible' : 'none' },
        paint: {
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            3, 2.5, 7, 4.5, 12, 7,
          ],
          'circle-color': [
            'match', ['get', 'type'],
            'capital', '#C0561A',
            '#5C4A2A',
          ],
          'circle-stroke-color': '#F8F5EE',
          'circle-stroke-width': 1.5,
        },
      });
    }

    if (!map.getLayer(TEXT_LAYER_ID)) {
      map.addLayer({
        id: TEXT_LAYER_ID,
        type: 'symbol',
        source: CUSTOM_SOURCE_ID,
        layout: {
          visibility: visible ? 'visible' : 'none',
          'text-field': ['get', 'name'],
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Regular'],
          'text-size': [
            'interpolate', ['linear'], ['zoom'],
            3, 10, 6, 13, 10, 16,
          ],
          'text-anchor': 'top',
          'text-offset': [0, 0.55],
          'text-max-width': 8,
          'text-allow-overlap': false,
          'text-ignore-placement': false,
        },
        paint: {
          'text-color': '#1A1208',
          'text-halo-color': 'rgba(255, 252, 242, 0.92)',
          'text-halo-width': 1.5,
        },
      });
    }

    return () => {
      try {
        if (map.getLayer(TEXT_LAYER_ID)) map.removeLayer(TEXT_LAYER_ID);
        if (map.getLayer(DOT_LAYER_ID)) map.removeLayer(DOT_LAYER_ID);
        if (map.getSource(CUSTOM_SOURCE_ID)) map.removeSource(CUSTOM_SOURCE_ID);
      } catch { /* map already removed */ }
    };
  }, [map, isLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  // Update source data when features change
  useEffect(() => {
    if (!map || !isLoaded) return;
    const source = map.getSource(CUSTOM_SOURCE_ID);
    if (source) source.setData(buildGeojson(features));
  }, [features, map, isLoaded]);

  // Sync custom label visibility
  useEffect(() => {
    if (!map || !isLoaded) return;
    const vis = visible ? 'visible' : 'none';
    if (map.getLayer(DOT_LAYER_ID)) map.setLayoutProperty(DOT_LAYER_ID, 'visibility', vis);
    if (map.getLayer(TEXT_LAYER_ID)) map.setLayoutProperty(TEXT_LAYER_ID, 'visibility', vis);
  }, [visible, map, isLoaded]);

  return null;
}

function buildGeojson(features) {
  return {
    type: 'FeatureCollection',
    features: features.map(f => ({
      type: 'Feature',
      id: f.id,
      geometry: { type: 'Point', coordinates: f.coordinates },
      properties: { name: f.name, type: f.type || 'place' },
    })),
  };
}
