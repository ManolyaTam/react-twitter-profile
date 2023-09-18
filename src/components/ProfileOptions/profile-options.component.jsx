import './profile-options.css'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FollowBtn from "../FollowBtn/follow-btn.component";

const ProfileOptions = () => {
  return (
    <div className="profile-options">
      <FontAwesomeIcon icon={faEllipsis} className='more' />
      <FollowBtn />
    </div>
    );
};

export default ProfileOptions;