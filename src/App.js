import './App.css';
import Main from './components/Main/main.component';
import Sidebar from './components/Sidebar/sidebar.component';
function App() {
  return (
    <div className="App">
      <nav>
        <Sidebar />
      </nav>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
