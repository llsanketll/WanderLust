import PostCard from '../Components/PostCard';
import { useState } from "react";
import { useEffect } from "react";
import { useDatabase } from '../DatabaseContext';
import BlogPost from '../Components/BlogPost';
function PostDiv(props) {
  const [currentPostID, setCurrentPostID] = useState("");
  const [canView, setCanView] = useState(false);
  const [Posts, setPosts] = useState([]);
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
    <>
      {
        canView &&
        <BlogPost posts={[...Posts]} CloseBlogPost={CloseBlogPost} post_id={currentPostID} />
      }
      {
        Posts &&
        Posts.map((post, index) => (
          props.city == post.city && 
          <PostCard
            key={index}
            handleClick={HandlePostCardClick}
            {...post}
          />
        ))
      }
    </>
  )
}

export default PostDiv;