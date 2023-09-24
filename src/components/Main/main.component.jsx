import './main.css';
import PageHeader from '../PageHeader/page-header.component';
import ProfileInfo from '../ProfileInfo/profile-info.component';
import Search from '../Search/search.component';
import ProfileDetails from '../ProfileDetails/profile-details.component';
import ProfileOptions from '../ProfileOptions/profile-options.component';
import TabList from '../TabList/tab-list.component';
import Gallery from '../Gallery/gallery.component';

const Main = () => {
  return (
    <div className="main">
      <div className="left">
        <PageHeader title='React' postsCount='2,607' />
        <ProfileInfo
          bgImg='https://pbs.twimg.com/profile_banners/1566463268/1470764371/1500x500'
          profileImg='https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png'
        />
        <ProfileOptions />
        <ProfileDetails />
        <TabList />
      </div>
      <div className="right">
        <Search />
        <Gallery />
      </div>
    </div>
  );
};

export default Main;