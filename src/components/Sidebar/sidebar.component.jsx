import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBell, faEnvelope, faHouse, faMagnifyingGlass, faRectangleList, faUserGroup, faUser, faEllipsis, faBookmark } from '@fortawesome/free-solid-svg-icons';
import PrimaryBtn from '../PrimaryBtn/primary-btn.component';
import NavIcon from '../NavIcon/nav-icon.component';

const icons = [
  { title: 'Home', icon: faHouse },
  { title: 'Explore', icon: faMagnifyingGlass },
  { title: 'Notifications', icon: faBell },
  { title: 'Messages', icon: faEnvelope },
  { title: 'Lists', icon: faRectangleList },
  { title: 'BookMarks', icon: faBookmark },
  { title: 'Communities', icon: faUserGroup },
  { title: 'Profile', icon: faUser },
  { title: 'More', icon: faEllipsis },
];

const Sidebar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon className='x-icon' icon={faXTwitter} size='2xl' />
      <ul>
        {icons.map((item) => <NavIcon label={item.title} icon={item.icon} />)}
      </ul>

      <PrimaryBtn />
    </div>
  );
};

export default Sidebar;