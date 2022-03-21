import HotelCardContainer from "../Styles/HotelCardContainer";
import Button from "./Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
function HotelCard(props) {

  return (
    <HotelCardContainer>
      <div className="HotelCard-ImageContainer">
        <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
      <div className="HotelCard-Middle">
        <h2 className="HotelCard-name">HotelName</h2>
        <div className="HotelCard-LocationContainer">
          <h4>Location</h4>
          <p className="Location">Naxal</p>
        </div>
        <Button variant="outlined" color="#0071C2" className="HotelCard-ViewMap">
          <LocationOnIcon />
          View Map
        </Button>
        <div className="HotelCard-RatingContainer">
          <h5>Rating: </h5>
          <div>
            <div className="HotelCard-Rating">
              <StarIcon />
              4.5
            </div>
            <Button variant="outlined" color="#0071C2">
              View Review
            </Button>
          </div>
        </div>
      </div>
      <div className="HotelCard-Last">
        <h3 className="HotelCard-Price"> Rs.1500</h3>
        <div>* per night</div>
        <Button color="#0071C2">Go To Website</Button>
      </div>
    </HotelCardContainer>
  )
}

export default HotelCard;