import React from 'react';
import { useAuth } from '../AuthContext';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useNavigate } from 'react-router-dom';

import { NavBar } from '../Styles/NavBar.styles';
import Icon from '../Styles/Icon.styles';
import Button from './Button';

function NavPane() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const HandleClick = (e, url) => {
    navigate(url);
  };
  return (
    <NavBar>
      <ul className="FirstPart">
        <li onClick={() => navigate('/')}>
          <span>Wander</span> <p>Lust</p>{' '}
        </li>
      </ul>

      <ul className="MiddlePart">
        <li onClick={() => navigate('/hotels')}>
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
        <li onClick={(e) => HandleClick(e, 'nature')} className="nature">
          <Icon color="#8DE8C7">
            <LandscapeOutlinedIcon />
          </Icon>
          <span>Nature</span>
        </li>
        <li onClick={(e) => HandleClick(e, 'support')} className="support">
          <Icon color="#8DBCE8">
            <SupportAgentOutlinedIcon />
          </Icon>
          <span>Support</span>
        </li>
      </ul>

      <ul className="LastPart">
        {currentUser ? (
          <>
            <li>
              {currentUser.photoURL ? (
                <img src={currentUser.photoURL} alt="user" />
              ) : (
                <img
                  src="https://i.scdn.co/image/ab67616d00001e02814d6aef9f54a1ff3e32f2d0"
                  alt="user"
                />
              )}
            </li>
            <li>{currentUser.name}</li>
            <li>
              <i>
                <ArrowDropDownOutlinedIcon />
              </i>
            </li>
          </>
        ) : (
          <li>
            <Button handleClick={() => navigate('/signin')}>Sign In</Button>
          </li>
        )}
      </ul>
    </NavBar>
  );
}
export default NavPane;
