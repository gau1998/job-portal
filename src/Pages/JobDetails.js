import React, { Component } from "react";

export class JobDetails extends Component {
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
                  <h3>Software Engineer</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ bradcam_area  */}
        <div className="job_details_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="job_details_header">
                  <div className="single_jobs white-bg d-flex justify-content-between">
                    <div className="jobs_left d-flex align-items-center">
                      <div className="thumb">
                        <img src="img/svg_icon/1.svg" alt="" />
                      </div>
                      <div className="jobs_conetent">
                        <a href="#">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="descript_wrap white-bg">
                  <div className="single_wrap">
                    <h4>Job description</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing.
                    </p>
                    <p>
                      Variations of passages of lorem Ipsum available, but the
                      majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable. If you are going to use a passage of
                      Lorem Ipsum, you need to be sure there isn't anything
                      embarrassing.
                    </p>
                  </div>
                  <div className="single_wrap">
                    <h4>Responsibility</h4>
                    <ul>
                      <li>
                        The applicants should have experience in the following
                        areas.
                      </li>
                      <li>Have sound knowledge of commercial activities.</li>
                      <li>
                        Leadership, analytical, and problem-solving abilities.
                      </li>
                      <li>
                        Should have vast knowledge in IAS/ IFRS, Company Act,
                        Income Tax, VAT.
                      </li>
                    </ul>
                  </div>
                  <div className="single_wrap">
                    <h4>Qualifications</h4>
                    <ul>
                      <li>
                        The applicants should have experience in the following
                        areas.
                      </li>
                      <li>Have sound knowledge of commercial activities.</li>
                      <li>
                        Leadership, analytical, and problem-solving abilities.
                      </li>
                      <li>
                        Should have vast knowledge in IAS/ IFRS, Company Act,
                        Income Tax, VAT.
                      </li>
                    </ul>
                  </div>
                  <div className="single_wrap">
                    <h4>Benefits</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing.
                    </p>
                  </div>
                </div>
                <div className="apply_job_form white-bg">
                  <h4>Apply for the job</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input_field">
                          <input type="text" placeholder="Your name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input_field">
                          <input type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input_field">
                          <input
                            type="text"
                            placeholder="Website/Portfolio link"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <button type="button" id="inputGroupFileAddon03">
                              <i
                                className="fa fa-cloud-upload"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile03"
                              aria-describedby="inputGroupFileAddon03"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile03"
                            >
                              Upload CV
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input_field">
                          <textarea
                            name="#"
                            id
                            cols={30}
                            rows={10}
                            placeholder="Coverletter"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="submit_btn">
                          <button className="boxed-btn3 w-100" type="submit">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="job_sumary">
                  <div className="summery_header">
                    <h3>Job Summery</h3>
                  </div>
                  <div className="job_content">
                    <ul>
                      <li>
                        Published on: <span>12 Nov, 2019</span>
                      </li>
                      <li>
                        Vacancy: <span>2 Position</span>
                      </li>
                      <li>
                        Salary: <span>50k - 120k/y</span>
                      </li>
                      <li>
                        Location: <span>California, USA</span>
                      </li>
                      <li>
                        Job Nature: <span> Full-time</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="share_wrap d-flex">
                  <span>Share at:</span>
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fa fa-facebook" />
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fa fa-google-plus" />
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fa fa-twitter" />
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fa fa-envelope" />
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="job_location_wrap">
                  <div className="job_lok_inner">
                    <div id="map" style={{ height: "200px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default JobDetails;
