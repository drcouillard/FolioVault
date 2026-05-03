import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapContext } from '../MapContext';
import { BASE_STYLE } from '../utils/mapConfig';
import { getCountryBounds } from '../utils/countryBounds';

/**
 * Root map component. Initializes Mapbox GL JS and exposes the map instance
 * via MapContext. All layer components must be rendered as children.
 *
 * Props:
 *   accessToken  — Mapbox public token (required)
 *   country      — ISO 3166-1 alpha-2 code to auto-fit bounds (optional)
 *   initialCenter — [lng, lat] used only on first render (default: [10, 20])
 *   initialZoom  — zoom level on first render (default: 2)
 *   style        — Mapbox style URL (default: outdoors-v12)
 *   width/height — CSS dimensions (default: '100%')
 *   className    — additional CSS class
 */
export function MapContainer({
  accessToken,
  country,
  initialCenter = [10, 20],
  initialZoom = 2,
  style = BASE_STYLE,
  width = '100%',
  height = '100%',
  className = '',
  children,
}) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [mapState, setMapState] = useState({ map: null, isLoaded: false });

  useEffect(() => {
    if (!containerRef.current) return;

    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style,
      center: initialCenter,
      zoom: initialZoom,
      attributionControl: true,
    });

    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: false }), 'top-right');
    map.addControl(new mapboxgl.ScaleControl({ unit: 'metric' }), 'bottom-left');

    map.on('style.load', () => {
      setMapState({ map, isLoaded: true });
    });

    mapRef.current = map;

    return () => {
      setMapState({ map: null, isLoaded: false });
      map.remove();
      mapRef.current = null;
    };
  }, [accessToken, style]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const { map, isLoaded } = mapState;
    if (!map || !isLoaded || !country) return;

    let cancelled = false;

    (async () => {
      const bounds = await getCountryBounds(country, accessToken);
      if (!cancelled && bounds) {
        map.fitBounds(bounds, { padding: 48, duration: 1200, maxZoom: 12 });
      }
    })();

    return () => { cancelled = true; };
  }, [country, mapState, accessToken]);

  return (
    <MapContext.Provider value={mapState}>
      <div
        ref={containerRef}
        className={`folio-map ${className}`}
        style={{ width, height, position: 'relative' }}
      >
        {mapState.isLoaded && children}
      </div>
    </MapContext.Provider>
  );
}
