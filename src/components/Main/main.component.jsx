import './main.css';
import PageHeader from '../PageHeader/page-header.component';
import ProfileInfo from '../ProfileInfo/profile-info.component';

const Main = () => {
  return (
    <div class="main">
      <div className="left">
        <PageHeader title='React' postsCount='2,607' />
        <ProfileInfo 
          bgImg='https://pbs.twimg.com/profile_banners/1566463268/1470764371/1500x500'
          profileImg='https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png'
          
        />
      </div>
      <div className="right">
        <input type="search" />
      </div>
    </div>
  );
};

export default Main;