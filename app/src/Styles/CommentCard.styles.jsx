import styled from "styled-components";

const CommentCardContainer = styled.div`
  border: 1px solid #737373;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  & .CommentCard-Main {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  & img {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
  }
  & h3 {
    margin-right: 1rem;
  }

  & span {
    color: #737373;
    font-size: 0.6rem;
  }

  button {
    background: none;
    outline: none;
    border: none;
    color: #1e44a5;
    margin-top: 1rem;
    cursor: pointer;
  }

  & .CommentCard-Replies-Main {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 2rem;
      height: 4rem;
      top: -0.5rem;
      left: 0.9rem;
      border-left: 2px solid #737373;
      border-bottom: 2px solid #737373;
      border-bottom-left-radius: 1rem;
    }
  }

  & .CommentCard-Reply-Input {
    margin-bottom: 1rem; 
    input {
      margin-top: 0.5rem;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 1rem;
      outline: none;
      font-size: 1.1rem;
      font-weight: 500;
      color: black;
      padding: 0.8rem;
      border-radius: 0.6rem;
    }
  }

  & .CommentCard-Replies {
    position: relative;
    margin-top: 1rem;
    margin-left: 3rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem 1rem 0 1rem;
    border-radius: 1rem;
    max-height: 20rem;
    overflow-x: hidden;

    & .CommentCard-Reply {
      &::after {
        content: "";
        display: block;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
      & p {
        font-size: 0.8rem;
      }
    }
    & h5 {
      color: #737373;
    }
  }
`;

export default CommentCardContainer;
