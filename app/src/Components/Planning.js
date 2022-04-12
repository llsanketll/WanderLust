import PlanningContainer from '../Styles/Planning.styles';
import PlanningCard from './PlanningCard';
import { useAuth } from '../AuthContext';
import { useDatabase } from '../DatabaseContext';
import { useState, useEffect } from 'react';
function Planning(props) {
  const [Posts, setPosts] = useState([]);
  const { getAllPlannedPosts } = useDatabase();

  const { currentUser } = useAuth();

  // functions to get all planned Posts related to the visiting #place
  const GetPosts = async () => {
    const newPosts = [];
    const posts = await getAllPlannedPosts();

    posts.map((post) => {
      if (props.city === post.travelFrom || props.city === post.travelTo) {
        newPosts.push(post);
      }
    });
    setPosts(newPosts);
  };

  useEffect(() => {
    GetPosts();
  }, [props.city]);
  return (
    <PlanningContainer>
      {Posts && Posts.map((post, i) => <PlanningCard {...post} key={i} />)}
    </PlanningContainer>
  );
}

export default Planning;