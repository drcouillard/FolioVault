export const TERRAIN_SOURCE = {
  id: 'folio-terrain-dem',
  config: {
    type: 'raster-dem',
    url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
    tileSize: 512,
    maxzoom: 14,
  },
};

export const COUNTRY_BOUNDARIES_SOURCE = {
  id: 'folio-country-boundaries',
  config: {
    type: 'vector',
    url: 'mapbox://mapbox.country-boundaries-v1',
  },
};

// Köppen-Geiger climate zone color map (Beck et al. 2018 classification)
export const KOPPEN_COLORS = {
  Af:  '#0000FF', Am:  '#0078FF', Aw:  '#46AAFA',
  BWh: '#FF0000', BWk: '#FF9696', BSh: '#F5A500', BSk: '#FFDB63',
  Csa: '#FFFF00', Csb: '#C6C700', Csc: '#969600',
  Cwa: '#96FF00', Cwb: '#63C700', Cwc: '#329600',
  Cfa: '#00FF00', Cfb: '#96FF96', Cfc: '#C7FFD7',
  Dsa: '#FF00FF', Dsb: '#C700C7', Dsc: '#963296', Dsd: '#966496',
  Dwa: '#AB0000', Dwb: '#FF3232', Dwc: '#FF6464', Dwd: '#FFA0A0',
  Dfa: '#784614', Dfb: '#9B6946', Dfc: '#C89978', Dfd: '#E8C8A0',
  ET:  '#B2B2B2', EF:  '#FFFFFF',
};

// Built-in label layer IDs in Mapbox outdoors-v12 (toggle via LabelsLayer)
export const BUILTIN_LABEL_LAYER_IDS = [
  'country-label',
  'state-label',
  'settlement-major-label',
  'settlement-minor-label',
  'settlement-subdivision-label',
  'airport-label',
  'poi-label',
  'water-line-label',
  'water-point-label',
  'natural-point-label',
];

// Built-in admin boundary layer IDs in Mapbox outdoors-v12
export const BUILTIN_ADMIN_LAYER_IDS = [
  'admin-1-boundary',
  'admin-1-boundary-bg',
];
