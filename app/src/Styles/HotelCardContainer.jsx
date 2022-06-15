import styled from "styled-components";
import ButtonContainer from "./Button.styles";

const HotelCardContainer = styled.div`
  background-color: #f8f8f8;
  padding: 3rem;
  display: flex;
  border-radius: 2rem;

  & .HotelCard-ImageContainer {
    margin-right: 1rem;
  }

  & .HotelCard-ViewMap{
    margin-top: 2rem;
  }

  & .HotelCard-Last {
    margin-left: 15rem;
    & div {
      color: gray;
      font-size: 0.7rem;
      margin-left: 0.45rem;
    }
    & ${ButtonContainer} {
      margin-top: 4.5rem;
      font-size: 1.1rem;
    }
  }

  & .HotelCard-LocationContainer {
    margin-top: 1rem;
  }

  & .HotelCard-RatingContainer {
    margin-top: 3rem;
    & div{
      display: flex;
    }
  }

  & .HotelCard-Rating {
    background-color: #434343;
    display: flex;
    justify-content: space-around;
    padding: 0.1rem 0.5rem 0.1rem 0.5rem;
    align-items: center;
    border-radius: 2rem;
    width: 4.5rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
    color: white;
    & svg {
      fill: #ffd875;
    }
  }

  & img {
    width: 14rem;
    height: 16rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

export default HotelCardContainer;
