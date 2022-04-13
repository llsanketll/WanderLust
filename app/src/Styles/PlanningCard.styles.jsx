import styled from "styled-components";
const PlanningCardContainer = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  border-radius: 1rem;
  width: 55vw;
  & .PlanningCard-FlexBox {
    display: flex;
    align-items: center;
    & svg {
      fill: #737373;
      margin: 0 0.5rem 0 0;
    }
    & span {
      font-weight: 500;
      margin: 0 0.2rem 0 0.1rem;
    }
  }

  & .PlanningCard-Second-Main-1 {
    & > div {
      margin-bottom: 0.3rem;
    }
    & .PlanningCard-FlexBox:nth-child(2) {
      & svg {
        transform: rotate(45deg);
      }
    }

    & .PlanningCard-FlexBox:nth-child(3) {
      & svg {
        transform: rotate(120deg);
      }
    }
  }
  & .PlanningCard-Second-Main-2 {
    display: grid;
    place-content: center;
  }
  & .PlanningCard-Second-Main-3 {
    display: grid;
    place-content: center;
    text-align: center;
    margin-left: 1rem;

    & div:first-child {
      color: #737373;
      font-weight: 500;
    }
    & div:nth-child(2) {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  & .PlanningCard-Top {
    display: flex;
    margin-bottom: 1rem;
    & img{
      width: 7rem;
      height: 7rem;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
  & .PlanningCard-Second {
    display: flex;
    margin-left: 2rem;
  }
  & .PlanningCard-Second-Main {
    display: flex;
    & > div:nth-child(1),
    & > div:nth-child(2) {
      border-right: 1px solid #c4c4c4;
      padding-right: 3rem;
      margin-right: 3rem;
    }
  }
  & .PlanningCard-Title {
    & h3 {
      margin-right: 0.3rem;
    }
  }
  & .PlanningCard-Description {
    background-color: white;
    padding: 1rem;
  }
`;
export default PlanningCardContainer;
