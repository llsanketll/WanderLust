import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import Button from '../Components/Button';
import { AppDiv, Header, Form, Input } from '../Styles/ChatRoom.style'
import { useDatabase } from "../DatabaseContext";
import { useAuth } from "../AuthContext";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";


function ChatRoom(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentUser } = useAuth();
  const { getAllMessages } = useDatabase();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { UploadData } = useDatabase();
  const dummy = useRef();

  useEffect(() => {
    if (!currentUser){
      navigate("/signin");
      return;
    }
    const usub = onSnapshot(collection(db, 'Messages', id, 'Messages'), async () => {
      const newMessages = []
      const result = await getAllMessages(id);
      result.map(msg => {
        newMessages.push({ ...msg.data(), id: msg.id });
      })
      setMessages(newMessages);
      dummy.current.scrollIntoView({ behavior: "smooth" });
    });
  }, [])

  const onTextChange = event => {
    setInputValue(event.target.value);
  };


  const sendMessage = async event => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    const { uid, photoURL } = currentUser;
    setInputValue("");
    await UploadData({
      text: inputValue,
      uid,
      photoURL,
      username: currentUser.displayName,
      createdAt: new Date().getTime()
    }, `Messages/${id}/Messages`);


    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppDiv>
      {/* <Header> */}
        {/* <h1>Messenger</h1> */}
      {/* </Header> */}
      <main>
        {
          messages.length > 0 &&
          messages.map(msg => (
            <Message message={msg} key={msg.id} currentUser={currentUser} />
          ))
        }
        <div ref={dummy}></div>
      </main>
      <Form onSubmit={sendMessage}>
        <Input placeholder="Type your message..." onChange={onTextChange} value={inputValue} />
        <Button color="#0071C2" fontColor="white" type="submit">
          Send
        </Button>
      </Form>
    </AppDiv>
  );
}

export default ChatRoom;