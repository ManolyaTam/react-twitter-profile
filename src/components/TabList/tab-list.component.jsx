import './tab-list.css';

const list = ['Posts', 'Replies', 'Media', 'Likes'];
const TabList = () => {
  return (
    <div className='tab-list'>
      {
        list.map(item =>
          <div className='tab'><p>{item}</p></div>
        )
      }
    </div>
  );
};

export default TabList;