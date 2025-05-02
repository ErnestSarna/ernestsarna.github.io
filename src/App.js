import './bootstrap.css';
import './App.css';
import Footer from './Footer.jsx';
import Intro from './Intro.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
    <div className="App">
      <Intro />
      <div style={{height: '40px', background: 'linear-gradient(to bottom, #282c34, #350310)'}}></div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
