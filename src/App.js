import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="App ">
     <Navbar></Navbar>
     <Home></Home>
     <About></About>
     <Skills></Skills>
     <Work></Work>
  
    </div>
  );
}

export default App;
