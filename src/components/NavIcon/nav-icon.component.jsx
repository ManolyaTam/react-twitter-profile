import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav-icon.css';

const NavIcon = (props) => {
  return (
    <div className="nav-icon">
      <FontAwesomeIcon className='x-icon' icon={props.icon} style={{ fontSize: 20 }} />
      <span style={{ fontSize: 20 }}>{props.label}</span>
    </div>
  );
};

export default NavIcon;