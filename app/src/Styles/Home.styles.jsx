import styled  from "styled-components";

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  & .SearchBarDiv {
    margin: 10vh 0 0 0;
    background: url("https://images.unsplash.com/photo-1479046934034-119c613579a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")
      no-repeat;
    background-size: cover;
    height: 50vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3rem;
  }

  & .GoogleMap img{
    width: 100%;
    height: 20rem;
    border-radius: 2rem;
  }

  & .CardGrid{
    display:  flex;
    justify-content: space-evenly;
    margin-top: 2rem;
  }
  & .PopularPlaces{
    margin-left: 6.5rem;
    margin-top: 5rem;
  }
/* 
  & .mapboxgl-canvas{
    height: 400px;
    width: 200px;
    border-radius: 20px;
  } */
`;

export default HomeContainer;