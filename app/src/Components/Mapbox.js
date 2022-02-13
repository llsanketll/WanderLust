
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxContainer from '../Styles/Mapbox.styles';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2xhbXNhbCIsImEiOiJja3psNmF6Y2QyNWl4Mm9uMm54c2c1YmhqIn0.Qkx2T5_F6Hn_hudF3yTBWQ';

function MapBox() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
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