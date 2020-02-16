import React, { Component } from 'react';
import{Link}from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <header>
          <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
              <div className="container-fluid ">
                <div className="header_bottom_border">
                  <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-2">
                      <div className="logo">
                        <Link to="index.html">
                          <img src="img/logo.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                      <div className="main-menu  d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <Link to="/">home</Link>
                            </li>
                            <li>
                              <Link to="/Browsejob">Browsejob</Link>
                            </li>
                            <li>
                              <Link to="#">
                                pages <i className="ti-angle-down" />
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link to="/Candidates">Candidates </Link>
                                </li>
                                <li>
                                  <Link to="/JobDetails">jobDetails </Link>
                                </li>
                                <li>
                                  <Link to="/Elements">Elements</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="#">
                                blog <i className="ti-angle-down" />
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link to="/Blog">Blog</Link>
                                </li>
                                <li>
                                  <Link to="/Single-blog">Singleblog</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="//Contact">Contact</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                      <div className="Appointment">
                        <div className="phone_num d-none d-xl-block">
                          <Link to="#">Log in</Link>
                        </div>
                        <div className="d-none d-lg-block">
                          <Link className="boxed-btn3" to="#">
                            Post a Job
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
            </div>
        )
    }
}

export default Navbar
