import PostCardContainer from "../Styles/PostCard.styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from "react-router-dom";

function PostCard(props) {
  const navigate = useNavigate();
  const HandleClick = (e) => {
    e.preventDefault();
    navigate("/blog/" + props.id);
  }

  return (
    <PostCardContainer onClick={HandleClick}>
      <div className="PostCard-Main">
        <h2 className="PostCard-Title">Title</h2>
        <div className="PostCard-InfoContainer">
          <div className="PostCard-FlexContainer">
            <PersonIcon />
            <p>{props.name}</p>
          </div>
          <div className="PostCard-FlexContainer">
            <LocationOnIcon />
            <p>{props.location}</p>
          </div>
        </div>
      </div>
      <div className="PostCard-Last">
        <p className="PostCard-Date">5 days ago</p>
        <div className="PostCard-FlexContainer">
          <div className="PostCard-FlexContainer">
            <ModeCommentIcon />
            <p id="PostCard-Comment-Count">5</p>
          </div>
          <div className="PostCard-FlexContainer">
            <ThumbUpIcon />
            <p id="PostCard-Like-Count">10</p>
          </div>
        </div>
      </div>
    </PostCardContainer>
  )
}

export default PostCard;