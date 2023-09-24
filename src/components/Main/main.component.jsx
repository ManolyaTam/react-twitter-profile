import './main.css';
import PageHeader from '../PageHeader/page-header.component';
import ProfileInfo from '../ProfileInfo/profile-info.component';
import Search from '../Search/search.component';
import ProfileDetails from '../ProfileDetails/profile-details.component';
import ProfileOptions from '../ProfileOptions/profile-options.component';
import TabList from '../TabList/tab-list.component';
import Gallery from '../Gallery/gallery.component';
import Post from '../Post/post.component';

const posts = [
  {
    pinned: true,
    publisher: 'React',
    publisherHandle: '@reactjs',
    date: 'Mar 16',
    content: `Today, we’re thrilled to launch react.dev, the new home for React and its documentation. It teaches modern React with function components and Hooks, and we’ve included diagrams, illustrations, challenges, and over 600 interactive examples. Check it out!`,
    profilePic: 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png'
  },
  {
    reposted: true,
    publisher: 'Josh W. Comeau',
    publisherHandle: '@JoshWComeau',
    date: 'Sep 6',
    content: `☄️ New blog post just dropped!

    It's a deep dive into the world of React Server Components. We'll explore what it is, how it works, and what some of the advantages are.
    `,
    profilePic: 'https://pbs.twimg.com/profile_images/1588928652452003840/NzvDjlrh_400x400.jpg'
  },
];

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
          />
        )
        }
      </div>
      <div className="right">
        <Search />
        <Gallery />
      </div>
    </div>
  );
};

export default Main;