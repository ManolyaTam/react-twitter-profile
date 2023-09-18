import ProfileOptions from '../ProfileOptions/profile-options.component';
import './profile-info.css';

const ProfileInfo = (props) => {
  return (
    <div className='profile-info'>
      <img className="background-img" src={props.bgImg} alt="background" />
      <img className="profile-img" src={props.profileImg} alt="profile" />

      <ProfileOptions />
    </div>
  );
};

export default ProfileInfo;