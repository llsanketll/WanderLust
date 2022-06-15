import styled from "styled-components";

const ButtonContainer = styled.button`
  background: ${props =>
    props.variant == "outlined" || props.variant == "underline"
      ? "none"
      : props.color};
  border: ${props =>
    props.variant == "outlined" ? "solid 2px" + props.color : "none"};
  outline: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: ${props =>
    props.variant == "outlined" ? props.color : props.fontColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  & svg {
    margin-right: 0.2rem;
  }
  &:disabled {
    background-color: ${props =>
      props.variant != "outlined" ? "gray" : "none"};
    border: ${props =>
      props.variant == "outlined" ? "solid 2px gray" : "none"};
    color: ${props =>
      props.variant == "outlined" ? "gray" : props.fontColor};
    cursor: default;
  }
`;

export default ButtonContainer;
