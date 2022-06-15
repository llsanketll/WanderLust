import { useState, useEffect } from 'react';
import HotelsContainer from '../Styles/Hotels.styles';
import SearchBar from '../Components/SearchBar';
import DropDown from '../Components/DropDown';
import Button from '../Components/Button';
import HotelCard from '../Components/HotelCard';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import MapBox from '../Components/Mapbox';
import { GetNewGeoCoder } from '../Components/Mapbox';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
    'X-RapidAPI-Key': '6108bb255emsh010e45f2ebceba3p1dab4ejsnb135a88aa554',
  },
};

function Hotels() {
  const [selectedValue, setSelectedValue] = useState('5');
  const [currentPlace, setCurrentPlace] = useState({
    country: '',
    cities: [],
    currentCity: 'Search For City',
  });

  const [hotels, setHotels] = useState([]);
  const [coordinates, setCoordinates] = useState({
    latitude: 27.7172,
    longitude: 85.324,
  });
  const latitude = 1;
  const longitude = 1;

  //checkin and checkout dates
  const t = new Date();
  const date = ('0' + t.getDate()).slice(-2);
  const month = ('0' + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  const checkinDate = `${year}-${month}-${date}`;

  const nextDate = new Date(t.setDate(t.getDate() + 5));
  const date1 = ('0' + nextDate.getDate()).slice(-2);
  const month1 = ('0' + (nextDate.getMonth() + 1)).slice(-2);
  const year1 = nextDate.getFullYear();
  const checkoutDate = `${year1}-${month1}-${date1}`;

  //star rating
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    ratings.push(
      <FormControlLabel
        key={i}
        value="top"
        control={
          <Radio
            key={'radio' + i}
            checked={selectedValue === i}
            onChange={handleChange}
            value={i}
            name="radio-button"
            inputProps={{ 'aria-label': i }}
          />
        }
        label={i}
        labelPlacement="top"
      />
    );
  }

  //hotel search button
  function HandleSearchClick() {
    const newHotels = [];

    fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=popularity&adults_number=1&units=metric&room_number=1&checkout_date=${checkoutDate}&filter_by_currency=NPR&locale=en-gb&checkin_date=${checkinDate}&latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&children_number=1&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response.result.forEach((hotel) => {
          newHotels.push(hotel);
        });
        setHotels(newHotels);
      })
      .catch((err) => console.error(err));
  }

  //setting geocoder
  useEffect(() => {
    if (!document.getElementById('geo-search').hasChildNodes()) {
      const communityGeoSearch = GetNewGeoCoder();
      communityGeoSearch.addTo(document.getElementById('geo-search'));
      communityGeoSearch.setPlaceholder('Enter a location');
      communityGeoSearch.on('result', (e) => {
        let currentCountry;
        e.result.context.forEach((c) => {
          if (c.id.startsWith('country')) currentCountry = c.text;
        });
        const currentCity = e.result.text;
        setCurrentPlace({ country: currentCountry, currentCity });

        setCoordinates({
          latitude: e.result.center[1],
          longitude: e.result.center[0],
        });
      });
    }
  }, []);

  return (
    <HotelsContainer>
      <nav>
        {/* <SearchBar color="#0071C2" id="geo-search" width="30vw" /> */}
        <div id="geo-search"></div>
        <DropDown
          items={{
            country: 'Nepal',
            cities: ['Kathmandu', 'Pokhara', 'Biratnagar', 'Lumbini'],
          }}
        />
        <Button
          color="#0071C2"
          fontColor="white"
          onClick={() => HandleSearchClick()}
        >
          Search
        </Button>
      </nav>
      <hr className="Hotels-HR" />
      <main>
        <div className="LeftSide">
          <SearchBar color="#A3A3A3" placeholder="Search By Hotel Name" />
          <hr className="Hotels-HR" />
          <h4>Search From Map:</h4>
          {/* <MapBox /> */}
          <hr className="Hotels-HR" />
          <h4>Price Range:</h4>
          <input type="range" min="0" max="500"></input>
          <hr className="Hotels-HR" />
          <h4>Star Rating:</h4>
          <RadioGroup row>{ratings}</RadioGroup>
        </div>
        <div className="RightSide">
          <h1>Hotels</h1>
          <div className="Hotels-CardContainer">
            {hotels &&
              hotels.map((hotel, index) => (
                <HotelCard key={index} {...hotel} />
              ))}
          </div>
        </div>
      </main>
    </HotelsContainer>
  );
}

export default Hotels;
