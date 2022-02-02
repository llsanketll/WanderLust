import SearchBarContainer from './Styles/SearchBar.style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar()
{
  return(
    <SearchBarContainer>
      <span>Explore</span>
      <i><SearchOutlinedIcon/></i>
    </SearchBarContainer>
  );
}

export default SearchBar;