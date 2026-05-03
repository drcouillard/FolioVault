import { useEffect } from 'react';
import { useMap } from '../MapContext';
import { HILLSHADE_PAINT, DEFAULT_TERRAIN_EXAGGERATION } from '../utils/mapConfig';
import { TERRAIN_SOURCE } from '../utils/sourceConfig';

const LAYER_ID = 'folio-hillshade';
const SOURCE_ID = TERRAIN_SOURCE.id;

/**
 * Adds Mapbox terrain DEM and a hillshade layer.
 *
 * Props:
 *   visible      — show/hide the hillshade (terrain DEM stays active for 3D)
 *   exaggeration — vertical terrain exaggeration multiplier (default: 1.2)
 */
export function TerrainLayer({ visible = true, exaggeration = DEFAULT_TERRAIN_EXAGGERATION }) {
  const { map, isLoaded } = useMap();

  // Mount: add DEM source, set terrain, add hillshade layer
  useEffect(() => {
    if (!map || !isLoaded) return;

    if (!map.getSource(SOURCE_ID)) {
      map.addSource(SOURCE_ID, TERRAIN_SOURCE.config);
    }

    map.setTerrain({ source: SOURCE_ID, exaggeration });

    const firstSymbolId = map.getStyle().layers.find(l => l.type === 'symbol')?.id;

    if (!map.getLayer(LAYER_ID)) {
      map.addLayer(
        {
          id: LAYER_ID,
          type: 'hillshade',
          source: SOURCE_ID,
          layout: { visibility: visible ? 'visible' : 'none' },
          paint: HILLSHADE_PAINT,
        },
        firstSymbolId
      );
    }

    return () => {
      try {
        if (map.getLayer(LAYER_ID)) map.removeLayer(LAYER_ID);
        if (map.getSource(SOURCE_ID)) {
          map.setTerrain(null);
          map.removeSource(SOURCE_ID);
        }
      } catch { /* map already removed */ }
    };
  }, [map, isLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!map || !isLoaded || !map.getLayer(LAYER_ID)) return;
    map.setLayoutProperty(LAYER_ID, 'visibility', visible ? 'visible' : 'none');
  }, [visible, map, isLoaded]);

  useEffect(() => {
    if (!map || !isLoaded || !map.getSource(SOURCE_ID)) return;
    map.setTerrain({ source: SOURCE_ID, exaggeration });
  }, [exaggeration, map, isLoaded]);

  return null;
}
