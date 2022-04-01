
import NavBarDropDownContainer from "../Styles/NavBarDropDown.styles";
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useState } from 'react';
import { useAuth } from "../AuthContext";
import {useNavigate} from 'react-router-dom';

function NavBarDropDown(props) {
  const [canShow, setCanShow] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  return (
    <NavBarDropDownContainer>
      <ArrowDropDownOutlinedIcon className="NavBarDropDown-Arrow" onClick={() => setCanShow(!canShow)} />
      <div className="NavBarDropDown-Container">
        {
          canShow &&
          <ul>
            <li onClick={() => {navigate("/profile"); setCanShow(false)}}><i><PersonIcon /></i>Profile</li>
            <li onClick={() =>{logout(); navigate("/"); setCanShow(false)}}><i><ExitToAppIcon /></i>Signout</li>
          </ul>
        }
      </div>
    </NavBarDropDownContainer>
  )

}
export default NavBarDropDown;