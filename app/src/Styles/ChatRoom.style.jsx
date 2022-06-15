import styled from "styled-components";

const AppDiv = styled.div`
  background-color: #181a1b;
  color: white;
  padding-bottom: 0.5rem;
  main {
    height: 79.2vh;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 10px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #008bfe;
      border-radius: 1rem;
    }
  }
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto 2rem auto;
  overflow: hidden;
  height: 3rem;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: black;
  padding: 1.25rem;
`;

const Input = styled.input`
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  outline: none;
  padding: 0 1rem;
  font-size: 1rem;
  margin-right: 1rem;
  &::placeholder {
    font-size: 1rem;
    color: white;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export { AppDiv, Input, Form, Header };
