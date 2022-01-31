import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function Home() {
  return (
    <nav>
      <ul className="FirstPart">
        <li>Wanter Lust (Logo)</li>
        <li>|</li>
      </ul>

      <ul className='MiddlePart'>
        <li>
          <i><HotelOutlinedIcon /></i>
          <span>Hotels</span>
        </li>
        <li>
          <i><RestaurantMenuOutlinedIcon /></i>
          <span>Resturant</span>
        </li>
        <li>
          <i><SupportAgentOutlinedIcon /></i>
          <span>Support</span>
        </li>
        <li>
          <i><LandscapeOutlinedIcon /></i>
          <span>Nature</span>
        </li>
      </ul>

      <ul className='LastPart'>
        <li><i>Profile Pic</i></li>
        <li>Name</li>
        <li><i><ArrowDropDownOutlinedIcon/></i></li>
      </ul>
    </nav>
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