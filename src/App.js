import './css/App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Experience } from './components/Experience';
import { FeaturedProject } from './components/FeaturedProject';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <FeaturedProject />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
