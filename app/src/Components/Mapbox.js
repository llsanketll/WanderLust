
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxContainer from '../Styles/Mapbox.styles';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css' // Updating node module will keep css up to date.
import 'mapbox-gl';

// mapboxgl.accessToken = process.env.MAPBOX_TOKEN;
mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhbXNhbCIsImEiOiJja3psNmF6Y2QyNWl4Mm9uMm54c2c1YmhqIn0.Qkx2T5_F6Hn_hudF3yTBWQ';

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
// import * as React from 'react';
// import Map, { NavigationControl } from 'react-map-gl';

// function GMap() {
//   return (
//     <>
//       <Map
//         initialViewState={{
//           longitude: -122.4,
//           latitude: 37.8,
//           zoom: 14
//         }}
//         mapboxAccessToken='pk.eyJ1Ijoic2xhbXNhbCIsImEiOiJja3psNmF6Y2QyNWl4Mm9uMm54c2c1YmhqIn0.Qkx2T5_F6Hn_hudF3yTBWQ'
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//       >
//       </Map>
//       <NavigationControl position='top-left'/>
//     </>
//   );
// }

// export default GMap;