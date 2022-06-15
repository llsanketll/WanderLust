import styled from "styled-components";

const NavBarDropDownContainer = styled.div`
  & .NavBarDropDown-Arrow {
    border-radius: 50%;
    transition: background 0.3s;
    & svg{
    }

    &:hover {
      background-color:#4e4f50;
    }
  }
  & .NavBarDropDown-Container {
    position: absolute;
    top: 3.5rem;
    right: 0;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-color: #2c2c2c;
    border-radius: 0.2rem;

    & ul li {
      padding: 0.5rem;
      transition: background, color 0.3s;
      &:hover {
        color: #202020;
        background: #f8f8f8;
      }
    }
  }
  @keyframes slidein {
    from {
      top: -10rem;
    }
    to {
      top: 4rem;
    }
  }
`;

export default NavBarDropDownContainer;
