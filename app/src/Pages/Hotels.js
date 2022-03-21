import { useState } from "react";
import HotelsContainer from "../Styles/Hotels.styles";
import SearchBar from "../Components/SearchBar";
import DropDown from "../Components/DropDown";
import Button from "../Components/Button";
import HotelCard from "../Components/HotelCard";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import MapBox from "../Components/Mapbox";



function Hotels() {
  const [selectedValue, setSelectedValue] = useState("5");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    ratings.push(
      <FormControlLabel
        key={i}
        value="top"
        control={
          <Radio
            key={"radio" + i}
            checked={selectedValue == i}
            onChange={handleChange}
            value={i}
            name="radio-button"
            inputProps={{ 'aria-label': i }}
          />}
        label={i}
        labelPlacement="top"
      />
    );
  }

  return (
    <HotelsContainer>
      <nav>
        <SearchBar color="#0071C2" placeholder="Enter Place Name" width="30vw" />
        <DropDown />
        <Button color="#0071C2">Search</Button>
      </nav>
      <hr className="Hotels-HR" />
      <main>
        <div className="LeftSide">
          <SearchBar color="#A3A3A3" placeholder="Search By Hotel Name" />
          <hr className="Hotels-HR" />
          <h4>Search From Map:</h4>
          <MapBox />
          <hr className="Hotels-HR" />
          <h4>Price Range:</h4>
          <input type="range" min="0" max="500"></input>
          <hr className="Hotels-HR" />
          <h4>Star Rating:</h4>
          <RadioGroup row >
            {ratings}
          </RadioGroup>
        </div>
        <div className="RightSide">
          <h1>Hotels</h1>
          <div className="Hotels-CardContainer">
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
        </div>
      </main>
    </HotelsContainer>
  );
}

export default Hotels;