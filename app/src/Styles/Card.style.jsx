import styled from "styled-components";

const CardContainer = styled.div`
  color: white;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  width: 244px;
  height: 268px;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & .Card-Content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & .Heart {
    color: #dadada;
    margin-bottom: auto;
    background-color: white;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
  }

  & .Rating {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1.5rem;
    margin: auto 0 1rem 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(32px);
    width: 4.5rem;
    border-radius: 2rem;
    font-weight: 500;
  }

  & .Rating svg {
    color: #ffd875;
    margin-right: 0.5rem;
  }

  & span {
    position: absolute;
    bottom: 5rem;
    margin-left: 1rem;
    font-weight: bold;
    text-shadow: 0.1rem 0.1rem 0.1rem #00000094;
  }
`;

export default CardContainer;
