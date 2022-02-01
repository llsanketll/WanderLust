import styled from "styled-components";

const Icon = styled.i`
  width: 2rem;
  height: 2rem;
  border-radius: 20%;
  border: 1px solid ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  & svg{
    fill: white;
  }
  &:hover{
  background-color: ${props => props.color};
  }
`;

export default Icon;