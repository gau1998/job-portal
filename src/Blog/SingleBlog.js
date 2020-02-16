import React, { Component } from "react";

export class SingleBlog extends Component {
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
                  <h3>single blog</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ bradcam_area  */}
        {/*================Blog Area =================*/}
        <section className="blog_area single-post-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 posts-list">
                <div className="single-post">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="img/blog/single_blog_1.png"
                      alt=""
                    />
                  </div>
                  <div className="blog_details">
                    <h2>
                      Second divided from form fish beast made every of seas all
                      gathered us saying he our
                    </h2>
                    <ul className="blog-info-link mt-3 mb-4">
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
                    <p className="excert">
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower
                    </p>
                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower to actually sit through a
                      self-imposed MCSE training. who has the willpower to
                      actually
                    </p>
                    <div className="quote-wrapper">
                      <div className="quotes">
                        MCSE boot camps have its supporters and its detractors.
                        Some people do not understand why you should have to
                        spend money on boot camp when you can get the MCSE study
                        materials yourself at a fraction of the camp price.
                        However, who has the willpower to actually sit through a
                        self-imposed MCSE training.
                      </div>
                    </div>
                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower
                    </p>
                    <p>
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower to actually sit through a
                      self-imposed MCSE training. who has the willpower to
                      actually
                    </p>
                  </div>
                </div>
                <div className="navigation-top">
                  <div className="d-sm-flex justify-content-between text-center">
                    <p className="like-info">
                      <span className="align-middle">
                        <i className="fa fa-heart" />
                      </span>{" "}
                      Lily and 4 people like this
                    </p>
                    <div className="col-sm-4 text-center my-2 my-sm-0">
                      {/* <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span> 06 Comments</p> */}
                    </div>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="navigation-area">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                        <div className="thumb">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="img/post/preview.png"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="arrow">
                          <a href="#">
                            <span className="lnr text-white ti-arrow-left" />
                          </a>
                        </div>
                        <div className="detials">
                          <p>Prev Post</p>
                          <a href="#">
                            <h4>Space The Final Frontier</h4>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                        <div className="detials">
                          <p>Next Post</p>
                          <a href="#">
                            <h4>Telescopes 101</h4>
                          </a>
                        </div>
                        <div className="arrow">
                          <a href="#">
                            <span className="lnr text-white ti-arrow-right" />
                          </a>
                        </div>
                        <div className="thumb">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="img/post/next.png"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-author">
                  <div className="media align-items-center">
                    <img src="img/blog/author.png" alt="" />
                    <div className="media-body">
                      <a href="#">
                        <h4>Harvard milan</h4>
                      </a>
                      <p>
                        Second divided from form fish beast made. Every of seas
                        all gathered use saying you're, he our dominion twon
                        Second divided from
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comments-area">
                  <h4>05 Comments</h4>
                  <div className="comment-list">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="img/comment/comment_1.png" alt="" />
                        </div>
                        <div className="desc">
                          <p className="comment">
                            Multiply sea night grass fourth day sea lesser rule
                            open subdue female fill which them Blessed, give
                            fill lesser bearing multiply sea night grass fourth
                            day sea lesser
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <a href="#">Emilly Blunt</a>
                              </h5>
                              <p className="date">
                                December 4, 2017 at 3:12 pm{" "}
                              </p>
                            </div>
                            <div className="reply-btn">
                              <a href="#" className="btn-reply text-uppercase">
                                reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="img/comment/comment_2.png" alt="" />
                        </div>
                        <div className="desc">
                          <p className="comment">
                            Multiply sea night grass fourth day sea lesser rule
                            open subdue female fill which them Blessed, give
                            fill lesser bearing multiply sea night grass fourth
                            day sea lesser
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <a href="#">Emilly Blunt</a>
                              </h5>
                              <p className="date">
                                December 4, 2017 at 3:12 pm{" "}
                              </p>
                            </div>
                            <div className="reply-btn">
                              <a href="#" className="btn-reply text-uppercase">
                                reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="img/comment/comment_3.png" alt="" />
                        </div>
                        <div className="desc">
                          <p className="comment">
                            Multiply sea night grass fourth day sea lesser rule
                            open subdue female fill which them Blessed, give
                            fill lesser bearing multiply sea night grass fourth
                            day sea lesser
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <h5>
                                <a href="#">Emilly Blunt</a>
                              </h5>
                              <p className="date">
                                December 4, 2017 at 3:12 pm{" "}
                              </p>
                            </div>
                            <div className="reply-btn">
                              <a href="#" className="btn-reply text-uppercase">
                                reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-form">
                  <h4>Leave a Reply</h4>
                  <form
                    className="form-contact comment_form"
                    action="#"
                    id="commentForm"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control w-100"
                            name="comment"
                            id="comment"
                            cols={30}
                            rows={9}
                            placeholder="Write Comment"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="website"
                            id="website"
                            type="text"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="button button-contactForm btn_1 boxed-btn"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
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
                          <p>(21)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Health Care</p>
                          <p>(21)</p>
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
        {/*================ Blog Area end =================*/}
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

export default SingleBlog;
