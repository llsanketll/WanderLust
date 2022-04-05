import { useState } from "react";
import PostPlanningContainer from "../Styles/PostPlanning.styles";
import Button from '../Components/Button';
import { useEffect } from "react";
import { useRef } from "react";
import { GetNewGeoCoder } from "./Mapbox";
import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import { TextField } from "@mui/material";

function PostPlanning(props) {
  const [value, setValue] = useState(null);
  const [travelFrom, setTravelFrom] = useState("");
  const [travelTo, setTravelTo] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
  }
  useEffect(() => {
    const GeoCoderFrom = GetNewGeoCoder();
    GeoCoderFrom.addTo("#PostPlan-Geo-Search-From");
    GeoCoderFrom.on('result', res => {
      setTravelFrom(res.result.text);
    });
    GeoCoderFrom.setPlaceholder("Travelling From");
    const GeoCoderTo = GetNewGeoCoder();
    GeoCoderTo.addTo("#PostPlan-Geo-Search-To");
    GeoCoderTo.setPlaceholder("Travelling To");
    GeoCoderTo.on('result', res => {
      setTravelTo(res.result.text);
    });
  }, [])
  const RenderInput = () => {

  }
  return (
    <PostPlanningContainer>
      <div className='PostExp-Background' onClick={props.close}>
        {
          loading &&
          <div className='PostExp-Loading'>
          </div>
        }
      </div>
      <div>
        <form className="form_container" onSubmit={handleSubmit}>
          <h1>Planning</h1>
          <div className="PostPlan-Search-Container">
            <div className="form_content" id="PostPlan-Geo-Search-From">
            </div>
            <div className="form_content" id="PostPlan-Geo-Search-To">
            </div>
          </div>

          <div className="PostPlan-Date-Container">
            <div className="form_content">
              <input
                type="number"
                min="1"
                className="form-control"
                id="members"
                placeholder="Number of Members"
              />
            </div>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="Pick travel date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="form_content">
            <input
              type="number"
              min="1"
              className="form-control"
              id="stay"
              placeholder="How many days are you going to saty?"
            />
          </div>
          <div className="form_content">
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder=" 📝 Write your plan. "
            ></textarea>
          </div>
          <div className="form_content">
            <Button type="submit" className="button" id="PostExp-Submit-Button" name="post" >
              Post
            </Button>
          </div>
        </form>
      </div>
    </PostPlanningContainer>
  )
}

export default PostPlanning;