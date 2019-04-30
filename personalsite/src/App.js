import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'


function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/" exact component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
