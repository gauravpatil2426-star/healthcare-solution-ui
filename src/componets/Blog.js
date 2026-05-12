import React from 'react';
import img1 from "../img/256.jpg";
import img2 from "../img/blog-2.jpg";
import img3 from "../img/blog-3.jpg";
import { FaRegEye } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

function Blog() {
    return (
        <section>
            <div className='container'>
                <div className="blog-section">
                    <p className="sub-title">BLOG POST</p>
                    <div className='b-underline'>

                    </div>
                    <h2 className="main-title">Our Latest Medical Blog Posts</h2>

                    <div className="blog-container">

                        {/* Card 1 */}
                        <div className="blog-card">
                            <img src={require('../img/256.jpg')} alt="" />
                            <div className="blog-content">
                                <a href="">Dolor clita vero elitr sea stet dolor justo diam</a>
                                <p>
                                    Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                                    clita rebum dolor stet amet justo
                                </p>
                            </div>
                            <div className="blog-footer">
                                <div className="author">
                                   <img src={require('../img/dj.jpg')} alt="" />
                                    <span>John Doe</span>
                                </div>
                                <div className="blog-stats">
                                    <span><FaRegEye className='eyes' /> 12345</span>
                                    <span><FaCommentDots className='eyes' />123</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="blog-card">
                            <img src={require('../img/blog-2.jpg')} alt="" />
                            <div className="blog-content">
                               <a href="">Dolor clita vero elitr sea stet dolor justo diam</a>
                                <p>
                                    Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                                    clita rebum dolor stet amet justo
                                </p>
                            </div>
                            <div className="blog-footer">
                                <div className="author">
                                   <img src={require('../img/dj.jpg')} alt="" />
                                    <span>John Doe</span>
                                </div>
                                <div className="blog-stats">
                                    <span><FaRegEye className='eyes' /> 12345</span>
                                    <span><FaCommentDots className='eyes' />123</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="blog-card">
                            <img src={require('../img/blog-3.jpg')} alt="" />
                            <div className="blog-content">
                               <a href="">Dolor clita vero elitr sea stet dolor justo diam</a>
                                <p>
                                    Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                                    clita rebum dolor stet amet justo
                                </p>
                            </div>
                            <div className="blog-footer">
                                <div className="author">
                                   <img src={require('../img/dj.jpg')} alt="" />
                                    <span>John Doe</span>
                                </div>
                                <div className="blog-stats">
                                    <span><FaRegEye className='eyes' /> 12345</span>
                                    <span><FaCommentDots className='eyes' />123</span>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
