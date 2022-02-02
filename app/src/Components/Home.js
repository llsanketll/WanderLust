import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import NavBar from './Styles/NavBar.styles';
import Icon from './Icon';
import DropDown from './DropDown';
import HomeContainer from './Styles/Home.styles';
import SearchBar from './SearchBar';
import Card from './Card';
import Footer from './Footer';

function Home() {
  return (
    <HomeContainer>
      <NavBar>
        <ul className="FirstPart">
          <li><span>Wander</span> <p>Lust</p> </li>
        </ul>

        <ul className='MiddlePart'>
          <li>
            <Icon color="#FFC187"><HotelOutlinedIcon /></Icon>
            <span>Hotels</span>
          </li>
          <li>
            <Icon color="#EB5757"><RestaurantMenuOutlinedIcon /></Icon>
            <span>Resturant</span>
          </li>
          <li>
            <Icon color="#8DE8C7"><LandscapeOutlinedIcon /></Icon>
            <span>Nature</span>
          </li>
          <li>
            <Icon color="#8DBCE8"><SupportAgentOutlinedIcon /></Icon>
            <span>Support</span>
          </li>

        </ul>

        <ul className='LastPart'>
          <li><img src="https://i.scdn.co/image/ab67616d00001e02814d6aef9f54a1ff3e32f2d0"></img></li>
          <li>Enter Your Name Here</li>
          <li><i><ArrowDropDownOutlinedIcon /></i></li>
        </ul>
      </NavBar>

      <div className="Landing">
        <div className="DropDownDiv">
          <i className="LocationIcon"><LocationOnOutlinedIcon /></i>
          <DropDown />
        </div>

        <div className="SearchBarDiv">
          <SearchBar />
        </div>

        <div className="GoogleMap">
          {/* This is just a place holder for google maps api */}
          <img src="https://i.ibb.co/zF2pqPL/Google-Maps.png" alt="Google Maps" />
        </div>
      </div>

      <h2 className="PopularPlaces">Popular Places</h2>
      <div className='CardGrid'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </HomeContainer>
  )
}

//Make a navbar with the following:
// - Logo
// - Username
// - Profile Pic
// - Links to the following pages:
//   - Hotels
//  - Restaurants
// -  Support

export default Home;