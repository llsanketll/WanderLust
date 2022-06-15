import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.sender == true ? "row-reverse" : "row")};
  align-items: center;
  margin: 10px;
  padding: 10px;
`;
const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px 0 10px;
`;
const Username = styled.p`
  order: ${props => (props.sender ? 1 : 0)};
  font-size: 10px;
  margin: 0 0 5px 10px;
  font-weight: bold;
`;
const TextMsg = styled.p`
  padding: 0.2em 0.6em;
  background-color: ${props => (props.sender ? "#008BFE" : "#ffffff")};
  color: ${props => (props.sender ? "white" : "black")};
  margin: 5px;
  margin-top: 0px;
  border-radius: 1.3em;
  padding: 0.5rem;
`;

export {MessageContainer, ProfilePic, Username, TextMsg};
