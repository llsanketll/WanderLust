import { useState, useEffect, useRef } from 'react';
import PostPlanningContainer from '../Styles/PostPlanning.styles';
import Button from '../Components/Button';
import { GetNewGeoCoder } from './Mapbox';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import { TextField } from '@mui/material';

import db from '../firebase';
import { useDatabase } from '../DatabaseContext';

function PostPlanning(props) {
  const [date, setDate] = useState(null);
  const [travelFrom, setTravelFrom] = useState('');
  const [travelTo, setTravelTo] = useState('');
  const [loading, setLoading] = useState(false);
  const travel_members = useRef();
  const travel_description = useRef();
  const travel_duration = useRef();
  const GeoCoderFrom = GetNewGeoCoder();
  const GeoCoderTo = GetNewGeoCoder();
  const { addPlan } = useDatabase();

  async function handleSubmit(e) {
    e.preventDefault();
    const from = travelFrom;
    const to = travelTo;
    const members = travel_members.current.value;
    const description = travel_description.current.value;
    const duration = travel_duration.current.value;
    const submitButton = document.getElementById('PostPlan-Submit-Button');

    if (
      from === '' ||
      to === '' ||
      members === '' ||
      date === null ||
      description === '' ||
      duration === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    submitButton.disabled = true;

    const dataToUpload = {
      travelFrom: from,
      travelTo: to,
      travelMembers: members,
      travelDate: date,
      travelDuration: duration,
      travelInfo: description,
    };

    console.log(dataToUpload);
    try {
      await addPlan(dataToUpload);
    } catch (error) {
      alert(error);
    }

    setLoading(false);
    submitButton.disabled = false;
  }
  useEffect(() => {
    if (!document.getElementById('PostPlan-Geo-Search-From').hasChildNodes()) {
      GeoCoderFrom.addTo('#PostPlan-Geo-Search-From');
      GeoCoderFrom.on('result', (res) => {
        setTravelFrom(res.result.text);
      });
      GeoCoderFrom.setPlaceholder('Travelling From');
    }
    if (!document.getElementById('PostPlan-Geo-Search-To').hasChildNodes()) {
      GeoCoderTo.addTo('#PostPlan-Geo-Search-To');
      GeoCoderTo.setPlaceholder('Travelling To');
      GeoCoderTo.on('result', (res) => {
        setTravelTo(res.result.text);
      });
    }
  }, []);
  return (
    <PostPlanningContainer>
      <div className="PostExp-Background" onClick={props.close}>
        {loading && <div className="PostExp-Loading"></div>}
      </div>
      <div>
        <form className="form_container" onSubmit={handleSubmit}>
          <h1>Planning</h1>
          <div className="PostPlan-Search-Container">
            <div className="form_content" id="PostPlan-Geo-Search-From"></div>
            <div className="form_content" id="PostPlan-Geo-Search-To"></div>
          </div>

          <div className="PostPlan-Date-Container">
            <div className="form_content">
              <input
                type="number"
                min="1"
                className="form-control"
                id="members"
                ref={travel_members}
                placeholder="Number of Members"
              />
            </div>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                label="Pick travel date"
                value={date}
                onChange={(newValue) => {
                  const n = new Date(newValue).getTime();
                  setDate(n);
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
              id="duration"
              ref={travel_duration}
              placeholder="How many days are you going to saty?"
            />
          </div>
          <div className="form_content">
            <textarea
              className="form-control"
              id="description"
              ref={travel_description}
              rows="3"
              placeholder=" 📝 Write your plan. "
            ></textarea>
          </div>
          <div className="form_content">
            <Button
              type="submit"
              className="button"
              id="PostPlan-Submit-Button"
              name="post"
            >
              Post
            </Button>
          </div>
        </form>
      </div>
    </PostPlanningContainer>
  );
}

export default PostPlanning;
