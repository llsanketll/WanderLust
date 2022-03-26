import styled from 'styled-components';

export const NavBar = styled.nav`
  background-color: #2c2c2c;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;


  & > ul {
    display: flex;
  }

  & li {
    display: flex;
    align-items: center;
    list-style: none;
    border-radius: 0.5rem;
    cursor:pointer;
  }

  & .FirstPart
  {
    margin: 0 2rem;
  }

  & .FirstPart span
  {
    font-size: 1.5rem;
  }

  & .FirstPart li{
    flex-direction: column;
  }

  & .MiddlePart >li{
    margin: 0 2.5rem 0 2.5rem;
    padding: 0 1rem 0 1rem;
  }

  & .MiddlePart > button{
    margin: 0 2.5rem 0 2.5rem;
    padding: 0 1rem 0 1rem;
  }

  & .LastPart li{
    margin: 0 0.5rem 0 0.5rem;
  }

  & .LastPart img {
    border-radius: 50%;
    height: 2.5rem ;
  }

  & li > i {
    margin: 0.5rem;
  }
`;
