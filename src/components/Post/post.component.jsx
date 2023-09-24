import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faThumbTack } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {
  return (
    <div className="post">
      {props.pinned && <p className='grey mini-font post-mini-detail'><FontAwesomeIcon icon={faThumbTack} /> pinned</p>}
      {props.reposted && <p className='grey mini-font post-mini-detail'><FontAwesomeIcon icon={faRetweet} />reposted</p>}
      <div className='post-flexbox'>
        <div className="profile-pic-div">
          <img className="profile-pic" src={props.profilePic} alt="" />
        </div>
        <div className="post-content">
          <h4>{props.publisher}</h4><p className='grey mini-font'>{props.handel} . {props.date}</p>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;