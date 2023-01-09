import React from 'react'
import PropTypes from 'prop-types'
// import { link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#">About</a>
        </li>
         
          </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <buthrefn className="btn btn-outline-success" type="submit">Search</buthrefn>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='ldark'?'light':'dark'}`}>
  <input className="form-check-input" onClick={props.hrefgglemode} type="checkbox" role="switch" aria-checked="true" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    abouttext:PropTypes.string.isRequired
}

Navbar.defaultProps={
      title : 'Set here',
      abouttext: 'Contact'
};