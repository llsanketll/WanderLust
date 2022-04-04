import styled from "styled-components";


const CardContainer = styled.div`
  background: url(${props => props.image}) no-repeat center;
  width: 244px;
  height: 268px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  color: white;

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
    margin: 1rem 1rem 0 auto;
  }

  & .Rating {
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-weight: bold;
    margin: 9rem 0 0 1rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #00000094;
  }
`; 

export default CardContainer;