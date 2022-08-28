import 'bootstrap3/dist/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import About from './components/About';
import Header from './components/Header';
import Project from './components/Project';
import Process from './components/Process';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Customer from './components/Customer';

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Project/>
      <Process />
      <Skill/>
      <Experience/>
      <Customer/>
      <Contact/>
    </>
  );
}

export default App;
