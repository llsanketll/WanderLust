import DropDownContainer from "../Styles/DropDown.styles"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from "react";

function DropDown(props) {
  const [canShow, setCanShow] = useState(false);
  return (
    <>
      <DropDownContainer><p>Kathmandu, Nepal </p><i><ArrowDropDownOutlinedIcon onClick={() => setCanShow(!canShow)} /></i></DropDownContainer>
      <div className="DropDown-Content">
        <ul>
          {
            canShow && props.data &&
            props.data.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    </>
  )

}

export default DropDown;