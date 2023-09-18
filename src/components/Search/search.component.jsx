import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className="search">
      <FontAwesomeIcon className="search-magnifier" icon={faMagnifyingGlass} />
      <input type="search" />
    </div>
  );
};

export default Search;