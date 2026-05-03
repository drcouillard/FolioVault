import { createContext, useContext } from 'react';

export const MapContext = createContext({ map: null, isLoaded: false });
export const useMap = () => useContext(MapContext);
