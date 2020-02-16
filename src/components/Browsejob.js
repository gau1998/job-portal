import React, { Component } from "react";

export default class Browsejob extends Component {
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
                  <h3>4536+ Jobs Available</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ bradcam_area  */}
        {/* job_listing_area_start  */}
        <div className="job_listing_area plus_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="job_filter white-bg">
                  <div className="form_inner white-bg">
                    <h3>Filter</h3>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="single_field">
                            <input type="text" placeholder="Search keyword" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single_field">
                            <select className="wide">
                              <option data-display="Location">Location</option>
                              <option value={1}>Rangpur</option>
                              <option value={2}>Dhaka </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single_field">
                            <select className="wide">
                              <option data-display="Category">Category</option>
                              <option value={1}>Category 1</option>
                              <option value={2}>Category 2 </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single_field">
                            <select className="wide">
                              <option data-display="Experience">
                                Experience
                              </option>
                              <option value={1}>Experience 1</option>
                              <option value={2}>Experience 2 </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single_field">
                            <select className="wide">
                              <option data-display="Job type">Job type</option>
                              <option value={1}>full time 1</option>
                              <option value={2}>part time 2 </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single_field">
                            <select className="wide">
                              <option data-display="Qualification">
                                Qualification
                              </option>
                              <option value={1}>Qualification 1</option>
                              <option value={2}>Qualification 2</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single_field">
                            <select className="wide">
                              <option data-display="Gender">Gender</option>
                              <option value={1}>male</option>
                              <option value={2}>female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="range_wrap">
                    <label htmlFor="amount">Price range:</label>
                    <div id="slider-range" />
                    <p>
                      <input
                        type="text"
                        id="amount"
                        readOnly
                        style={{
                          border: 0,
                          color: "#7A838B",
                          fontSize: "14px",
                          fontWeight: 400
                        }}
                      />
                    </p>
                  </div>
                  <div className="reset_btn">
                    <button className="boxed-btn3 w-100" type="submit">
                      Reset
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="recent_joblist_wrap">
                  <div className="recent_joblist white-bg ">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h4>Job Listing</h4>
                      </div>
                      <div className="col-md-6">
                        <div className="serch_cat d-flex justify-content-end">
                          <select>
                            <option data-display="Most Recent">
                              Most Recent
                            </option>
                            <option value={1}>Marketer</option>
                            <option value={2}>Wordpress </option>
                            <option value={4}>Designer</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job_lists m-0">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="single_jobs white-bg d-flex justify-content-between">
                        <div className="jobs_left d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/svg_icon/1.svg" alt="" />
                          </div>
                          <div className="jobs_conetent">
                            <a href="job_details.html">
                              <h4>Software Engineer</h4>
                            </a>
                            <div className="links_locat d-flex align-items-center">
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-map-marker" /> California,
                                  USA
                                </p>
                              </div>
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-clock-o" /> Part-time
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobs_right">
                          <div className="apply_now">
                            <a className="heart_mark" href="#">
                              {" "}
                              <i className="fa fa-heart" />{" "}
                            </a>
                            <a href="job_details.html" className="boxed-btn3">
                              Apply Now
                            </a>
                          </div>
                          <div className="date">
                            <p>Date line: 31 Jan 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single_jobs white-bg d-flex justify-content-between">
                        <div className="jobs_left d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/svg_icon/2.svg" alt="" />
                          </div>
                          <div className="jobs_conetent">
                            <a href="job_details.html">
                              <h4>Digital Marketer</h4>
                            </a>
                            <div className="links_locat d-flex align-items-center">
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-map-marker" /> California,
                                  USA
                                </p>
                              </div>
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-clock-o" /> Part-time
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobs_right">
                          <div className="apply_now">
                            <a className="heart_mark" href="#">
                              {" "}
                              <i className="fa fa-heart" />{" "}
                            </a>
                            <a href="job_details.html" className="boxed-btn3">
                              Apply Now
                            </a>
                          </div>
                          <div className="date">
                            <p>Date line: 31 Jan 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single_jobs white-bg d-flex justify-content-between">
                        <div className="jobs_left d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/svg_icon/3.svg" alt="" />
                          </div>
                          <div className="jobs_conetent">
                            <a href="job_details.html">
                              <h4>Wordpress Developer</h4>
                            </a>
                            <div className="links_locat d-flex align-items-center">
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-map-marker" /> California,
                                  USA
                                </p>
                              </div>
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-clock-o" /> Part-time
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobs_right">
                          <div className="apply_now">
                            <a className="heart_mark" href="#">
                              {" "}
                              <i className="fa fa-heart" />{" "}
                            </a>
                            <a href="job_details.html" className="boxed-btn3">
                              Apply Now
                            </a>
                          </div>
                          <div className="date">
                            <p>Date line: 31 Jan 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single_jobs white-bg d-flex justify-content-between">
                        <div className="jobs_left d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/svg_icon/4.svg" alt="" />
                          </div>
                          <div className="jobs_conetent">
                            <a href="job_details.html">
                              <h4>Visual Designer</h4>
                            </a>
                            <div className="links_locat d-flex align-items-center">
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-map-marker" /> California,
                                  USA
                                </p>
                              </div>
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-clock-o" /> Part-time
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobs_right">
                          <div className="apply_now">
                            <a className="heart_mark" href="#">
                              {" "}
                              <i className="fa fa-heart" />{" "}
                            </a>
                            <a href="job_details.html" className="boxed-btn3">
                              Apply Now
                            </a>
                          </div>
                          <div className="date">
                            <p>Date line: 31 Jan 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single_jobs white-bg d-flex justify-content-between">
                        <div className="jobs_left d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/svg_icon/5.svg" alt="" />
                          </div>
                          <div className="jobs_conetent">
                            <a href="job_details.html">
                              <h4>Software Engineer</h4>
                            </a>
                            <div className="links_locat d-flex align-items-center">
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-map-marker" /> California,
                                  USA
                                </p>
                              </div>
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-clock-o" /> Part-time
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobs_right">
                          <div className="apply_now">
                            <a className="heart_mark" href="#">
                              {" "}
                              <i className="fa fa-heart" />{" "}
                            </a>
                            <a href="job_details.html" className="boxed-btn3">
                              Apply Now
                            </a>
                          </div>
                          <div className="date">
                            <p>Date line: 31 Jan 2020</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="single_jobs white-bg d-flex justify-content-between">
                        <div className="jobs_left d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/svg_icon/1.svg" alt="" />
                          </div>
                          <div className="jobs_conetent">
                            <a href="job_details.html">
                              <h4>Creative Designer</h4>
                            </a>
                            <div className="links_locat d-flex align-items-center">
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-map-marker" /> California,
                                  USA
                                </p>
                              </div>
                              <div className="location">
                                <p>
                                  {" "}
                                  <i className="fa fa-clock-o" /> Part-time
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="jobs_right">
                          <div className="apply_now">
                            <a className="heart_mark" href="#">
                              {" "}
                              <i className="fa fa-heart" />{" "}
                            </a>
                            <a href="job_details.html" className="boxed-btn3">
                              Apply Now
                            </a>
                          </div>
                          <div className="date">
                            <p>Date line: 31 Jan 2020</p>
                          </div>
                        </div>
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
            </div>
          </div>
        </div>
        {/* job_listing_area_end  */}
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
