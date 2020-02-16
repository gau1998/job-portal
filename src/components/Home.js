import React, { Component } from "react";

export class Home extends Component {
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
                              <a href="/">home</a>
                            </li>
                            <li>
                              <a href="/Browsejobs">BrowseJob</a>
                            </li>
                            <li>
                              <a href="#">
                                pages <i className="ti-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="/candidate">Candidates </a>
                                </li>
                                <li>
                                  <a href="/jobdetails">jobdetails </a>
                                </li>
                                <li>
                                  <a href="/elements">elements</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">
                                blog <i className="ti-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="/blog">blog</a>
                                </li>
                                <li>
                                  <a href="/singleblog">singleblog</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/contact">Contact</a>
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

        <div className="slider_area">
          <div className="single_slider  d-flex align-items-center slider_bg_1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                  <div className="slider_text">
                    <h5
                      className="wow fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      4536+ Jobs listed
                    </h5>
                    <h3
                      className="wow fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      Find your Dream Job
                    </h3>
                    <p
                      className="wow fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".4s"
                    >
                      We provide online instant cash loans with quick approval
                      that suit your term length
                    </p>
                    <div
                      className="sldier_btn wow fadeInLeft"
                      data-wow-duration="1s"
                      data-wow-delay=".5s"
                    >
                      <a href="#" className="boxed-btn3">
                        Upload your Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ilstration_img wow fadeInRight d-none d-lg-block text-right"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <img src="img/banner/illustration.png" alt="" />
          </div>
        </div>

        <div className="catagory_area">
          <div className="container">
            <div className="row cat_search">
              <div className="col-lg-3 col-md-4">
                <div className="single_input">
                  <input type="text" placeholder="Search keyword" />
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="single_input">
                  <select className="wide">
                    <option data-display="Location">Location</option>
                    <option value={1}>Dhaka</option>
                    <option value={2}>Rangpur</option>
                    <option value={4}>Sylet</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="single_input">
                  <select className="wide">
                    <option data-display="Category">Category</option>
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                    <option value={4}>Category 3</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="job_btn">
                  <a href="#" className="boxed-btn3">
                    Find Job
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="popular_search d-flex align-items-center">
                  <span>Popular Search:</span>
                  <ul>
                    <li>
                      <a href="#">Design &amp; Creative</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Administration</a>
                    </li>
                    <li>
                      <a href="#">Teaching &amp; Education</a>
                    </li>
                    <li>
                      <a href="#">Engineering</a>
                    </li>
                    <li>
                      <a href="#">Software &amp; Web</a>
                    </li>
                    <li>
                      <a href="#">Telemarketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="popular_catagory_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title mb-40">
                  <h3>Popolar Categories</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_catagory">
                  <a href="jobs.html">
                    <h4>Design &amp; Creative</h4>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_catagory">
                  <a href="jobs.html">
                    <h4>Marketing</h4>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_catagory">
                  <a href="jobs.html">
                    <h4>Telemarketing</h4>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_catagory">
                  <a href="jobs.html">
                    <h4>Software &amp; Web</h4>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_catagory">
                  <a href="jobs.html">
                    <h4>Administration</h4>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_catagory">
                  <a href="jobs.html">
                    <h4>Teaching &amp; Education</h4>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_catagory">
                  <a href="jobs.html">
                    <h4>Engineering</h4>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_catagory">
                  <a href="jobs.html">
                    <h4>Garments / Textile</h4>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="job_listing_area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section_title">
                  <h3>Job Listing</h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="brouse_job text-right">
                  <a href="jobs.html" className="boxed-btn4">
                    Browse More Job
                  </a>
                </div>
              </div>
            </div>
            <div className="job_lists">
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
                              <i className="fa fa-map-marker" /> California, USA
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
                          <i className="ti-heart" />{" "}
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
                              <i className="fa fa-map-marker" /> California, USA
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
                          <i className="ti-heart" />{" "}
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
                              <i className="fa fa-map-marker" /> California, USA
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
                          <i className="ti-heart" />{" "}
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
                              <i className="fa fa-map-marker" /> California, USA
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
                          <i className="ti-heart" />{" "}
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
                              <i className="fa fa-map-marker" /> California, USA
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
                          <i className="ti-heart" />{" "}
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
                              <i className="fa fa-map-marker" /> California, USA
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
                          <i className="ti-heart" />{" "}
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
            </div>
          </div>
        </div>

