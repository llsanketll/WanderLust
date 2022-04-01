import CommunityContainer from '../Styles/Community.styles';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import BlogPost from '../Components/BlogPost';
import PostDiv from '../Components/PostDiv';

function Community(props) {
  const navigate = useNavigate();
  return (
    <CommunityContainer>
      <div className='Community-Left'>
        <img src="https://images.unsplash.com/photo-1610997686651-98492fd08108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" className="Community-Place-Image" />
        <div className="Community-Trending">
          <h2>Trending</h2>
          <p>Place 1</p>
          <p>Place 1</p>
          <p>Place 1</p>
          <p>Place 1</p>
          <p>Place 1</p>
          <p>Place 1</p>
        </div>
      </div>
      <div className='Community-Right'>
        <h1 className="Community-Place-Title">Pokhara</h1>
        <div className="Community-PostCardContainer">
          <div className="Community-AddIcon" onClick={() => navigate("/postexp")}>
            <AddIcon fontSize="inherit" />
          </div>
          <PostDiv />
        </div>
      </div>
    </CommunityContainer>
  );
}

export default Community;
