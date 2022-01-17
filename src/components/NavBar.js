import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
    return (
        <>
        <div className="homepage">
          <nav className="navbar">
       <div className="navbar-container">
                 <h1>Spacetagram</h1>
                <h6> from nasa awesome picture of the day Api</h6>
          <h4>Can you guess the image? Lets see...</h4>
<div className="nav-image">
<Link className="nav-link" to="/main">Click Me!!!</Link>
         </div>
    </div>
          </nav> 
          </div>
       </>
    );
}
export default NavBar;