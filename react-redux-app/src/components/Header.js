import React from "react";
import { Link } from 'react-router-dom';



function Header() {
  

  return (
    <div>
      <div className="main-nav">
            <h1>
          
              <i className="fas fa-futbol">World Soccer Video API</i> 
            
            </h1>
              <div className = 'nav'>
                <Link to = '/' className ='nav' >Home</Link>
                <Link to ='/video'className ='nav'>Video</Link>
                
              </div>
              
          </div>


    </div>
   
  );
}

export default Header;