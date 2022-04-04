import PlanningContainer from "../Styles/Planning.styles"
import PlanningCard from "./PlanningCard";
import { useAuth } from "../AuthContext";
function Planning()
{
  const {currentUser} = useAuth();
  return(
    <PlanningContainer>
      <PlanningCard username="slamsal" days="5" image ={currentUser.photoURL} description="Will be visiting most famouse landmarks and cycle for a day"/>
    </PlanningContainer>
  )
}

export default Planning;