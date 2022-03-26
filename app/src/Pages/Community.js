import PostCard from '../Components/PostCard';
import CommunityContainer from '../Styles/Community.styles';
import AddIcon from '@mui/icons-material/Add';
import { getDocs, getDoc, doc, collection, setDoc } from 'firebase/firestore';
import { auth, db, } from '../firebase';
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";


function Community(props) {
  const [Posts, setPosts] = useState([]);

  const collectionSnapShot = collection(db, 'Post');
  const GetPosts = async () => {
    let newPosts = [];
    const docs = await getDocs(collectionSnapShot);
    docs.forEach(doc => {
      newPosts.push(doc.data());
    })
    setPosts([...newPosts]);
  }

  useEffect(() => {
    GetPosts();
  }, [])

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
            <AddIcon fontSize="inherit" />
          </div>
          {
            Posts &&
            Posts.map((post, index) => (
              <PostCard key={index}
                {...post}
              />
            ))
          }

          {/* <PostCard name="Sanket Lamsal" location="Phewa Lake" id="1" /> */}
          {/* <PostCard name="Suwash Khatri" location="Begnas Lake" /> */}
          {/* <PostCard name="Pratham Bhattarai" location="Devi's Fall" /> */}
          {/* <PostCard name="Sabin Badal" location="Mahendra Cave" /> */}
        </div>
      </main>
    </CommunityContainer>
  );
}

export default Community;
