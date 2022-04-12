import styled from "styled-components";

const PostPlanningContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: grid;
  place-content: center;

  & .PostExp-Background {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: -1;
  }

  & h1 {
    margin-bottom: 1rem;
    text-align: center;
  }
  & .PostPlan-Search-Container {
    display: flex;
  }
  & .form_container {
    display: block;
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 15px 35px 0 rgba(60, 66, 87, 0.1),
      0 5px 15px 0 rgba(0, 0, 0, 0.07);
  }
  & .PostPlan-Date-Container {
    display: flex;
  }

  & .form_content {
    margin: 1rem;
    & input, textarea {
      padding: 1rem;
    }
  }
  & #duration {
    height: 2rem;
    width: 20vw;
    padding: 1rem;
  }
  & #members {
    height: 2rem;
    margin-right: 12.1rem;
    outline: none;
  }
  & #description {
    max-width: 100%;
    min-width: 100%;
    position: relative;
  }
  & .mapboxgl-ctrl-geocoder {
    box-shadow: none;
    border: 1px solid black;
    margin-left: 0;
    height: 2.5rem;
    z-index: 100;
  }
  & .mapboxgl-ctrl-geocoder--pin-right > * {
    background-color: transparent;
    width: 2rem;
    right: 0;
    top: -8px;
  }
  & button {
    justify-content: center;
    width: 100%;
    border: 0;
    border-radius: 4px;
    outline: none;
    min-height: 48px;
    &:disabled {
      background-color: grey;
    }
  }

  & button,
  [name="post"] {
    background-color: #0071c2;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }
  & .PostExp-Loading {
    position: absolute;
    width: 10rem;
    height: 10rem;
    bottom: 10vh;
    right: 20vw;
    border: 1rem solid #0071c2;
    border-left-color: transparent;
    border-radius: 50%;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }
`;

export default PostPlanningContainer;
