import './bootstrap.css';
import './App.css';
import Footer from './Footer.jsx';
import Intro from './Intro.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
    <div className="App">
      <Intro />
      <div style={{height: '40px', background: 'linear-gradient(to bottom, #2E2E2E, #4B0012)'}}></div>
      <Projects />
      <div style={{height: '40px', background: 'linear-gradient(to bottom, #4B0012, #350310)'}}></div>
      <Footer />
    </div>
  );
}

export default App;
