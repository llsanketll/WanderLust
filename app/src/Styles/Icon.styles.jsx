import styled from "styled-components";

const Icon = styled.i`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 20%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  & svg{
    fill: white;
  }
`;

export default Icon;