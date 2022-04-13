import { useRef } from "react";
import { useAuth } from "../AuthContext";
import { useDatabase } from "../DatabaseContext";
import CommentCardContainer from "../Styles/CommentCard.styles";

function CommentCard(props) {
  const {UploadData} = useDatabase();
  const {currentUser} = useAuth();
  const replyRef = useRef(null);;

  const HandleReplySubmit = async e => {
    e.preventDefault();
    const dataToUpload = {
      text: replyRef.current.value,
      name: currentUser.displayName,
      time: new Date().getTime()
    }
    const path = `Post/${props.post_id}/Comments/${props.commentID}/Replies`;
    console.log(path);
    await UploadData(dataToUpload, path);
    replyRef.current.value = '';
    props.GetReplies();
  }

  return (
    <CommentCardContainer>
      <div className="CommentCard-Main">
        <img src={props.image} alt="Profile Picture" />
        <h3>{props.name}</h3>
        <span>{new Date(props.date).toDateString()}</span>
      </div>
      <p className="CommentCard-Comment">{props.text}</p>
      <button onClick={(e) => {document.querySelector(".CommentCard-Reply-Input input.I" + props.commentID).focus()}} >Reply</button>
      {
        <div className="CommentCard-Replies-Main">
          <div className="CommentCard-Replies">
            <form className="CommentCard-Reply-Input" onSubmit={HandleReplySubmit}>
              <h4>Reply</h4>
              <input type="text" placeholder="Write a reply..." className={"I" + props.commentID} ref={replyRef}/>
            </form>
            {
              props.replies &&
              props.replies.map((reply, index) => {
                return (
                  <div key={index} className="CommentCard-Reply">
                    <h5>{reply.name}</h5>
                    <p>{reply.text}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </CommentCardContainer>
  )
}

export default CommentCard;