import React from 'react';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import { NavBar } from './Styles/NavBar.styles';
import Icon from './Icon';

function NavPane() {
  return (
    <NavBar>
      <ul className="FirstPart">
        <li>
          <span>Wander</span> <p>Lust</p>{' '}
        </li>
      </ul>

      <ul className="MiddlePart">
        <li>
          <Icon color="#FFC187">
            <HotelOutlinedIcon />
          </Icon>
          <span>Hotels</span>
        </li>
        <li>
          <Icon color="#EB5757">
            <RestaurantMenuOutlinedIcon />
          </Icon>
          <span>Resturant</span>
        </li>
        <li>
          <Icon color="#8DE8C7">
            <LandscapeOutlinedIcon />
          </Icon>
          <span>Nature</span>
        </li>
        <li>
          <Icon color="#8DBCE8">
            <SupportAgentOutlinedIcon />
          </Icon>
          <span>Support</span>
        </li>
      </ul>

      <ul className="LastPart">
        <li>
          <img src="https://i.scdn.co/image/ab67616d00001e02814d6aef9f54a1ff3e32f2d0"></img>
        </li>
        <li>Enter Your Name Here</li>
        <li>
          <i>
            <ArrowDropDownOutlinedIcon />
          </i>
        </li>
      </ul>
    </NavBar>
  );
}
export default NavPane;
