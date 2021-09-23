import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Featured from "./components/Featured/featured";
import Collection from "./components/Collection/collection";
import Escapes from "./components/Escape/Escapes";
import Activities from "./components/Activities/activities";
import Store from "./components/Store/store";
import House from "./components/house/house";
import Contact from "./components/Contact/contact";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Featured />
      <Collection />
      <Escapes />
      <Activities />
      <Store />
      <House />
      <Contact/>
    </div>
  );
}

export default App;
