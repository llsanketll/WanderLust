import SearchBarContainer from '../Styles/SearchBar.style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar()
{
  return(
    <SearchBarContainer>
      <input type = "text" placeholder = "Search for a place"/>
      <i><SearchOutlinedIcon/></i>
    </SearchBarContainer>
  );
}

export default SearchBar;