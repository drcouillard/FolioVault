/**
 * Overlay UI for toggling map layer visibility.
 *
 * Designed to sit in the top-left corner of the MapContainer.
 * Wire it alongside the layer components with shared state in the parent:
 *
 *   const [vis, setVis] = useState({ terrain: true, climate: false, borders: true, labels: true });
 *
 *   <MapContainer ...>
 *     <TerrainLayer visible={vis.terrain} />
 *     <ClimateLayer visible={vis.climate} tileUrl={...} />
 *     <BordersLayer visible={vis.borders} />
 *     <LabelsLayer  visible={vis.labels}  />
 *     <LayerControls
 *       layers={[
 *         { id: 'terrain', label: 'Terrain & Hillshade' },
 *         { id: 'climate', label: 'Climate Zones' },
 *         { id: 'borders', label: 'Political Borders' },
 *         { id: 'labels',  label: 'Place Labels' },
 *       ]}
 *       visibility={vis}
 *       onChange={(id, next) => setVis(prev => ({ ...prev, [id]: next }))}
 *     />
 *   </MapContainer>
 *
 * Props:
 *   layers     — array of { id: string, label: string }
 *   visibility — { [id]: boolean } current visibility state
 *   onChange   — (id: string, visible: boolean) => void
 *   position   — CSS positioning object (default: top-left overlay)
 */
export function LayerControls({ layers, visibility, onChange, position }) {
  const containerStyle = {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    background: 'rgba(255, 252, 242, 0.92)',
    border: '1px solid #C8B89A',
    borderRadius: 6,
    padding: '8px 12px',
    fontFamily: 'system-ui, sans-serif',
    fontSize: 13,
    color: '#2A2218',
    boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
    minWidth: 160,
    ...position,
  };

  return (
    <div style={containerStyle} aria-label="Map layer controls">
      <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#7A6A52' }}>
        Layers
      </div>
      {layers.map(({ id, label }) => (
        <label
          key={id}
          style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, cursor: 'pointer', userSelect: 'none' }}
        >
          <input
            type="checkbox"
            checked={!!visibility[id]}
            onChange={e => onChange(id, e.target.checked)}
            style={{ accentColor: '#5C4A2A', width: 14, height: 14, cursor: 'pointer' }}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}
