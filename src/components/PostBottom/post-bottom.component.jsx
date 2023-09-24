import './post-bottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpFromBracket, faChartSimple, faRetweet } from '@fortawesome/free-solid-svg-icons';

const PostBottom = (props) => {
  console.log(props);
  return (
    <div className='post-bottom'>
      <span className='comment-btn'>
        <FontAwesomeIcon icon={faComment} />
        {props.commentCount}
      </span>
      <span
        className='retweet-btn'>
        <FontAwesomeIcon icon={faRetweet} />
        {props.retweetCount}
      </span>
      <span
        className='like-btn'>
        <FontAwesomeIcon icon={faHeart} />
        {props.likeCount}
      </span>
      <span
        className='view-btn'>
        <FontAwesomeIcon icon={faChartSimple} />
        {props.viewCount}
      </span>
      <span>
        <FontAwesomeIcon
          icon={faArrowUpFromBracket} />
      </span>
    </div>
  );
};

export default PostBottom;