        <div className="featured_candidates_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title text-center mb-40">
                  <h3>Featured Candidates</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="candidate_active owl-carousel">
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/1.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/2.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/3.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/4.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/5.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/6.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/7.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/8.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/9.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/9.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/10.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
                  <div className="single_candidates text-center">
                    <div className="thumb">
                      <img src="img/candiateds/3.png" alt="" />
                    </div>
                    <a href="#">
                      <h4>Markary Jondon</h4>
                    </a>
                    <p>Software Engineer</p>
                  </div>
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
            </div>
          </div>
        </div>

        <div className="top_companies_area">
          <div className="container">
            <div className="row align-items-center mb-40">
              <div className="col-lg-6 col-md-6">
                <div className="section_title">
                  <h3>Top Companies</h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="brouse_job text-right">
                  <a href="jobs.html" className="boxed-btn4">
                    Browse More Job
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_company">
                  <div className="thumb">
                    <img src="img/svg_icon/5.svg" alt="" />
                  </div>
                  <a href="jobs.html">
                    <h3>Snack Studio</h3>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_company">
                  <div className="thumb">
                    <img src="img/svg_icon/4.svg" alt="" />
                  </div>
                  <a href="jobs.html">
                    <h3>Snack Studio</h3>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_company">
                  <div className="thumb">
                    <img src="img/svg_icon/3.svg" alt="" />
                  </div>
                  <a href="jobs.html">
                    <h3>Snack Studio</h3>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-xl-3 col-md-6">
                <div className="single_company">
                  <div className="thumb">
                    <img src="img/svg_icon/1.svg" alt="" />
                  </div>
                  <a href="jobs.html">
                    <h3>Snack Studio</h3>
                  </a>
                  <p>
                    {" "}
                    <span>50</span> Available position
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="job_searcing_wrap overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="searching_text">
                  <h3>Looking for a Job?</h3>
                  <p>
                    We provide online instant cash loans with quick approval{" "}
                  </p>
                  <a href="#" className="boxed-btn3">
                    Browse Job
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="searching_text">
                  <h3>Looking for a Expert?</h3>
                  <p>
                    We provide online instant cash loans with quick approval{" "}
                  </p>
                  <a href="#" className="boxed-btn3">
                    Post a Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial_area  ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title text-center mb-40">
                  <h3>Testimonial</h3>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="testmonial_active owl-carousel">
                  <div className="single_carousel">
                    <div className="row">
                      <div className="col-lg-11">
                        <div className="single_testmonial d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/testmonial/author.png" alt="" />
                            <div className="quote_icon">
                              <i className="Flaticon flaticon-quote" />
                            </div>
                          </div>
                          <div className="info">
                            <p>
                              "Working in conjunction with humanitarian aid
                              agencies, we have supported programmes to help
                              alleviate human suffering through animal welfare
                              when people might depend on livestock as their
                              only source of income or food.
                            </p>
                            <span>- Micky Mouse</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_carousel">
                    <div className="row">
                      <div className="col-lg-11">
                        <div className="single_testmonial d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/testmonial/author.png" alt="" />
                            <div className="quote_icon">
                              <i className=" Flaticon flaticon-quote" />
                            </div>
                          </div>
                          <div className="info">
                            <p>
                              "Working in conjunction with humanitarian aid
                              agencies, we have supported programmes to help
                              alleviate human suffering through animal welfare
                              when people might depend on livestock as their
                              only source of income or food.
                            </p>
                            <span>- Micky Mouse</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_carousel">
                    <div className="row">
                      <div className="col-lg-11">
                        <div className="single_testmonial d-flex align-items-center">
                          <div className="thumb">
                            <img src="img/testmonial/author.png" alt="" />
                            <div className="quote_icon">
                              <i className="Flaticon flaticon-quote" />
                            </div>
                          </div>
                          <div className="info">
                            <p>
                              "Working in conjunction with humanitarian aid
                              agencies, we have supported programmes to help
                              alleviate human suffering through animal welfare
                              when people might depend on livestock as their
                              only source of income or food.
                            </p>
                            <span>- Micky Mouse</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default Home;
