import logo from './logo.svg';
import './App.css';
import NavBar from './organisms/navbar.tsx';
import Intro from './modules/home/components/intro/intro.tsx';
import About from './modules/home/components/about/index.tsx';
import Project from './modules/home/components/projects/index.tsx';
import Contact from './modules/home/components/contact/index.tsx';
import { useEffect } from 'react';
import Experience from './modules/home/components/experience/index.tsx';

function App() {

  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <About/>
     <Project/>
     <Experience/>
     <Contact/>
    </div>
  );
}

export default App;
