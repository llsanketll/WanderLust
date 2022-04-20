import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useAuth } from "../AuthContext";
import { useDatabase } from "../DatabaseContext";
import CommentCardContainer from "../Styles/CommentCard.styles";

function CommentCard(props) {
  const { UploadData, getReplies } = useDatabase();
  const { currentUser } = useAuth();
  const [replies, setReplies] = useState([]);
  const replyRef = useRef(null);

  useEffect(async () => {
    const replies = await getReplies(props.post_id, props.comment_id);
    setReplies(replies);
  }, [])

  const HandleReplySubmit = async e => {
    e.preventDefault();
    if (replyRef.current.value.trim() == '') {
      alert('Reply Cannot be empty');
      return;
    }
    const dataToUpload = {
      text: replyRef.current.value,
      name: currentUser.displayName,
      time: new Date().getTime()
    }
    const path = `Post/${props.post_id}/Comments/${props.comment_id}/Replies`;
    await UploadData(dataToUpload, path);
    replyRef.current.value = '';
    setReplies([...replies, dataToUpload]);
  }

  return (
    <CommentCardContainer>
      <div className="CommentCard-Main">
        <img src={props.photoURL} alt="Profile Picture" />
        <h3>{props.name}</h3>
        <span>{new Date(props.time).toDateString()}</span>
      </div>
      <p className="CommentCard-Comment">{props.text}</p>
      <button onClick={(e) => { document.querySelector(".CommentCard-Reply-Input input.I" + props.id).focus() }} >Reply</button>
      {
        <div className="CommentCard-Replies-Main">
          <div className="CommentCard-Replies">
            {
              replies &&
              replies.map((reply, index) => (
                <div key={index} className="CommentCard-Reply">
                  <h5>{reply.name}</h5>
                  <p>{reply.text}</p>
                </div>
              ))
            }
            <form className="CommentCard-Reply-Input" onSubmit={HandleReplySubmit}>
              <h4>Reply</h4>
              <input type="text" placeholder="Write a reply..." className={"I" + props.id} ref={replyRef} />
            </form>
          </div>
        </div>
      }
    </CommentCardContainer>
  )
}

export default CommentCard;