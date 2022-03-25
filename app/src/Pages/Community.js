import PostCard from "../Components/PostCard";
import CommunityContainer from "../Styles/Community.styles";
import AddIcon from '@mui/icons-material/Add';
function Community() {
  return (
    <CommunityContainer>
      <img src="https://images.unsplash.com/photo-1610997686651-98492fd08108?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" />
      <h1>Pokhara</h1>
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
          <div className="Community-AddIcon">
            <AddIcon fontSize="inherit"/>
          </div>
          <PostCard name="Sanket Lamsal" location="Phewa Lake" id="1"/>
          <PostCard name="Suwash Khatri" location="Begnas Lake"/>
          <PostCard name="Pratham Bhattarai" location="Devi's Fall"/>
          <PostCard name="Sabin Badal" location="Mahendra Cave"/>
        </div>
      </main>
    </CommunityContainer>
  )
}

export default Community;