import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBell, faEnvelope, faHouse, faMagnifyingGlass, faRectangleList, faUserGroup, faUser, faEllipsis, faBookmark } from '@fortawesome/free-solid-svg-icons';
import PrimaryBtn from '../PrimaryBtn/primary-btn.component';
import NavIcon from '../NavIcon/nav-icon.component';

const Sidebar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon className='x-icon' icon={faXTwitter} size='2xl' />
      <ul>
        <li>
          <NavIcon label='Home'>
            <FontAwesomeIcon icon={faHouse} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
        <li>
          <NavIcon label='Explore'>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
        <li>
          <NavIcon label='Notifications'>
            <FontAwesomeIcon icon={faBell} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
        <li>
          <NavIcon label='Messages'>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
        <li>
          <NavIcon label='Lists'>
            <FontAwesomeIcon icon={faRectangleList} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
        <li>
          <NavIcon label='Bookmarks'>
            <FontAwesomeIcon icon={faBookmark} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
        <li>
          <NavIcon label='Communities'>
            <FontAwesomeIcon icon={faUserGroup} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
        <li>
          <NavIcon label='Profile'>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
        <li>
          <NavIcon label='More'>
            <FontAwesomeIcon icon={faEllipsis} style={{ fontSize: 20 }} />
          </NavIcon>
        </li>
      </ul>

      <PrimaryBtn />
    </div>
  );
};

export default Sidebar;