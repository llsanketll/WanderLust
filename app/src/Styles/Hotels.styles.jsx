import styled from "styled-components";
import DropDownContainer from "./DropDown.styles";
import SearchBarContainer from "./SearchBar.style";
import HotelCardContainer from "./HotelCardContainer";
const HotelsContainer = styled.div`
  ${SearchBarContainer}{
    margin: 1rem;
    border-radius: 0.5rem;
  }

  ${DropDownContainer}{
    border-radius: 0.5rem;
  }

  & .Hotels-HR{
    border: none;
    border-top: 1px solid #e8e8e8;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  & nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.5rem;
    & button{
      font-size: 2rem;
      border-radius: 0.5rem;
    }
  }
  & main{
    display: flex;
    justify-content: space-between;
    margin: 1rem;
  }
  & .Hotels-CardContainer{
    padding: 1rem;
    & ${HotelCardContainer} {
      margin-bottom: 2rem;
    }
  }

  & .RightSide{
    margin-right: 2rem;
  }
`;

export default HotelsContainer;