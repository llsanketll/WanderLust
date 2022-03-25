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
      <button>Reply</button>
      {
        props.replies &&
        props.replies.length > 1 &&
        <div className="CommentCard-Replies">
          {
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
      }
    </CommentCardContainer>
  )
}

export default CommentCard;