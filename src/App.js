import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
     
     <Work></Work>
     <Experience></Experience>
     <Skills></Skills>
     
     <Contact></Contact>
  
    </div>
  );
}

export default App;
