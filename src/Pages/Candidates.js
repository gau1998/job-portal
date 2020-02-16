import React, { Component } from "react";

export class Candidates extends Component {
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
                        <a href="index.html">
                          <img src="img/logo.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                      <div className="main-menu  d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <a href="index.html">home</a>
                            </li>
                            <li>
                              <a href="jobs.html">Browse Job</a>
                            </li>
                            <li>
                              <a href="#">
                                pages <i className="ti-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="candidate.html">Candidates </a>
                                </li>
                                <li>
                                  <a href="job_details.html">job details </a>
                                </li>
                                <li>
                                  <a href="elements.html">elements</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                blog <i className="ti-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="blog.html">blog</a>
                                </li>
                                <li>
                                  <a href="single-blog.html">single-blog</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                      <div className="Appointment">
                        <div className="phone_num d-none d-xl-block">
                          <a href="#">Log in</a>
                        </div>
                        <div className="d-none d-lg-block">
                          <a className="boxed-btn3" href="#">
                            Post a Job
                          </a>
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
        {/* header-end */}
        {/* bradcam_area  */}
        <div className="bradcam_area bradcam_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bradcam_text">
                  <h3>Candidates</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ bradcam_area  */}
        {/* featured_candidates_area_start  */}
        <div className="featured_candidates_area candidate_page_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/1.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/2.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/3.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/4.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/5.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/6.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/7.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/8.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/9.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/10.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/3.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="single_candidates text-center">
                  <div className="thumb">
                    <img src="img/candiateds/4.png" alt="" />
                  </div>
                  <a href="#">
                    <h4>Markary Jondon</h4>
                  </a>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination_wrap">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="ti-angle-left" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>01</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>02</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="ti-angle-right" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* featured_candidates_area_end  */}
        {/* footer start */}
        <footer className="footer">
          <div className="footer_top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div
                    className="footer_widget wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div className="footer_logo">
                      <a href="#">
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                    <p>
                      finloan@support.com <br />
                      +10 873 672 6782 <br />
                      600/D, Green road, NewYork
                    </p>
                    <div className="socail_links">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="ti-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 col-lg-2">
                  <div
                    className="footer_widget wow fadeInUp"
                    data-wow-duration="1.1s"
                    data-wow-delay=".4s"
                  >
                    <h3 className="footer_title">Company</h3>
                    <ul>
                      <li>
                        <a href="#">About </a>
                      </li>
                      <li>
                        <a href="#"> Pricing</a>
                      </li>
                      <li>
                        <a href="#">Carrier Tips</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div
                    className="footer_widget wow fadeInUp"
                    data-wow-duration="1.2s"
                    data-wow-delay=".5s"
                  >
                    <h3 className="footer_title">Category</h3>
                    <ul>
                      <li>
                        <a href="#">Design &amp; Art</a>
                      </li>
                      <li>
                        <a href="#">Engineering</a>
                      </li>
                      <li>
                        <a href="#">Sales &amp; Marketing</a>
                      </li>
                      <li>
                        <a href="#">Finance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div
                    className="footer_widget wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay=".6s"
                  >
                    <h3 className="footer_title">Subscribe</h3>
                    <form action="#" className="newsletter_form">
                      <input type="text" placeholder="Enter your mail" />
                      <button type="submit">Subscribe</button>
                    </form>
                    <p className="newsletter_text">
                      Esteem spirit temper too say adieus who direct esteem
                      esteems luckily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="copy-right_text wow fadeInUp"
            data-wow-duration="1.4s"
            data-wow-delay=".3s"
          >
            <div className="container">
              <div className="footer_border" />
              <div className="row">
                <div className="col-xl-12">
                  <p className="copy_right text-center">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Candidates;
