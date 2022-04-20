import CardContainer from "../Styles/Card.style";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const HandleClick = e => {
    e.preventDefault();
    window.open("https://opentripmap.com/en/card/" + props.xid)
  }
  return (
    <CardContainer onClick={HandleClick}>
      <img src={props.photoURL} alt="Planning" />
      <div className="Card-Content">
        <i className="Heart">
          <FavoriteIcon />
        </i>
        <span>{props.name}</span>
        <div className="Rating">
          <i><StarIcon /></i>
          <p>{props.rating}</p>
        </div>
      </div>
    </CardContainer>
  );
}

export default Card;