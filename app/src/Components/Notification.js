import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from 'styled-components';

const NotificationContainer = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background-color: #3a3b3c;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
      background-color: #66696b;
    }
    & .Notification-Box{
      position: absolute;
      top: 4.5rem;
      right: 15vw;
      width: 20rem;
      height: 15rem;
      background: #2C2C2C;
      border-radius: 0.5rem;
      padding: 1rem;
    }

    & .Notification-Item{
      display: flex;  
      width: 100%;
      border-bottom: 1px solid grey;
      padding: 1rem;
      & div{
        & p:first-child{
          font-size: 0.8rem;
          width: 100%;
        }
      }
      & img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 1rem;
      }
    }
`;

export default function () {
  const [canShow, setCanShow] = React.useState(false);
  const HandleClick = () => {
    setCanShow(!canShow);
  }
  const notifications = [
    { name: "Sabin Badal", photoURL: "https://i.ibb.co/qxXxLKV/profile-photo.jpg", message: "Hey, how are you?" },
  ]
  return (
    <NotificationContainer onClick={HandleClick}>
      <NotificationsIcon />
      {
        canShow &&
        <div className="Notification-Box">
          {
            notifications &&
            notifications.map((notification, index) => (
              <div key={index} className="Notification-Item">
                <img src={notification.photoURL} alt="profile-photo" />
                <div>
                  <p>{notification.name}</p>
                  <p>{notification.message}</p>
                </div>
              </div>
            ))
          }
        </div>
      }
    </NotificationContainer>
  )
}
