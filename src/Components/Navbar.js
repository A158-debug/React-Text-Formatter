//react function based component I need  to write

import React from 'react'  // rfc
import {Link} from 'react-router-dom' 
import PropTypes from 'prop-types'  //impt proptypes


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Setting</Link>
              </li>
            
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ToggleMode}/>
              <label className={`form-check-label mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'}`} type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

//function name.proptypes
Navbar.prototype = {
  title: PropTypes.string,
  // title: PropTypes.string.isRequired,
  about: PropTypes.string
};

//set default value
Navbar.defaultProps = {
  title: "Title Name",
  about: "about page"

};