import styled from "styled-components";

const HomeContainer = styled.div`
  & .DropDownDiv {
    display: flex;
    align-items: center;
    /* margin: 5rem 0 0 2rem; */
  }

  & .LocationIcon {
    display: grid;
    place-content: center;
    color: #ff678b;
    border: 3px solid #ff678b;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    border-radius: 50%;
  }

  & .Landing {
    display: grid;
    place-items: center;
     & h1{
       margin: 1rem 0 1rem 0;
       font-size: 2.5rem;
       font-weight: 700;
     }
  }

  & .SearchBarDiv {
    background: url("https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")
      no-repeat;
    background-size: cover;
    height: 70vh;
    width: 50vw;
    display: flex;
    align-items: center;
    padding: 2rem;
    border-radius: 1rem;
  }

  & .MapBox-Container img {
    width: 100%;
    height: 20rem;
    border-radius: 2rem;
  }

  & .CardGrid {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
  }
  & .PopularPlaces {
    margin-left: 6.5rem;
    margin-top: 5rem;
  }
  & #home-geo-search {
    width: 100%;
    & .mapbox-gl-ctrl {
    }
    & .mapboxgl-ctrl-geocoder {
      width: 100%;
      margin-left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
      max-width: none;
      & svg {
        position: static;
        transform: scale(1.5);
        margin: 0 1rem 0 1rem;
      }
      & input {
        width: 100%;
        font-size: 0.9rem;
        font-family: "Roboto", sans-serif;
      }
    }
  }
`;

export default HomeContainer;
