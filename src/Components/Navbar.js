
import React from 'react'  // rfc
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
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ToggleMode}/>
              <label className={`form-check-label mx-1 text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
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