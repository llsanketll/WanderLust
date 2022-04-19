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

  const GetPosts = async () => {
    const newPosts = [];
    const posts = await getAllPosts();
    if (props.uid) {
      await Promise.all(posts.map(async post => {
        const postData = post.data();
        const user = await getUserData(postData.uid)
        if (props.uid !== user.id) return;
        const userName = user.data().name;
        newPosts.push({ ...postData, name: userName, post_id: post.id });
      }))
    }
    else {
      await Promise.all(posts.map(async post => {
        const postData = post.data();
        if (postData.city !== props.city) return;
        const user = await getUserData(postData.uid)
        const userName = user.data().name;
        newPosts.push({ ...postData, name: userName, post_id: post.id });
      }))
    }
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