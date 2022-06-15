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
import CheckIcon from '@mui/icons-material/Check';
import ProfileInfo from "../Components/ProfileInfo";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDatabase } from "../DatabaseContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

function Proflie(props) {
  const [profileUser, setProfileUser] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { getUserData } = useDatabase();
  const { currentUser } = useAuth();
  const urlParams = useParams();
  const uid = urlParams.id;
  const navigate = useNavigate();
  const { GenerateHash } = useDatabase();
  const [postCount, setPostCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);

  const Pages = [
    <PostDiv uid={uid} setPostCount={setPostCount} />,
    <div/>,
    <div/>,
    <ProfileInfo/>
  ]

  useEffect(async () => {
    if (!currentUser) {
      navigate('/signin');
      return;
    }
    const result = await getUserData(uid);
    if (result.data().followers) {
      setIsFollowing(result.data().followers.includes(currentUser.uid));
    }
    setProfileUser({ ...result.data(), uid });
  }, [urlParams])

  const ChangePage = id => {
    setCurrentPage(id);
  }

  const HandleFollowClick = async () => {
    setIsFollowing(!isFollowing);
    const followers = [...profileUser.followers];
    const newFollowers = isFollowing ? followers.filter(follower => follower !== currentUser.uid) : [...followers, currentUser.uid];
    await updateDoc(doc(db, "User", profileUser.uid), { followers: newFollowers });
    if (!isFollowing)
      await updateDoc(doc(db, "User", currentUser.uid), { following: arrayUnion(currentUser.uid) });
    else
      await updateDoc(doc(db, "User", currentUser.uid), { following: arrayRemove(currentUser.uid) });
    setProfileUser({ ...profileUser, followers: newFollowers });
  }

  const HandleMessageClick = () => {
    const hash = GenerateHash(profileUser.uid, currentUser.uid);
    navigate('/message/' + hash);
  }

  return (
    <ProfileContainer>
      {
        currentUser &&
        <>
          <div className="Profile-Left">
            <img src={profileUser.photoURL && profileUser.photoURL.replace('s96', 's400')} alt="profile" />
            <div className="Profile-FlexBox">
              <div>Posts</div>
              <div>{postCount}</div>
            </div>
            <div className="Profile-FlexBox">
              <div>Following</div>
              <div>{profileUser.following && profileUser.following.length}</div>
            </div>
            <div className="Profile-FlexBox">
              <div>Followers</div>
              <div>{profileUser.followers && profileUser.followers.length}</div>
            </div>
            <hr />
            <Button color="#EDEDED" fontColor="#737373">
              <EditIcon />
              Edit Profile
            </Button>
          </div>
          <div className="Profile-Main-Container">
            <div className="Profile-Title-Container">
              <h1>{profileUser.name}</h1>
              <Button variant="outlined" color="#2090E9" disabled={currentUser.uid == profileUser.uid} onClick={HandleFollowClick}>
                {
                  isFollowing ?
                    <>
                      <CheckIcon />
                      Following
                    </>
                    :
                    <>
                      <PersonAddIcon />
                      Follow
                    </>

                }
              </Button>
              <Button color="#2090E9" fontColor="white" disabled={currentUser.uid == profileUser.uid} onClick={HandleMessageClick} >
                <ChatBubbleIcon />
                Message
              </Button>
            </div>
            <div className="Profile-Bio">
              {profileUser.bio}
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
              {
                currentPage &&
                Pages[currentPage - 1]
              }
            </div>
          </div>
        </>
      }
    </ProfileContainer >
  )

}

export default Proflie;