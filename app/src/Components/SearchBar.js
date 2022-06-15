import SearchBarContainer from '../Styles/SearchBar.style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { CreateNewGeocoder } from './Mapbox';
import { useEffect } from 'react';

function SearchBar(props) {

  return (
    <SearchBarContainer {...props}>
      <input type="text" placeholder={props.placeholder} />
      <i><SearchOutlinedIcon /></i>
    </SearchBarContainer>
  );
}

export default SearchBar;