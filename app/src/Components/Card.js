import CardContainer from "../Styles/Card.style";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from "@mui/icons-material/Star";

function Card()
{
  return(
    <CardContainer image= "https://www.explorehimalaya.com/wp-content/uploads/patan-4-1024x599.jpg">
      <i className="Heart">
        <FavoriteIcon/>
      </i>
     <span>Patan Durbar Square</span> 
     <div className="Rating">
       <i><StarIcon/></i>
       <p>4.5</p>
     </div>
    </CardContainer>
  );
}

export default Card;