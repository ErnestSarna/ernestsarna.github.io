import './bootstrap.css';
import './App.css';
import NavBar from './NavBar.jsx';
import Intro from './Intro.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{height: '40px', background: 'linear-gradient(to bottom, #350310, #282c34)'}}></div>
      <Intro />
      <div style={{height: '40px', background: 'linear-gradient(to bottom, #282c34, #350310)'}}></div>
      <Projects />
    </div>
  );
}

export default App;
