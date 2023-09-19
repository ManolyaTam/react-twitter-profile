import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './profile-details.css';
import { faCalendarDays, faLink } from '@fortawesome/free-solid-svg-icons';

const ProfileDetails = () => {
  return (
    <div className='profile-details'>
      <h3>React</h3>
      <p className='handle'>@reactjs</p><br />
      <p>The library for web and native user interfaces</p>
      <p className='link'>
        <FontAwesomeIcon className='grey' icon={faLink} />
        <a href="https://react.dev/" target='_blank' rel='noreferrer'>react.dev</a>
        <FontAwesomeIcon className='grey' icon={faCalendarDays} />
        <p className='joining-date-p grey'>Joined July 2013</p><br />
        <a
          className='mini-font-detail'
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/reactjs/following'
        >
          267 <span className='grey'>Following</span>
        </a>
        <a
          className='mini-font-detail'
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/reactjs/verified_followers'
        >
          710K <span className='grey'>Followers</span>
        </a>
        <p className='grey mini-font'>Not followed by anyone you’re following</p>
      </p>
    </div>
  );
};

export default ProfileDetails;