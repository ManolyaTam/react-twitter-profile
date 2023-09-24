import './main.css';
import PageHeader from '../PageHeader/page-header.component';
import ProfileInfo from '../ProfileInfo/profile-info.component';
import Search from '../Search/search.component';
import ProfileDetails from '../ProfileDetails/profile-details.component';
import ProfileOptions from '../ProfileOptions/profile-options.component';
import TabList from '../TabList/tab-list.component';
import Gallery from '../Gallery/gallery.component';
import Post from '../Post/post.component';
import Board from '../Board/board.component';
import { posts } from '../../data/posts';
import { recProfiles } from '../../data/recommended-profiles';
import MiniProfile from '../MiniProfile/mini-profile.component';
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
        {posts.map((post, index) =>
          <Post
            key={`post-${index}`}
            date={post.date}
            handel={post.publisherHandle}
            pinned={post.pinned}
            reposted={post.reposted}
            content={post.content}
            publisher={post.publisher}
            profilePic={post.profilePic}
            details={post.details}
          />
        )
        }
      </div>
      <div className="right">
        <Search />
        <Gallery />
        <Board>
          <h3 style={{ fontSize: 20, margin: 0 }}>You might like</h3>
          {recProfiles.map((profile, index) =>
            <MiniProfile
              key={`mini-profile-recommended-${index}`}
              img={profile.img}
              handel={profile.handel}
              title={profile.title}
            />)}
        </Board>
      </div>
    </div>
  );
};

export default Main;