import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';


import Navbar from './Navbar';
import Card from './Card';
import List from './List';
// import Slide from './Slide';
import Slideshow from './Slide';
import Adment from './Adment';
import Office from './Office';
import Land from './Land';
import Building from './Building';
import Indusbuild from './Indusbuild';
import Indusland from './Indusland';
import Footer from './Footer';
import Footercenter from './Footercenter';
import Footerend from './Footerend';


// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Navbar></Navbar>
      <Card />
      <List />

      <Slideshow />

      <Adment />
      <Office/>
      <Land/>
      <Building/>
      <Indusbuild/>
      <Indusland/>
      <Footer/>
      <Footercenter/>
      <Footerend/>

    </div>

  );
}

export default App;
