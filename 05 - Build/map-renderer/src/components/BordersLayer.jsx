import { useEffect } from 'react';
import { useMap } from '../MapContext';
import {
  COUNTRY_BORDER_PAINT,
  ADMIN1_BORDER_PAINT,
  COUNTRY_HIGHLIGHT_PAINT,
} from '../utils/mapConfig';
import {
  COUNTRY_BOUNDARIES_SOURCE,
  BUILTIN_ADMIN_LAYER_IDS,
} from '../utils/sourceConfig';

const SOURCE_ID = COUNTRY_BOUNDARIES_SOURCE.id;
const COUNTRY_LINE_ID = 'folio-country-borders';
const HIGHLIGHT_FILL_ID = 'folio-country-highlight';

/**
 * Renders political borders with topographic-map styling.
 *
 * Country borders come from Mapbox's country-boundaries-v1 tileset.
 * Admin-1 (state/province) borders are toggled on the base style's built-in layers.
 *
 * Props:
 *   visible       — show/hide all border layers
 *   showAdmin1    — show state/province lines (default: false)
 *   countryFilter — ISO 3166-1 alpha-2 code to highlight with fill (optional)
 *   highlightColor — fill color for the highlighted country (default: '#E67E22')
 *   worldview     — geopolitical worldview for disputed borders:
 *                   'US' | 'CN' | 'IN' | 'AR' | 'JP' | 'MA' | 'RU' | 'TR'
 *                   (default: 'US')
 */
export function BordersLayer({
  visible = true,
  showAdmin1 = false,
  countryFilter = null,
  highlightColor = '#E67E22',
  worldview = 'US',
}) {
  const { map, isLoaded } = useMap();

  // Mount: add country-boundaries source and line layer
  useEffect(() => {
    if (!map || !isLoaded) return;

    if (!map.getSource(SOURCE_ID)) {
      map.addSource(SOURCE_ID, COUNTRY_BOUNDARIES_SOURCE.config);
    }

    if (!map.getLayer(COUNTRY_LINE_ID)) {
      map.addLayer({
        id: COUNTRY_LINE_ID,
        type: 'line',
        source: SOURCE_ID,
        'source-layer': 'country_boundaries',
        filter: ['==', ['get', 'worldview'], worldview],
        layout: { visibility: visible ? 'visible' : 'none' },
        paint: COUNTRY_BORDER_PAINT,
      });
    }

    return () => {
      try {
        if (map.getLayer(HIGHLIGHT_FILL_ID)) map.removeLayer(HIGHLIGHT_FILL_ID);
        if (map.getLayer(COUNTRY_LINE_ID)) map.removeLayer(COUNTRY_LINE_ID);
        if (map.getSource(SOURCE_ID)) map.removeSource(SOURCE_ID);
      } catch { /* map already removed */ }
    };
  }, [map, isLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  // Country highlight fill
  useEffect(() => {
    if (!map || !isLoaded || !map.getSource(SOURCE_ID)) return;

    if (map.getLayer(HIGHLIGHT_FILL_ID)) map.removeLayer(HIGHLIGHT_FILL_ID);

    if (countryFilter) {
      map.addLayer(
        {
          id: HIGHLIGHT_FILL_ID,
          type: 'fill',
          source: SOURCE_ID,
          'source-layer': 'country_boundaries',
          filter: [
            'all',
            ['==', ['get', 'iso_3166_1'], countryFilter.toUpperCase()],
            ['==', ['get', 'worldview'], worldview],
          ],
          layout: { visibility: visible ? 'visible' : 'none' },
          paint: {
            ...COUNTRY_HIGHLIGHT_PAINT,
            'fill-color': highlightColor,
          },
        },
        COUNTRY_LINE_ID
      );
    }
  }, [countryFilter, highlightColor, worldview, map, isLoaded, visible]);

  // Toggle built-in admin-1 layers
  useEffect(() => {
    if (!map || !isLoaded) return;
    const vis = (visible && showAdmin1) ? 'visible' : 'none';
    BUILTIN_ADMIN_LAYER_IDS.forEach(id => {
      if (map.getLayer(id)) map.setLayoutProperty(id, 'visibility', vis);
    });
  }, [visible, showAdmin1, map, isLoaded]);

  // Sync main border visibility
  useEffect(() => {
    if (!map || !isLoaded) return;
    const vis = visible ? 'visible' : 'none';
    if (map.getLayer(COUNTRY_LINE_ID)) map.setLayoutProperty(COUNTRY_LINE_ID, 'visibility', vis);
    if (map.getLayer(HIGHLIGHT_FILL_ID)) map.setLayoutProperty(HIGHLIGHT_FILL_ID, 'visibility', vis);
  }, [visible, map, isLoaded]);

  return null;
}
