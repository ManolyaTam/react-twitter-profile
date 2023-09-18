import './App.css';
import PageHeader from './components/PageHeader/page-header.component';
import Sidebar from './components/Sidebar/sidebar.component';
function App() {
  return (
    <div className="App">
      <nav>
        <Sidebar />
      </nav>
      <main>
        <PageHeader title='React' postsCount='2,607'/>
      </main>
    </div>
  );
}

export default App;
