import React from 'react';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import { NavBar } from './Styles/NavBar.jsx';
import Icon from './Icon.js';

function NavPane() {
  return (
    <NavBar>
      <ul className="FirstPart">
        <li>Wanter Lust (Logo)</li>
        <li>|</li>
      </ul>

      <ul className="MiddlePart">
        <li>
          <Icon color="#FFC187">
            <HotelOutlinedIcon />
          </Icon>
          <span>Hotels</span>
        </li>
        <li>
          <i>
            <RestaurantMenuOutlinedIcon />
          </i>
          <span>Resturant</span>
        </li>
        <li>
          <i>
            <SupportAgentOutlinedIcon />
          </i>
          <span>Support</span>
        </li>
        <li>
          <i>
            <LandscapeOutlinedIcon />
          </i>
          <span>Nature</span>
        </li>
      </ul>

      <ul className="LastPart">
        <li>
          <i>Profile Pic</i>
        </li>
        <li>Name</li>
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
