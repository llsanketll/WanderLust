import styled from "styled-components";
import ButtonContainer from "./Button.styles";
import CommentCardContainer from "./CommentCard.styles";

const BlogPostConatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & main {
    width: 100%;
    height: 92vh;
    background-color: #cacaca;
    display: flex;
    justify-content: center;
    padding: 2rem;
  }

  & .BlogPost-Main {
    width: 80vw;
    height: 80vh;
    border-radius: 1rem;
    background-color: #f8f8f8;
    padding: 2rem;
    overflow-y: scroll;
    overflow-x: hidden;

    h1 {
      font-size: 2rem;
    }
  }

  & .BlogPost-InfoContainer {
    display: flex;
    align-items: center;

    & img {
      width: 2.5rem;
      border-radius: 50%;
    }
    & p {
      color: #737373;
      font-weight: 500;
      font-size: 0.7rem;
    }
    & h4 {
      display: inline;
    }
  }

  & .BlogPost-FlexContainer {
    margin: 1rem;
  }

  & .BlogPost-Gradiants {
    position: relative;
    & button {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      outline: none;
      border: 3px solid white;
      margin: 0 1rem 0 1rem;
      cursor: pointer;
      transition: background 0.3s;

      & svg {
        fill: white;
        transform: scale(1.5);
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    & > button {
      left: 0;
      transform: rotate(180deg) translateY(50%);
    }

    & button:last-child {
      right: 0;
    }

    &::before,
    &::after {
      position: absolute;
      top: 0;
      content: "";
      width: 10rem;
      height: 20rem;
      pointer-events: none;
    }

    &::before {
      background: linear-gradient(
        90deg,
        rgb(225, 225, 225, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    &::after {
      right: 0;
      background: linear-gradient(
        -90deg,
        rgba(225, 225, 225, 0.8),
        rgba(225, 225, 225, 0)
      );
    }
  }

  & .BlogPost-ImagesContainer {
    display: flex;
    align-items: center;
    margin-top: 6rem;
    height: 20rem;
    overflow: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    & img {
      min-height: 20rem;
      max-height: 20rem;
      min-width: 20rem;
      max-width: 20rem;
      object-fit: cover;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
    }

    & .SelectedImage {
      position: fixed;
      min-height: 80vh;
      min-width: 90vw;
      left: 50%;
      top: 52%;
      transform: translate(-50%, -50%);
      right: 100%;
      filter: saturate(100%);
      transition: 0.3s;
      z-index: 2;
      object-fit: contain;
      pointer-events: none;
    }
  }

  & .BlogPost-Background {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1;

    & .BlogPost-CloseIcon {
      position: fixed;
      top: 5.5rem;
      right: 2rem;
      cursor: pointer;
      & svg {
        fill: white;
        transform: scale(3);
      }
    }
  }

  & .BlogPost-Comments {
    padding: 3rem;
    width: 80vw;

    & .BlogPost-Comments-Top {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
    }
    ${ButtonContainer} {
      font-size: 1.2rem;
      border-radius: 0.5rem;
    }

    ${CommentCardContainer} {
      margin: 1rem;
    }
  }

  & .BlogPost-Comment-Input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    height: 5rem;
    border-radius: 0.5rem;
    padding: 1rem;
    font-weight: 500;
    border: 1px solid #737373;
    box-shadow: 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.2);
    & img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
    & input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 1.1rem;
      font-weight: 500;
      color: #737373;
      background-color: transparent;
      color: black;
      font-family: "Montserrat", sans-serif;
      &::placeholder {
        color: #737373;
      }
    }
  }
`;

export default BlogPostConatainer;
