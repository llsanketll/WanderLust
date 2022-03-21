import SearchBarContainer from '../Styles/SearchBar.style';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar(props) {
  return (
    <SearchBarContainer {...props}>
      <input type="text" placeholder={props.placeholder} />
      <i><SearchOutlinedIcon /></i>
    </SearchBarContainer>
  );
}

export default SearchBar;