import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DropDown from '../Components/DropDown';
import HomeContainer from '../Styles/Home.styles';
import SearchBar from '../Components/SearchBar';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import MapBox, { GetNewGeoCoder } from '../Components/Mapbox';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { async } from '@firebase/util';

function Home(props) {
  const [popularPlaces, setPopularPlaces] = useState([]);
  //Get Popular places from opentripmap
  const GetPopularPlaces = async (lon, lat) => {
    // const amadeus = "6iRrbTc3toyZRwjKKNCspl9q1TPcHqTl";
    const apiKey = "5ae2e3f221c38a28845f05b6405a6c96008af6be7be3432c861a33e4";
    const options = {
      method: 'GET',
      url: `https://api.opentripmap.com/0.1/en/places/radius?`,
      params: {
        apikey: apiKey,
        radius: 100000,
        limit: 5,
        offset: 0,
        lat,
        lon,
        lang: "en",
        kinds: "interesting_places",
        currency: "USD",
        rate: 2
      }
    }

    const tempPlaces = []
    const result = await axios.request(options)
    const features = result.data.features;
    console.log(features);
    await Promise.all(features.map(async el => {
      const xid = el.properties.xid;
      const place = await axios.request(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${apiKey}`);
      tempPlaces.push({ name: place.data.name, photoURL: place.data.preview.source, rating: el.properties.rate, xid: place.data.xid });
    }))
    return tempPlaces;
  }
  useEffect(async () => {
    if (!document.getElementById('home-geo-search').hasChildNodes()) {
      const HomeGeoSearch = GetNewGeoCoder();
      HomeGeoSearch.addTo(document.getElementById("home-geo-search"));
      HomeGeoSearch.setPlaceholder("Search for Place");
      HomeGeoSearch.on('result', async data => {
        const lonLat = data.result.center;
        const result = await GetPopularPlaces(lonLat[0], lonLat[1])
        setPopularPlaces(result);
      })
    }
    const result = await GetPopularPlaces(85.3240, 27.7172);
    setPopularPlaces(result);
  }, [])
  const GetCitites = async (country_code) => {
    const options = {
      method: 'GET',
      url: 'https://spott.p.rapidapi.com/places/autocomplete',
      params: { limit: '10', skip: '0', country: country_code, type: 'CITY' },
      headers: {
        'X-RapidAPI-Host': 'spott.p.rapidapi.com',
        'X-RapidAPI-Key': '2d5bf6cd12mshd764271b2408a71p13b54fjsn7005a833cb99'
      }
    };
    const response = await axios.request(options)
    const newCities = [];
    response.data.forEach(e => {
      newCities.push(e.name)
    })
    return newCities;
  }

  return (

    <HomeContainer>
      <div className="Landing">
        {/* <div className="DropDownDiv">
          <i className="LocationIcon">
            <LocationOnOutlinedIcon />
          </i>
          <DropDown items={{ country: "Nepal", cities: ["Kathmandu", "Pokhara", "Biratnagar", "Lumbini", "Bhaktapur", "Sagarmatha"], }} />
        </div> */}
        <h1>Fulfill your WanderLust</h1>
        <div className="SearchBarDiv">
          <div id="home-geo-search"></div>
        </div>

        {/* <div className="MapBox-Container">
          <MapBox directions />
        </div> */}
      </div>

      <h2 className="PopularPlaces">Popular Places</h2>
      <div className="CardGrid">
        {
          popularPlaces.map((place, index) => (
            <Card {...place} key={index} />
          ))
        }
      </div>
      <Footer />
    </HomeContainer>
  );
}
export default Home;
