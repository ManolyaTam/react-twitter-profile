import './mini-profile.css';
import FollowBtn from '../FollowBtn/follow-btn.component';
const MiniProfile = (props) => {
  return (
    <div className="mini-profile">
      <img src={props.img} alt="" style={{ width: 40 }} />
      <div className='mini-profile-flex'>
        <div className='title-and-handel'>
          <p>{props.title}</p>
          <p className='grey mini-text'>{props.handel}</p>
        </div>
        <FollowBtn />
      </div>
    </div>
  );
};

export default MiniProfile;