import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DropDown from './DropDown';
import HomeContainer from './Styles/Home.styles';
import SearchBar from './SearchBar';
import Card from './Card';
import Footer from './Footer';

function Home(props) {
  console.log(props.something);
  return (

    <HomeContainer>
      <div className="Landing">
        <div className="DropDownDiv">
          <i className="LocationIcon">
            <LocationOnOutlinedIcon />
          </i>
          <DropDown />
        </div>

        <div className="SearchBarDiv">
          <SearchBar />
        </div>

        <div className="GoogleMap">
          {/* This is just a place holder for google maps api */}
          <img
            src="https://i.ibb.co/zF2pqPL/Google-Maps.png"
            alt="Google Maps"
          />
        </div>
      </div>

      <h2 className="PopularPlaces">Popular Places</h2>
      <div className="CardGrid">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </HomeContainer>
  );
}
export default Home;
