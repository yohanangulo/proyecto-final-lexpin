'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useScripts } from '@/hooks/useScripts'

export default function Bolg() {
  useScripts()
  return (
    <>
      <Header />
      <main className="content-wrapper oh">
        <section className="section-wrap blog-standard pb-50">
          <div className="container relative">
            <div className="row">
              {/* content */}
              <div className="col-md-9 post-content mb-50">
                {/* standard post */}
                <article className="entry-item">
                  <div className="entry-img">
                    <a href="blog-single.html">
                      <img src="img/blog/post_img_1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="entry-wrap">
                    <div className="entry">
                      <h2 className="entry-title">
                        <a href="blog-single.html">Hot trends of this year.</a>
                      </h2>
                      <ul className="entry-meta">
                        <li className="entry-date">19 July, 2015</li>
                        <li className="entry-category">
                          <a href="#">Fashion</a>
                        </li>
                        <li className="entry-author">
                          <a href="#">Admin</a>
                        </li>
                        <li className="entry-comments">
                          <a href="blog-single.html">15 Comments</a>
                        </li>
                      </ul>
                      <div className="entry-content">
                        <p>
                          Class aptent taciti sociosqu ad litora torquent per
                          conubia nostra, per inceptos. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Amadea is a simple
                          and elegant template with tons of features. Lorem
                          ipsum dolor sit amet, consectetur.
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-md btn-light"
                        >
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>{' '}
                {/* end standard post */}
                {/* gallery post */}
                <article className="entry-item">
                  <div className="entry-slider">
                    <div className="flexslider" id="flexslider">
                      <ul className="slides clearfix">
                        <li>
                          <a href="#">
                            <img src="img/blog/gallery_post_img_1.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/blog/gallery_post_img_2.jpg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="img/blog/gallery_post_img_3.jpg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>{' '}
                  {/* end slider */}
                  <div className="entry-wrap">
                    <div className="entry">
                      <h2 className="entry-title">
                        <a href="blog-single.html">latest summer collection</a>
                      </h2>
                      <ul className="entry-meta">
                        <li className="entry-date">19 July, 2015</li>
                        <li className="entry-category">
                          <a href="#">Fashion</a>
                        </li>
                        <li className="entry-author">
                          <a href="#">Admin</a>
                        </li>
                        <li className="entry-comments">
                          <a href="blog-single.html">15 Comments</a>
                        </li>
                      </ul>
                      <div className="entry-content">
                        <p>
                          Class aptent taciti sociosqu ad litora torquent per
                          conubia nostra, per inceptos. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Amadea is a simple
                          and elegant template with tons of features. Lorem
                          ipsum dolor sit amet, consectetur.
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-md btn-light"
                        >
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>{' '}
                {/* end gallery post */}
                {/* video post */}
                <article className="entry-item">
                  <div className="entry-video video-wrap">
                    <iframe
                      width={640}
                      height={360}
                      src="https://player.vimeo.com/video/90840341?badge=0"
                      allowFullScreen=""
                    />
                  </div>
                  <div className="entry-wrap">
                    <div className="entry">
                      <h2 className="entry-title">
                        <a href="blog-single.html">
                          clean &amp; professional theme
                        </a>
                      </h2>
                      <ul className="entry-meta">
                        <li className="entry-date">19 July, 2015</li>
                        <li className="entry-category">
                          <a href="#">Fashion</a>
                        </li>
                        <li className="entry-author">
                          <a href="#">Admin</a>
                        </li>
                        <li className="entry-comments">
                          <a href="blog-single.html">15 Comments</a>
                        </li>
                      </ul>
                      <div className="entry-content">
                        <p>
                          Class aptent taciti sociosqu ad litora torquent per
                          conubia nostra, per inceptos. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Amadea is a simple
                          and elegant template with tons of features. Lorem
                          ipsum dolor sit amet, consectetur.
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-md btn-light"
                        >
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>{' '}
                {/* end video post */}
                {/* blockquote post */}

                {/* end blockquote post */}
                {/* text only post */}
                <article className="entry-item">
                  <div className="entry-wrap pt-0">
                    <div className="entry">
                      <h2 className="entry-title">
                        <a href="blog-single.html">
                          Text blog post. Adventurous man using bicycle
                        </a>
                      </h2>
                      <ul className="entry-meta">
                        <li className="entry-date">19 July, 2015</li>
                        <li className="entry-category">
                          <a href="#">Fashion</a>
                        </li>
                        <li className="entry-author">
                          <a href="#">Admin</a>
                        </li>
                        <li className="entry-comments">
                          <a href="blog-single.html">15 Comments</a>
                        </li>
                      </ul>
                      <div className="entry-content">
                        <p>
                          Class aptent taciti sociosqu ad litora torquent per
                          conubia nostra, per inceptos. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Amadea is a simple
                          and elegant template with tons of features. Lorem
                          ipsum dolor sit amet, consectetur.
                        </p>
                        <a
                          href="blog-single.html"
                          className="btn btn-md btn-light"
                        >
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>{' '}
                {/* end text only post */}

              </div>{' '}
              {/* end col */}
              {/* Sidebar */}
              <aside className="col-md-3 sidebar">
                {/* Search */}
                <div className="widget search">
                  <form className="relative">
                    <input
                      type="search"
                      className="searchbox mb-0"
                      placeholder="Search"
                    />
                    <button type="submit" className="search-button">
                      <i className="icon icon_search" />
                    </button>
                  </form>
                </div>
                {/* Categories */}
                <div className="widget categories">
                  <h3 className="widget-title heading uppercase">Categories</h3>
                  <ul className="list-no-dividers">
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li className="active-cat">
                      <a href="#">Science</a>
                    </li>
                    <li>
                      <a href="#">Sport</a>
                    </li>
                    <li>
                      <a href="#">Politics</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                  </ul>
                </div>
                {/* Recent Posts */}
                <div className="widget recent-posts">
                  <h3 className="widget-title heading uppercase">
                    Recent Posts
                  </h3>
                  <div className="entry-list w-thumbs">
                    <ul className="posts-list">
                      <li className="entry-li">
                        <article className="post-small clearfix">
                          <div className="entry-img">
                            <a href="blog-single.html">
                              <img src="img/blog/post_thumb_1.jpg" alt="" />
                            </a>
                          </div>
                          <div className="entry">
                            <h3 className="entry-title">
                              <a href="magazine-single-article.html">
                                6 Ways to Be More Productive
                              </a>
                            </h3>
                            <ul className="entry-meta list-inline">
                              <li className="entry-date">19 Mar, 2016</li>
                            </ul>
                          </div>
                        </article>
                      </li>
                      <li className="entry-li">
                        <article className="post-small clearfix">
                          <div className="entry-img">
                            <a href="blog-single.html">
                              <img src="img/blog/post_thumb_2.jpg" alt="" />
                            </a>
                          </div>
                          <div className="entry">
                            <h3 className="entry-title">
                              <a href="magazine-single-article.html">
                                3 Tips to Align Your Startup
                              </a>
                            </h3>
                            <ul className="entry-meta list-inline">
                              <li className="entry-date">16 Mar, 2016</li>
                            </ul>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Twitter */}
                <div className="widget recent-tweets">
                  <h3 className="widget-title heading uppercase">
                    Recent Tweets
                  </h3>
                  <ul
                    className="list-no-dividers"
                    id="tweets"
                  ></ul>
                </div>
                {/* Tags */}
                <div className="widget tags clearfix">
                  <h3 className="widget-title heading uppercase">Tags</h3>
                  <a href="#">Multi-purpose</a>
                  <a href="#">Creative</a>
                  <a href="#">Elegant</a>
                  <a href="#">Clean</a>
                  <a href="#">Modern</a>
                  <a href="#">Responsive</a>
                  <a href="#">E-commerce</a>
                  <a href="#">WordPress</a>
                  <a href="#">Woocommerce</a>
                  <a href="#">Store</a>
                  <a href="#">Business</a>
                </div>
              </aside>{' '}
              {/* end sidebar */}
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end container */}
        </section>
      </main>
      <Footer />
    </>
  )
}
