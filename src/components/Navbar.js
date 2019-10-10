import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import sr from "./ScrollReveal";

export default class Navbar extends Component {
  componentDidMount = () => {
    const config = {
      origin: "left",
      duration: 1000,
      distance: "200px",
      easing: "ease"
    };
    sr.reveal(this.refs.box1, config);
  };

  render() {
    return (
      <header id="header">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="#top-navbar"
        >
          <Link to="/#html">
            <a
              href=""
              className="navbar-brand logo-font text-canter mx-auto"
              style={{ "font-size": "3rem" }}
              ref="box"
            >
              Julia Falkovich
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-lg-flex justify-content-center"
            id="myNavbar"
          >
            <ul
              className="navbar-nav text-center"
              style={{ "font-size": "1.2em" }}
            >
              {/* Links */}

              <li className="nav-item">
                <Link
                  to="/contacts#contacts"
                  style={{ textDecoration: "none" }}
                >
                  <a href="" className="nav-link">
                    כתובת ותקשורת
                  </a>
                </Link>
              </li>

              <Link to="/#gallery-form" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    גלריה
                  </a>
                </li>
              </Link>

              <Link to="/makeup#html" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    איפור
                  </a>
                </li>
              </Link>
              <Link to="/men#html" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    גברים
                  </a>
                </li>
              </Link>
              <Link to="/women#html" style={{ textDecoration: "none" }}>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    נשים
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          {/* Phone and Icon */}
          <div className="d-none d-lg-flex align-items-center">
            <span className="text-white mx-4" style={{ "font-size": "1.5rem" }}>
              <span className="phone-icon m-0 mx-3">
                <i className="fas fa fa-phone fa-fw"></i>
              </span>
              0559-888-336
            </span>
            <span className="text-white" style={{ "font-size": "2.5rem" }}>
              <a href={"//www.facebook.com/JuliaFalkovichBS"} target="_blank">
                <img src="../img/fb.png" className="face-book"></img>
              </a>
            </span>
          </div>
        </nav>
      </header>
    );
  }
}
