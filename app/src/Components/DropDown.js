import DropDownContainer from "../Styles/DropDown.styles"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from "react";
import { useEffect } from "react";

function DropDown(props) {
  const [canShow, setCanShow] = useState(false);
  const [selectedCity, setSelectedCity] = useState("City");
  useEffect(() => {
    setSelectedCity(props.items.currentCity)
  }, [props.items])

  return (
    <DropDownContainer>
      <div className="DropDown-Main">
        {
          props.items.country ?
            <p>{`${selectedCity}, ${props.items.country}`} </p>
            :
            <p>Select a country</p>
        }
        <i><ArrowDropDownOutlinedIcon onClick={() => setCanShow(!canShow)} /></i>
      </div>
      <div className="DropDown-Content">
        {
          canShow && props.items.cities.length > 0 &&
          <ul>
            {
              props.items.cities.map((item, index) => {
                return <li key={index} onClick={() => setSelectedCity(item)}>{item}</li>
              })
            }
          </ul>
        }
      </div>
    </DropDownContainer>
  )

}

export default DropDown;