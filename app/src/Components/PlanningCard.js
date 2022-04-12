import PlanningCardContainer from '../Styles/PlanningCard.styles';
import FlightIcon from '@mui/icons-material/Flight';
import GroupsIcon from '@mui/icons-material/Groups';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RateReviewIcon from '@mui/icons-material/RateReview';

function PlanningCard(props) {
  return (
    <PlanningCardContainer>
      <div className="PlanningCard-Top">
        <div className="PlanningCard-First">
          <img src={props.photoURL && props.photoURL} alt="Planning" />
        </div>
        <div className="PlanningCard-Second">
          <div className="PlanningCard-Second-Main">
            <div className="PlanningCard-Second-Main-1">
              <div className="PlanningCard-Title PlanningCard-FlexBox">
                <h3>{props.name}</h3>
                <div>is travelling</div>
              </div>
              <div className="PlanningCard-FlexBox">
                <FlightIcon />
                <span>{props.travelFrom}</span>
              </div>
              <div className="PlanningCard-FlexBox">
                <FlightIcon />
                <span>{props.travelTo}</span>
              </div>
              <div className="PlanningCard-FlexBox">
                <GroupsIcon />
                <span>{props.travelMembers}</span>
                <span>members</span>
              </div>
            </div>
            <div className="PlanningCard-Second-Main-2">
              <div className="PlanningCard-FlexBox">
                <DateRangeIcon />
                <span>{new Date(props.travelDate).toDateString()}</span>
              </div>
            </div>
            <div className="PlanningCard-Second-Main-3">
              <div>Staying</div>
              <div className="PlanningCard-Second-Main-3-Days">
                {props.travelDuration}
              </div>
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
        <div className="PlanningCard-Description-Text">
          " {props.travelInfo} "
        </div>
      </div>
    </PlanningCardContainer>
  );
}

export default PlanningCard;