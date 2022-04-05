import PostCardContainer from '../Styles/PostCard.styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function PostCard(props) {
  const getDays = (date) => {
    const postDate = new Date(date);
    if (postDate.getDate() === new Date().getDate()) {
      return "Today";
    }
    else if (postDate.getDate() === new Date().getDate() - 1) {
      return "1 day ago";
    }
    else {
      return postDate.toDateString();
    }
  }


  return (
    <PostCardContainer onClick={() => props.handleClick(props.post_id)}>
      <div className="PostCard-Main">
        <h2 className="PostCard-Title">{props.title}</h2>
        <div className="PostCard-InfoContainer">
          <div className="PostCard-FlexContainer">
            <PersonIcon />
            <p>{props.name}</p>
          </div>
          <div className="PostCard-FlexContainer">
            <LocationOnIcon />
            <p>{props.landmark}</p>
          </div>
        </div>
      </div>
      <div className="PostCard-Last">
        <p className="PostCard-Date">{getDays(props.date)}</p>
        <div className="PostCard-FlexContainer">
          <div className="PostCard-FlexContainer">
            <ModeCommentIcon />
            <p id="PostCard-Comment-Count">5</p>
          </div>
          <div className="PostCard-FlexContainer">
            <ThumbUpIcon />
            <p id="PostCard-Like-Count">{props.likes}</p>
          </div>
        </div>
      </div>
    </PostCardContainer>
  );
}

export default PostCard;
