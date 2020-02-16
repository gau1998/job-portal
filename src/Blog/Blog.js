import React, { Component } from "react";

export class Blog extends Component {
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
                  <h3>blog</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ bradcam_area  */}
        {/*================Blog Area =================*/}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src="img/blog/single_blog_1.png"
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="single-blog.html">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="#">
                            <i className="fa fa-user" /> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-comments" /> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src="img/blog/single_blog_2.png"
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="single-blog.html">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="#">
                            <i className="fa fa-user" /> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-comments" /> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src="img/blog/single_blog_3.png"
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="single-blog.html">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="#">
                            <i className="fa fa-user" /> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-comments" /> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src="img/blog/single_blog_4.png"
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="single-blog.html">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="#">
                            <i className="fa fa-user" /> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-comments" /> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <article className="blog_item">
                    <div className="blog_item_img">
                      <img
                        className="card-img rounded-0"
                        src="img/blog/single_blog_5.png"
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        <h3>15</h3>
                        <p>Jan</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <a className="d-inline-block" href="single-blog.html">
                        <h2>Google inks pact for new 35-storey office</h2>
                      </a>
                      <p>
                        That dominion stars lights dominion divide years for
                        fourth have don't stars is that he earth it first
                        without heaven in place seed it second morning saying.
                      </p>
                      <ul className="blog-info-link">
                        <li>
                          <a href="#">
                            <i className="fa fa-user" /> Travel, Lifestyle
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-comments" /> 03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                      <li className="page-item">
                        <a href="#" className="page-link" aria-label="Previous">
                          <i className="ti-angle-left" />
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link" aria-label="Next">
                          <i className="ti-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Keyword"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Search Keyword'"
                          />
                          <div className="input-group-append">
                            <button className="btn" type="button">
                              <i className="ti-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Category</h4>
                    <ul className="list cat-list">
                      <li>
                        <a href="#" className="d-flex">
                          <p>Resaurant food</p>
                          <p>(37)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Travel news</p>
                          <p>(10)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Modern technology</p>
                          <p>(03)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Product</p>
                          <p>(11)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Inspiration</p>
                          <p>21</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Health Care (21)</p>
                          <p>09</p>
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    <div className="media post_item">
                      <img src="img/post/post_1.png" alt="post" />
                      <div className="media-body">
                        <a href="single-blog.html">
                          <h3>From life was you fish...</h3>
                        </a>
                        <p>January 12, 2019</p>
                      </div>
                    </div>
                    <div className="media post_item">
                      <img src="img/post/post_2.png" alt="post" />
                      <div className="media-body">
                        <a href="single-blog.html">
                          <h3>The Amazing Hubble</h3>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className="media post_item">
                      <img src="img/post/post_3.png" alt="post" />
                      <div className="media-body">
                        <a href="single-blog.html">
                          <h3>Astronomy Or Astrology</h3>
                        </a>
                        <p>03 Hours ago</p>
                      </div>
                    </div>
                    <div className="media post_item">
                      <img src="img/post/post_4.png" alt="post" />
                      <div className="media-body">
                        <a href="single-blog.html">
                          <h3>Asteroids telescope</h3>
                        </a>
                        <p>01 Hours ago</p>
                      </div>
                    </div>
                  </aside>
                  <aside className="single_sidebar_widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                      <li>
                        <a href="#">project</a>
                      </li>
                      <li>
                        <a href="#">love</a>
                      </li>
                      <li>
                        <a href="#">technology</a>
                      </li>
                      <li>
                        <a href="#">travel</a>
                      </li>
                      <li>
                        <a href="#">restaurant</a>
                      </li>
                      <li>
                        <a href="#">life style</a>
                      </li>
                      <li>
                        <a href="#">design</a>
                      </li>
                      <li>
                        <a href="#">illustration</a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget instagram_feeds">
                    <h4 className="widget_title">Instagram Feeds</h4>
                    <ul className="instagram_row flex-wrap">
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="img/post/post_5.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="img/post/post_6.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="img/post/post_7.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="img/post/post_8.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="img/post/post_9.png"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="img/post/post_10.png"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>
                    <form action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email'"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================Blog Area =================*/}
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
        {/*/ footer end  */}
      </div>
    );
  }
}

export default Blog;
