import React from "react";


import Header from "./components/Header";
import SoccerList from './components/soccerList';
import "./App.css";

import Video from "./components/video";
import { Route } from "react-router-dom";



function App() {
  return (
  
      <div className="App">
      <Header />
      
      
      <Route exact path="/" component={SoccerList} />
    
     <Route exact path="/video" component={Video} />
      </div>

     
 
  );
}

export default App;
