import React from "react";
import PropTypes from 'prop-types'
export default function Navbar(props) {
  const switchMode=(paletteColor2)=>{
      document.body.style.backgroundColor=paletteColor2;
      document.getElementById('exampleFormControlTextarea1').style.backgroundColor=paletteColor2;
      document.getElementsByClassName('btn').style.backgroundColor=paletteColor2;
  }
    
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.name}</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              
              
            </ul>
            <ul className="colorPalletegroup">

            <li className="nav-item" >
                <button className=" colorPallete" onClick={()=>switchMode('#ef5454')}></button>
              </li>
            <li >
                <button className=" colorPallete1"  onClick={()=>switchMode('rgb(81, 81, 219)')}></button>
              </li>
            <li >
                <button className=" colorPallete2"  onClick={()=>switchMode('blueviolet')}></button>
              </li>
            <li >
                <button className="colorPallete3"  onClick={()=>switchMode('rgb(213, 42, 193)')}></button>
            </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `} >

              <input className="form-check-input " type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "title here",
  about: "About us"
}