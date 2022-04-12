import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDatabase } from '../DatabaseContext';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
const ProfileImgContainer = styled.div`
  & img {
    object-fit: cover;
    cursor: pointer;
  }
`;

function ProfileImg(props) {
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState('');
  const { getUserData } = useDatabase();
  useEffect(() => {
    if (props.src) {
      setPhotoURL(props.src);
      return;
    }
    getUserData(props.uid).then(result => {
      if (result.data())
        setPhotoURL(result.data().photoURL);
    })
  }, [])

  const HandleClick = () => {
    navigate("/profile/" + props.uid);
  }

  return (
    <ProfileImgContainer onClick={HandleClick}>
      {
        photoURL &&
        <img src={photoURL} alt="Profile Pic" />
      }
    </ProfileImgContainer>
  )
}
export default ProfileImg;

