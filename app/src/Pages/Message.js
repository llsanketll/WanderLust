import { issuedAtTime } from '@firebase/util';
import React from 'react'
import { useAuth } from '../AuthContext';
import {MessageContainer, ProfilePic, Username, TextMsg} from '../Styles/Message.styles'

export default function Message(props) {
  const { text, uid, photoURL, username } = props.message;
  const isSender = uid === props.currentUser.uid;
  return (
    <MessageContainer sender={isSender}>
      {
        !isSender && <ProfilePic src={photoURL} alt={"Photo URL"} />
      }
      <div>
        <Username sender={isSender}>
          {!isSender && username}
        </Username>
        <TextMsg sender={isSender}>{text}</TextMsg>
      </div>
    </MessageContainer>
  )
}
