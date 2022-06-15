import CommunityContainer from '../Styles/Community.styles';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import PostDiv from '../Components/PostDiv';
import { useState, useEffect } from 'react';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { ProfileButton } from '../Styles/Profile.styles';
import Planning from '../Components/Planning';
import Button from '../Components/Button';
import { GetNewGeoCoder } from '../Components/Mapbox';
import axios from 'axios';
import PostExperience from './PostExperience';
import PostPlanning from '../Components/PostPlanning';

function Community(props) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [canShow, setCanShow] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({
    country: "",
    cities: [],
    currentCity: "Search For City",
    photoURL: "https://images.unsplash.com/photo-1511068797325-6083f0f872b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  })
  const Pages = [
    <PostDiv city={currentPlace.currentCity} />,
    <Planning city={currentPlace.currentCity}/>
  ];
  const ChangePage = (page) => {
    setCurrentPage(page);
  }
  const HandleAddClick = () => {
    setCanShow(!canShow);
  }
  const GetCityPhoto = async (currentCity) => {
    const options = {
      method: "GET",
      url: "https://en.wikipedia.org/w/rest.php/v1/search/page?",
      params: {
        q: currentCity
      }
    }
    const result = await axios.request(options);
    return result.data.pages[0].thumbnail.url.replace(/...px/g, "800px");
  }

  const HandleSearchClick = async () => {
  }

  useEffect(() => {
    if (!document.getElementById('geo-search').hasChildNodes()) {
      const communityGeoSearch = GetNewGeoCoder();
      communityGeoSearch.addTo(document.getElementById("geo-search"));
      communityGeoSearch.setPlaceholder("Search for Place");
      communityGeoSearch.on('result', e => {
        let currentCountry;
        e.result.context.forEach(c => {
          if (c.id.startsWith("country"))
            currentCountry = c.text;
        })
        const currentCity = e.result.text;
        GetCityPhoto(currentCity).then(photoURL => {
          setCurrentPlace({ country: currentCountry, currentCity, photoURL })
        });
      })
    }
  }, [])
  return (
    <CommunityContainer>
      <nav>
        <div id="geo-search"></div>
        {/* <DropDown items={{ ...currentPlace }} /> */}
        <Button color="#0071C2" fontColor="white" onClick={() => HandleSearchClick()}>Search</Button>
      </nav>
      <div className='Community-Main'>
        <div className='Community-Left'>
          <img src={currentPlace.photoURL} className="Community-Place-Image" />
          <div className="Community-Trending">
            <h2>Trending</h2>
            <p>Place 1</p>
            <p>Place 1</p>
            <p>Place 1</p>
            <p>Place 1</p>
            <p>Place 1</p>
            <p>Place 1</p>
          </div>
        </div>
        <div className='Community-Right'>
          <h1 className="Community-Place-Title">{currentPlace.currentCity}</h1>
          <div className="Community-Button-Container">
            <ProfileButton selected={currentPage == 1 ? true : undefined} onClick={() => ChangePage(1)}>
              <LocalPostOfficeIcon />
              Posts
            </ProfileButton>
            <ProfileButton selected={currentPage == 2 ? true : undefined} onClick={() => ChangePage(2)}>
              <DateRangeIcon />
              Planning
            </ProfileButton>
          </div>
          <div className="Community-PostCardContainer">
            {
              canShow &&
              (
                currentPage == 1 ?
                  < PostExperience close={HandleAddClick} />
                  :
                  <PostPlanning close={HandleAddClick} />
              )
            }
            <div className="Community-AddIcon" onClick={HandleAddClick}>
              <AddIcon fontSize="inherit" />

            </div>
            {
              currentPage &&
              Pages[currentPage - 1]
            }
          </div>
        </div>
      </div>
    </CommunityContainer>
  );
}

export default Community;
