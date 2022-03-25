import styled from "styled-components";
import ButtonContainer from "./Button.styles";

const PostCardContainer = styled.div`
  background-color: #f8f8f8;
  padding: 2rem;
  width: 60vw;
  display: flex;
  border-radius: 2rem;
  cursor: pointer;

  & .PostCard-ImageContainer {
    margin-right: 1rem;
  }

  & .PostCard-ViewMap {
    margin-top: 2rem;
  }

  & .PostCard-InfoContainer {
    display: flex;
    align-items: center;
    width: 45rem;
    margin-top: 1rem;
    & svg {
      fill: #cccccc;
    }
  }

  & .PostCard-FlexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }

  & #PostCard-Comment-Count {
    margin: 0 0.5rem 0 0.5rem;
  }

  & #PostCard-Like-Count {
    margin: 0 0.5rem 0 0.5rem;
  }

  & .PostCard-Last {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    & div {
      color: gray;
      font-size: 0.7rem;
      margin-left: 0.45rem;
    }
    & .PostCard-Date {
      margin-bottom: 1rem;
      margin-left: 1rem;
    }
  }
`;

export default PostCardContainer;
