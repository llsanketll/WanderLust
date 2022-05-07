import HotelCardContainer from '../Styles/HotelCardContainer';
import Button from './Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

function HotelCard(props) {
  return (
    <HotelCardContainer>
      <div className="HotelCard-ImageContainer">
        <img src={props.main_photo_url} />
      </div>
      <div className="HotelCard-Middle">
        <h2 className="HotelCard-name">{props.hotel_name}</h2>
        <div className="HotelCard-LocationContainer">
          <h4>Location</h4>
          <p className="Location">{props.address}</p>
        </div>
        <Button
          variant="outlined"
          color="#0071C2"
          className="HotelCard-ViewMap"
        >
          <LocationOnIcon />
          View Map
        </Button>
        <div className="HotelCard-RatingContainer">
          <h5>Rating: </h5>
          <div>
            <div className="HotelCard-Rating">
              <StarIcon />
              {props.review_score}
            </div>
            <Button variant="outlined" color="#0071C2">
              View Review
            </Button>
          </div>
        </div>
      </div>
      <div className="HotelCard-Last">
        <h3 className="HotelCard-Price">
          $ {props.composite_price_breakdown.gross_amount_per_night.value}
        </h3>
        <div>* per night</div>
        <Button color="#0071C2" fontColor="white">
          Go To Website
        </Button>
      </div>
    </HotelCardContainer>
  );
}

export default HotelCard;