import styled from "styled-components";

const DropDownContainer = styled.div`
  & .DropDown-Main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    width: 15rem;
    border-radius: 0.5rem;
    padding: 0.2rem 1rem;
    font-weight: 700;
  }
  & i {
    cursor: pointer;
  }
  & .DropDown-Content {
    & ul{
      list-style: none;
      position: absolute;
      border: 1px solid black;
      margin-top: 1rem;
      width: 15rem;
      max-height: 15rem;
      overflow-y: scroll;
      border-radius: 0.5rem;
      background: white;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    & li {
      cursor: pointer;
      padding: 0.5rem;
      margin: 1rem;
      border-radius: 0.2rem;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;

export default DropDownContainer;
