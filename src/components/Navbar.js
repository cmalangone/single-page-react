import React, {Component} from 'react'
import {HashLink} from 'react-router-hash-link'

class Navbar extends Component {
  render () {
     return(
       <>
       <nav className="light-blue darken-4">
            <div className="container">
            <div className="nav-wrapper">
              <HashLink to="/" className="brand-logo">NAVBAR</HashLink>
            </div>
            </div>
       </nav>
       </>
     );
   }
}

export default Navbar;
