import PostCard from '../Components/PostCard';
import { useState } from "react";
import { useEffect } from "react";
import { useDatabase } from '../DatabaseContext';
import BlogPost from '../Components/BlogPost';
function PostDiv(props) {
  const [canView, setCanView] = useState(false);
  const [Posts, setPosts] = useState([]);
  const [currentPostID, setCurrentPostID] = useState(0);
  const { getAllPosts, getUserData } = useDatabase();
  const newPosts = []

  const GetPosts = async () => {
    const posts = await getAllPosts();
    await Promise.all(posts.map(async post => {
      const postData = post.data();
      if (props.city != postData.city) return;
      const user = await getUserData(postData.user_id)
      const userName = user.data().name;
      newPosts.push({ ...postData, name: userName, post_id: post.id });
    }))
    setPosts(newPosts);
  }

  useEffect(() => {
    GetPosts();
  }, [props.city])

  const HandlePostCardClick = (post_id) => {
    setCurrentPostID(post_id);
    setCanView(true);
  }

  const CloseBlogPost = () => {
    setCanView(false);
    setCurrentPostID(0);
  }
  return (
    <>
      {
        canView && currentPostID != 0 &&
        <BlogPost posts={[...Posts]} post_id={currentPostID} CloseBlogPost={CloseBlogPost} />
      }
      {
        Posts &&
        Posts.map((post, index) => (
          props.city == post.city &&
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