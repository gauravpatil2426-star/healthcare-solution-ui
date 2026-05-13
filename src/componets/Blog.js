import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

import blog1 from '../img/256.jpg';
import blog2 from '../img/blog-2.jpg';
import blog3 from '../img/blog-3.jpg';
import authorImg from '../img/dj.jpg';

function Blog() {
    return (
        <section>
            <div className='container'>
                <div className="blog-section">

                    <p className="sub-title">BLOG POST</p>

                    <div className='b-underline'></div>

                    <h2 className="main-title">
                        Our Latest Medical Blog Posts
                    </h2>

                    <div className="blog-container">

                        {/* Card 1 */}
                        <div className="blog-card">

                            <img src={blog1} alt="Medical Blog" />

                            <div className="blog-content">

                                <a href="/">
                                    Dolor clita vero elitr sea stet dolor justo diam
                                </a>

                                <p>
                                    Dolor lorem eos dolor duo et eirmod sea.
                                    Dolor sit magna rebum clita rebum dolor
                                    stet amet justo
                                </p>

                            </div>

                            <div className="blog-footer">

                                <div className="author">

                                    <img src={authorImg} alt="Author" />

                                    <span>John Doe</span>

                                </div>

                                <div className="blog-stats">

                                    <span>
                                        <FaRegEye className='eyes' /> 12345
                                    </span>

                                    <span>
                                        <FaCommentDots className='eyes' /> 123
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Card 2 */}
                        <div className="blog-card">

                            <img src={blog2} alt="Medical Blog" />

                            <div className="blog-content">

                                <a href="/">
                                    Dolor clita vero elitr sea stet dolor justo diam
                                </a>

                                <p>
                                    Dolor lorem eos dolor duo et eirmod sea.
                                    Dolor sit magna rebum clita rebum dolor
                                    stet amet justo
                                </p>

                            </div>

                            <div className="blog-footer">

                                <div className="author">

                                    <img src={authorImg} alt="Author" />

                                    <span>John Doe</span>

                                </div>

                                <div className="blog-stats">

                                    <span>
                                        <FaRegEye className='eyes' /> 12345
                                    </span>

                                    <span>
                                        <FaCommentDots className='eyes' /> 123
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Card 3 */}
                        <div className="blog-card">

                            <img src={blog3} alt="Medical Blog" />

                            <div className="blog-content">

                                <a href="/">
                                    Dolor clita vero elitr sea stet dolor justo diam
                                </a>

                                <p>
                                    Dolor lorem eos dolor duo et eirmod sea.
                                    Dolor sit magna rebum clita rebum dolor
                                    stet amet justo
                                </p>

                            </div>

                            <div className="blog-footer">

                                <div className="author">

                                    <img src={authorImg} alt="Author" />

                                    <span>John Doe</span>

                                </div>

                                <div className="blog-stats">

                                    <span>
                                        <FaRegEye className='eyes' /> 12345
                                    </span>

                                    <span>
                                        <FaCommentDots className='eyes' /> 123
                                    </span>

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