import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  border-radius: 5rem;
  height: 2.5rem;
  padding: 1rem 1rem;
  background: #f8f8f8;
  border: none;

  & svg{
    fill: #4e4e4e;
  }

  & input {
    border: none;
    background: none;
    width: 30vw;
    border-radius: 5rem;
    height: 2.5rem;
    padding: 1rem 1rem;
    outline: none;
    font-size: 1.1rem;
    color: #4e4e4e;
  }
`;

export default SearchBarContainer;
