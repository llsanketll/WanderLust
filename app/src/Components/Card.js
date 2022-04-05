import CardContainer from "../Styles/Card.style";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from "@mui/icons-material/Star";

function Card(props) {
  return (
    <CardContainer>
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