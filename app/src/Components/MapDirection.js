import { MapDirectionContainer } from './Styles/MapDirection.style';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1IjoiYXJvbWFjIiwiYSI6ImNremw5cnBwNDEzZDQybmxsODcxeWxzNHcifQ.9Ure4pKVtdrA2xOLuDITyQ';

export default function MapDirection() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(83.464728);
  const [lat, setLat] = useState(27.69254);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <MapDirectionContainer>
      <h1>Map Direction</h1>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </MapDirectionContainer>
  );
}
