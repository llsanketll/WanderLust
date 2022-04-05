import PlanningCardContainer from "../Styles/PlanningCard.styles";
import FlightIcon from '@mui/icons-material/Flight';
import GroupsIcon from '@mui/icons-material/Groups';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RateReviewIcon from '@mui/icons-material/RateReview';

function PlanningCard(props) {
  return (
    <PlanningCardContainer>
      <div className="PlanningCard-Top">
        <div className="PlanningCard-First">
          <img src={props.image} alt="Planning" />
        </div>
        <div className="PlanningCard-Second">
          <div className="PlanningCard-Second-Main">
            <div className="PlanningCard-Second-Main-1">
              <div className="PlanningCard-Title PlanningCard-FlexBox">
                <h3>{props.username}</h3>
                <div>is travelling</div>
              </div>
              <div className="PlanningCard-FlexBox">
                <FlightIcon />
                <span>Biragnagar</span>
              </div>
              <div className="PlanningCard-FlexBox">
                <FlightIcon />
                <span>Pokhara</span>
              </div>
              <div className="PlanningCard-FlexBox">
                <GroupsIcon />
                <span>6</span>
                <span>members</span>
              </div>
            </div>
            <div className="PlanningCard-Second-Main-2">
              <div className="PlanningCard-FlexBox">
                <DateRangeIcon />
                <span>7, April, Thu</span>
              </div>
            </div>
            <div className="PlanningCard-Second-Main-3">
              <div>Staying</div>
              <div className="PlanningCard-Second-Main-3-Days">{props.days}</div>
              <div>Days</div>
            </div>
          </div>
        </div>
      </div>
      <div className="PlanningCard-Description">
        <div className="PlanningCard-FlexBox">
          <RateReviewIcon />
          <span>Plan:</span>
        </div>
        <div className="PlanningCard-Description-Text">" {props.description} "</div>
      </div>

    </PlanningCardContainer>
  )
}

export default PlanningCard;