import './profile-info.css';

const ProfileInfo = (props) => {
  return (
    <div className='profile-info'>
      <img className="background-img" src={props.bgImg} alt="background" />
      <img className="profile-img" src={props.profileImg} alt="profile" />
    </div>
  );
};

export default ProfileInfo;