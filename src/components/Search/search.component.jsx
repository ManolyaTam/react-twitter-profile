import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className="search">
      <FontAwesomeIcon className="search-magnifier" icon={faMagnifyingGlass} />
      <input type="search" placeholder='Search'/>
    </div>
  );
};

export default Search;