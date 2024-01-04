import Footer from './componentes/section/Footer';
import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentation from './componentes/section/Presentation';
import Skills from './componentes/section/Skiils';
import Projects from './componentes/section/Projects';

function App() {
  return (
    <div>
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
