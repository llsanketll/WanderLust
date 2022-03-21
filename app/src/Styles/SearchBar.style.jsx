import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  border-radius: 5rem;
  height: 2.5rem;
  padding: 1rem 1rem;
  background: #f8f8f8;
  border: none;

  & svg {
    fill: ${props=>props.color};
  }

  & input {
    border: none;
    background: none;
    width: 100%;
    height: 2.5rem;
    padding: 1rem 1rem;
    outline: none;
    font-size: 1.1rem;
    color: ${props => props.color};
  }

  input::placeholder {
    color: ${props => props.color};
  }
`;

export default SearchBarContainer;
