
import React, { useRef, useEffect, useState, useContext } from 'react';
import MapboxContainer from '../Styles/Mapbox.styles';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css' // Updating node module will keep css up to date.

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


// mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhbXNhbCIsImEiOiJja3psNmF6Y2QyNWl4Mm9uMm54c2c1YmhqIn0.Qkx2T5_F6Hn_hudF3yTBWQ';

const geocoder = new MapboxGeocoder({
  // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  types:'place',
});

function MapBox(props) {
  const map = useRef(null);
  const mapContainer = useRef(null);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving',
    controls: {
      // inputs: false,
      instructions: false,
      profileSwitcher: false,
      wayname: false,
      geocoder: false,
    }
  });
  const [lng, setLng] = useState(85.32);
  const [lat, setLat] = useState(27.71);
  const [zoom, setZoom] = useState(12);





  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add the geocoder to the map
    // map.current.addControl(geocoder);

    const marker = new mapboxgl.Marker({
      color: "#0071C2",
    }).setLngLat([lng, lat])
      .addTo(map.current);

    map.current.on('mousedown', (e) => {
      marker.setLngLat([e.lngLat.lng, e.lngLat.lat]);
    })

    if (props.directions)
      map.current.addControl(directions, 'top-left');
  });



  return (
    <MapboxContainer>
      <div ref={mapContainer} className="map-container" />
    </MapboxContainer>
  );
}
export default MapBox;
export {geocoder};