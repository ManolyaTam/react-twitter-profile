import './tab-list.css';

const list = ['Posts', 'Replies', 'Media', 'Likes'];
const TabList = () => {
  return (
    <div className='tab-list'>
      {
        list.map((item, index) =>
          <div className='tab' key={`profile-tab-${index}`}><p>{item}</p></div>
        )
      }
    </div>
  );
};

export default TabList;