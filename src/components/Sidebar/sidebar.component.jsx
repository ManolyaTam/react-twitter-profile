import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import PrimaryBtn from '../PrimaryBtn/primary-btn.component';
import NavIcon from '../NavIcon/nav-icon.component';
import { icons } from '../../data/nav';

const Sidebar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon className='x-icon' icon={faXTwitter} size='2xl' />
      <ul>
        {icons.map((item, index) => <NavIcon key={`navicon-${index}`} label={item.title} icon={item.icon} />)}
      </ul>

      <PrimaryBtn />
    </div>
  );
};

export default Sidebar;