import styled from "styled-components";
import PostCardContainer from "./PostCard.styles";
import ButtonContainer from "./Button.styles";

const CommunityContainer = styled.div`
  & .Community-Main {
    display: flex;
    margin-top: 2em;
    padding: 1rem;
  }

  & .mapboxgl-ctrl-geocoder {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
      font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI";
    & svg {
      position: initial;
    }
    & input {
      width: 20rem;
      font-size: 0.9rem;
    }
  }

  & nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 1rem;
    & ${ButtonContainer} {
      font-size: 2rem;
      border-radius: 0.5rem;
    }
  }

  & .Community-Button-Container {
    display: flex;
  }

  & .Community-Left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin-right: 2rem;
  }

  & .Community-Place-Image {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  & .Community-Place-Title {
    font-size: 3rem;
  }
  & .Community-Trending {
    text-align: center;
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 1rem;
    padding: 0.5rem;
    & p {
      margin: 1rem;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 0.5rem;
      &:hover {
        background-color: #f8f8f8;
      }
    }
  }
  & .Community-PostCardContainer {
    border: 1px solid #c4c4c4;
    padding: 5rem;
    border-radius: 1rem;
    width: 70vw;
    display: grid;
    place-content: center;
    ${PostCardContainer} {
      margin-bottom: 2rem;
    }
  }

  & .Community-AddIcon {
    background: #eb5757;
    position: absolute;
    top: 17.5rem;
    right: 10rem;
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
`;

export default CommunityContainer;
