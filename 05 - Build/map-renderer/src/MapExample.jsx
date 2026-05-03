import { useState } from 'react';
import {
  MapContainer,
  TerrainLayer,
  ClimateLayer,
  BordersLayer,
  LabelsLayer,
  LayerControls,
} from './index';

const MAPBOX_TOKEN = 'pk.YOUR_PUBLIC_TOKEN_HERE';

// Example: South America lesson with capital city markers
const SA_CAPITALS = [
  { id: 'bsas',     name: 'Buenos Aires', coordinates: [-58.38, -34.61], type: 'capital' },
  { id: 'lima',     name: 'Lima',         coordinates: [-77.04, -12.04], type: 'capital' },
  { id: 'bogota',   name: 'Bogotá',       coordinates: [-74.08,  4.71],  type: 'capital' },
  { id: 'santiago', name: 'Santiago',     coordinates: [-70.65, -33.46], type: 'capital' },
  { id: 'brasilia', name: 'Brasília',     coordinates: [-47.93, -15.78], type: 'capital' },
];

const LAYER_DEFS = [
  { id: 'terrain', label: 'Terrain & Hillshade' },
  { id: 'climate', label: 'Climate Zones' },
  { id: 'borders', label: 'Political Borders' },
  { id: 'labels',  label: 'Place Labels' },
];

export default function MapExample() {
  const [visibility, setVisibility] = useState({
    terrain: true,
    climate: false,
    borders: true,
    labels: true,
  });

  const [focusCountry, setFocusCountry] = useState('BR');

  function handleLayerToggle(id, next) {
    setVisibility(prev => ({ ...prev, [id]: next }));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Country switcher — example of dynamic country support */}
      <div style={{ padding: '8px 16px', background: '#F8F5EE', borderBottom: '1px solid #C8B89A', display: 'flex', gap: 8 }}>
        {['BR', 'AR', 'CO', 'PE', 'CL'].map(iso => (
          <button
            key={iso}
            onClick={() => setFocusCountry(iso)}
            style={{
              padding: '4px 12px',
              border: '1px solid #8C7A5B',
              borderRadius: 4,
              background: focusCountry === iso ? '#5C4A2A' : 'transparent',
              color: focusCountry === iso ? '#F8F5EE' : '#5C4A2A',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {iso}
          </button>
        ))}
      </div>

      {/* Map takes remaining height */}
      <div style={{ flex: 1, position: 'relative' }}>
        <MapContainer
          accessToken={MAPBOX_TOKEN}
          country={focusCountry}
          initialCenter={[-60, -15]}
          initialZoom={3}
          height="100%"
          width="100%"
        >
          <TerrainLayer
            visible={visibility.terrain}
            exaggeration={1.2}
          />

          <ClimateLayer
            visible={visibility.climate}
            opacity={0.45}
            // Swap in your own tile URL — examples:
            // OpenWeatherMap: 'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=KEY'
            // NASA GIBS LST:  'https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_Land_Surface_Temp_Day/default/GoogleMapsCompatible_Level7/{z}/{y}/{x}.jpg'
            tileUrl={null}
          />

          <BordersLayer
            visible={visibility.borders}
            showAdmin1={false}
            countryFilter={focusCountry}
            highlightColor="#E67E22"
          />

          <LabelsLayer
            visible={visibility.labels}
            features={SA_CAPITALS}
            showBuiltinLabels={true}
          />

          <LayerControls
            layers={LAYER_DEFS}
            visibility={visibility}
            onChange={handleLayerToggle}
          />
        </MapContainer>
      </div>
    </div>
  );
}
