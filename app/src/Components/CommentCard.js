import CommentCardContainer from "../Styles/CommentCard.styles";

function CommentCard(props) {
  const GetUserName = userID => {
    return "Sanket Lamsal";
  }
  return (
    <CommentCardContainer>
      <div className="CommentCard-Main">
        <img src={props.image} alt="Profile Picture" />
        <h3>{props.name}</h3>
        <span>1 min ago</span>
      </div>
      <p className="CommentCard-Comment">{props.comment}</p>
      <button onClick={(e) => {document.querySelector(".CommentCard-Reply-Input input.I" + props.ID).focus()}}>Reply</button>
      {
        <div className="CommentCard-Replies-Main">
          <div className="CommentCard-Replies">
            <div className="CommentCard-Reply-Input">
              <h4>Reply</h4>
              <input type="text" placeholder="Write a reply..." className={"I" + props.ID} />
            </div>
            {
              props.replies &&
              props.replies.map((reply, index) => {
                return (
                  <div key={index} className="CommentCard-Reply">
                    <h5>{GetUserName(props.userID)}</h5>
                    <p>{reply.content}</p>
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