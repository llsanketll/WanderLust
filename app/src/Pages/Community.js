import PostCard from '../Components/PostCard';
import CommunityContainer from '../Styles/Community.styles';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDatabase } from '../DatabaseContext';
import BlogPost from '../Components/BlogPost';

function Community(props) {
  const [currentPostID, setCurrentPostID] = useState("");
  const [canView, setCanView] = useState(false);
  const [Posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { getAllPosts, getUserData } = useDatabase();
  const newPosts = [];

  const GetPosts = async () => {
    const posts = await getAllPosts();
    posts.forEach((post, index) => {
      const postData = post.data();
      getUserData(postData.user_id).then(user => {
        const userName = user.data().name
        newPosts.push({ ...postData, post_id: post.id, name: userName });
        setPosts([...newPosts]);
      });
    })
  }

  useEffect(() => {
    GetPosts();
  }, [])

  const HandlePostCardClick = (post_id) => {
    setCanView(true);
    setCurrentPostID(post_id);
  }

  const CloseBlogPost = () => {
    setCanView(false);
  }



  return (
    <CommunityContainer>
      {
        canView &&
        <BlogPost posts={[...Posts]} CloseBlogPost={CloseBlogPost} post_id={currentPostID} />
      }
      <img src="https://images.unsplash.com/photo-1610997686651-98492fd08108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" className="Community-Place-Image" />
      <h1 className="Community-Place-Title">Pokhara</h1>
      <main>
        <div className="Community-Trending">
          <h2>Trending</h2>

          <p>Place 1</p>
          <p>Place 1</p>
          <p>Place 1</p>
          <p>Place 1</p>
          <p>Place 1</p>
          <p>Place 1</p>
        </div>
        <div className="Community-PostCardContainer">
          <div className="Community-AddIcon" onClick={() => navigate("/postexp")}>
            <AddIcon fontSize="inherit" />
          </div>
          {
            Posts &&
            Posts.map((post, index) => (
              <PostCard
                key={index}
                handleClick={HandlePostCardClick}
                {...post}
              />
            ))
          }
        </div>
      </main>
    </CommunityContainer>
  );
}

export default Community;
