import { ProfileContainer, ProfileButton } from "../Styles/Profile.styles";
import { useAuth } from "../AuthContext";
import Button from '../Components/Button';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PostDiv from "../Components/PostDiv";
import FavoriteIcon from '@mui/icons-material/Favorite';
import RoomIcon from '@mui/icons-material/Room';
import PersonIcon from '@mui/icons-material/Person';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDatabase } from "../DatabaseContext";

function Proflie(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const {getUserData} = useDatabase();
  const urlParams = useParams();
  const uid = urlParams.id;

  useEffect(async() => {
    const result = await getUserData(uid);
    setCurrentUser(result.data());

  }, [])

  const ChangePage = id => {
    setCurrentPage(id);
  }
  return (
    <ProfileContainer>
      <div className="Profile-Left">
        <img src={currentUser.photoURL} alt="profile" />
        <div className="Profile-FlexBox">
          <div>Posts</div>
          <div>{currentUser.posts}</div>
        </div>
        <div className="Profile-FlexBox">
          <div>Following</div>
          <div>{currentUser.following}</div>
        </div>
        <div className="Profile-FlexBox">
          <div>Followers</div>
          <div>{currentUser.followers}</div>
        </div>
        <hr />
        <Button color="#EDEDED" fontColor="#737373">
          <EditIcon />
          Edit Profile
        </Button>
      </div>
      <div className="Profile-Main-Container">
        <div className="Profile-Title-Container">
          <h1>{currentUser.name}</h1>
          <Button variant="outlined" color="#2090E9">
            <PersonAddIcon />
            Follow
          </Button>
          <Button color="#2090E9" fontColor="white" disabled={true} >
            <ChatBubbleIcon />
            Message
          </Button>
        </div>
        <div className="Profile-Bio">
          {currentUser.bio}
        </div>
        <div className="Profile-Button-Container">
          <ProfileButton selected={currentPage == 1 ? true : undefined} onClick={() => ChangePage(1)}>
            <LocalPostOfficeIcon />
            Posts
          </ProfileButton>
          <ProfileButton selected={currentPage == 2 ? true : undefined} onClick={() => ChangePage(2)}>
            <FavoriteIcon />
            Liked Posts
          </ProfileButton>
          <ProfileButton selected={currentPage == 3 ? true : undefined} onClick={() => ChangePage(3)}>
            <RoomIcon />
            Visited Places
          </ProfileButton>
          <ProfileButton selected={currentPage == 4 ? true : undefined} onClick={() => ChangePage(4)}>
            < PersonIcon />
            Info
          </ProfileButton>
        </div>
        <div className="Profile-Content">
          <PostDiv />
        </div>
      </div>
    </ProfileContainer>
  )

}

export default Proflie;