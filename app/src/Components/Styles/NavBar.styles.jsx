import styled from 'styled-components';


const NavBar = styled.nav`
  background-color: #2c2c2c;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & li {
    display: flex;
    list-style: none;
    margin: 0 1rem 0 1rem;
  }
  & li > i {
    margin-right: 0.5rem;
  }
`;


export default NavBar;
