import './main.css';
import PageHeader from '../PageHeader/page-header.component';

const Main = () => {
  return (
    <div class="main">
      <div className="left">
        <PageHeader title='React' postsCount='2,607' />
      </div>
      <div className="right">
        <input type="search" />
      </div>
    </div>
  );
};

export default Main;