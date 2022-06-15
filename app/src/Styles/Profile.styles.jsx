import styled from "styled-components";
import PostCardContainer from "./PostCard.styles";

const ProfileContainer = styled.div`
  display: flex;
  padding: 3rem;

  & .Profile-Left {
    width: 20%;
    margin-right: 5rem;
    & hr {
      border: none;
      border-bottom: 2px solid #cccccc;
      box-shadow: 0px 1px 3px rgba(154, 154, 154, 0.25);
      margin-bottom: 1rem;
    }
    & .Profile-FlexBox {
      display: flex;
      & div {
        font-size: 1.1rem;
        font-weight: 500;
        color: #c4c4c4;
        margin-bottom: 1rem;
      }

      div:last-child {
        color: #737373;
        margin-left: auto;
      }
    }
    & img {
      width: 18rem;
      height: 18rem;
      object-fit: cover;
      margin-bottom: 1rem;
    }
  }
  & .Profile-Button-Container {
    display: flex;
  }
  & .Profile-Title-Container {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    & h1 {
      margin-right: 2rem;
    }
    & button {
      margin-right: 2rem;
    }
  }
  .Profile-Content {
    ${PostCardContainer} {
      margin-bottom: 2rem;
    }
  }
`;
const ProfileButton = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: ${props => (props.selected ? "#2090E9" : "grey")};
  border-bottom: ${props =>
    props.selected ? "solid 2px #2090E9" : "solid 2px transparent"};
  display: flex;
  align-items: center;
  & svg {
    margin: 0 0.5rem 0 0.5rem;
  }
`;
export { ProfileContainer, ProfileButton };
