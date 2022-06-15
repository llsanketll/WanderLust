import PostCard from '../Components/PostCard';
import { useState } from "react";
import { useEffect } from "react";
import { useDatabase } from '../DatabaseContext';
import BlogPost from '../Components/BlogPost';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../AuthContext';
function PostDiv(props) {
  const { currentUser } = useAuth();
  const [canView, setCanView] = useState(false);
  const [Posts, setPosts] = useState([]);
  const [currentPostID, setCurrentPostID] = useState(0);
  const { getAllPosts, getUserData, getAllComments } = useDatabase();

  const GetPosts = async () => {
    const newPosts = [];
    const posts = await getAllPosts();
    await Promise.all(posts.map(async post => {
      const postData = post.data();
      if (props.city && postData.city !== props.city) return;
      const user = await getUserData(postData.uid)
      if (props.uid && props.uid !== postData.uid) return;
      const userName = user.data().name;
      const comments = await getAllComments(post.id);
      newPosts.push({ ...postData, name: userName, post_id: post.id, comments });
    }))
    setPosts(newPosts);
    if (props.setPostCount)
      props.setPostCount(newPosts.length);
  }

  useEffect(() => {
    GetPosts();
  }, [props.city, props.uid])

  const HandlePostCardClick = (post_id) => {
    setCurrentPostID(post_id);
    setCanView(true);
  }

  const CloseBlogPost = () => {
    GetPosts();
    setCanView(false);
    setCurrentPostID(0);
  }

  const SetLikes = async (post_id, newLikes) => {
    await updateDoc(doc(db, 'Post', post_id), { likes: newLikes });
  }


  return (
    <>
      {
        canView && currentPostID != 0 &&
        <BlogPost posts={[...Posts]} post_id={currentPostID} CloseBlogPost={CloseBlogPost} SetLikes={SetLikes} />
      }
      {
        Posts &&
        Posts.map((post, index) => (
          <PostCard
            key={index}
            handleClick={() => HandlePostCardClick(post.post_id)}
            {...post}
          />
        ))
      }
    </>
  )
}


export default PostDiv;