import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DropDown from '../Components/DropDown';
import HomeContainer from '../Styles/Home.styles';
import SearchBar from '../Components/SearchBar';
import Card from '../Components/Card';
import Footer from '../Components/Footer';
import MapBox from '../Components/Mapbox';

function Home(props) {
  return (

    <HomeContainer>
      <div className="Landing">
        <div className="DropDownDiv">
          <i className="LocationIcon">
            <LocationOnOutlinedIcon />
          </i>
          <DropDown data={["Kathmandu", "Pokhara", "Janakpur"]}/>
        </div>

        <div className="SearchBarDiv">
          <SearchBar color="#4e4e4e"  placeholder="Search for popular places..." width = "30vw" />
        </div>

        <div className="MapBox-Container">
          {/* This is just a place holder for google maps api */}
          <MapBox directions/>
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
