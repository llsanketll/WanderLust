import styled from "styled-components";
import PostCardContainer from "./PostCard.styles";

const CommunityContainer = styled.div`
  padding: 1rem;
  & img {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    object-fit: cover;
  }
  & h1 {
    position: absolute;
    left: 20rem;
    top: 10rem;
    font-size: 3rem;
  }
  & main {
    display: flex;
    margin: 1rem;
    & .Community-Trending {
      text-align: center;
      border: 1px solid #c4c4c4;
      border-radius: 1rem;
      width: 18%;
      padding: 0.5rem;
      & p {
        margin: 1rem;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 0.5rem;
      }

      & p:hover {
        background-color: #f8f8f8;
      }
    }
    & .Community-PostCardContainer {
      position: absolute;
      top: 15rem;
      left: 5rem;
      border: 1px solid #c4c4c4;
      padding: 5rem;
      margin-left: 15rem;
      border-radius: 1rem;
      ${PostCardContainer} {
        margin-bottom: 2rem;
      }
    }

    & .Community-AddIcon {
      background: #eb5757;
      position: absolute;
      right: 2rem;
      top: -2rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-size: 3rem;
      transition: 0.3s;
      cursor: pointer;
      & svg {
        fill: white;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export default CommunityContainer;
