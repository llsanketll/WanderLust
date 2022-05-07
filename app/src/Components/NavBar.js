import React, { useEffect } from 'react';
import { useAuth } from '../AuthContext';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavBar } from '../Styles/NavBar.styles';
import Icon from '../Styles/Icon.styles';
import Button from './Button';
import NavBarDropDown from './NavBarDropDown';
import ProfileImg from './ProfileImg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notification from './Notification';

function NavPane() {
  let classname, siteButton;
  const { currentUser } = useAuth(); //recent user from auth context
  const navigate = useNavigate(); //navigate to different pages
  const location = useLocation();

  // function to navigate to different pages
  const HandleClick = (e, url) => {
    navigate(url);
  };

  useEffect(() => {
    classname = window.location.pathname.substring(1);
    document.querySelectorAll('.MiddlePart > li').forEach((element) => {
      if (classname && classname == element.className)
        element.style.background = 'rgba(255, 255, 255, 0.5)';
      else element.style.background = 'none';
    });
  }, [location]);

  return (
    <NavBar>
      {/* Section for Logo */}
      <ul className="FirstPart">
        <li onClick={() => navigate('/')}>
          <span>Wander</span> <p>Lust</p>{' '}
        </li>
      </ul>

      {/* Section for Pages */}
      <ul className="MiddlePart">
        <li onClick={(e) => HandleClick(e, '/hotels')} className="hotels">
          <Icon color="#FFC187">
            <HotelOutlinedIcon />
          </Icon>
          <span>Hotels</span>
        </li>
        <li onClick={(e) => HandleClick(e, 'community')} className="community">
          <Icon color="#EB5757">
            <RestaurantMenuOutlinedIcon />
          </Icon>
          <span>Community</span>
        </li>
        <li
          onClick={(e) => HandleClick(e, 'activities')}
          className="activities"
        >
          <Icon color="#8DE8C7">
            <LandscapeOutlinedIcon />
          </Icon>
          <span>Activities</span>
        </li>
        <li onClick={(e) => HandleClick(e, 'support')} className="support">
          <Icon color="#8DBCE8">
            <SupportAgentOutlinedIcon />
          </Icon>
          <span>Support</span>
        </li>
      </ul>
      <Notification/>
      {/* Section for SignIn or UserProfile */}
      <ul className="LastPart">
        {currentUser ? (
          <>
            <li>
              <ProfileImg uid={currentUser.uid} />
            </li>
            <li onClick={() => navigate("/profile/" + currentUser.uid)}>
              <p>{currentUser.displayName}</p>
            </li>
            <li>{currentUser.name}</li>
            <li>
              <NavBarDropDown />
            </li>
          </>
        ) : (
          <li>
            <Button color=" #0071C2" fontColor="white" onClick={() => navigate('/signin')}>Sign In</Button>
          </li>
        )}
      </ul>
    </NavBar>
  );
}
export default NavPane;
