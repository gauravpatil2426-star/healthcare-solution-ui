import React from "react";
import Blogcard from "./Blogcard";

import img1 from "../img/256.jpg";
import img2 from "../img/blog-2.jpg";
import img3 from "../img/blog-3.jpg";
import authorImg from "../img/dj.jpg";

function Bloggrid() {
    return (
        <section>
            <div className="container">
                <p className="sub-title">BLOG POST</p>
                <div className='b-underline'>

                </div>
                <h2 className="main-title-1">Our Latest Medical Blog Posts</h2>


                <div className="blog-container-2">

                    <Blogcard
                        image={img1}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="100"
                        comments="20"
                    />

                    <Blogcard
                        image={img2}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="200"
                        comments="30"
                    />

                    <Blogcard
                        image={img3}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="300"
                        comments="40"
                    />

                    <Blogcard
                        image={img1}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="400"
                        comments="50"
                    />

                    <Blogcard
                        image={img2}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="500"
                        comments="60"
                    />

                    <Blogcard
                        image={img3}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="600"
                        comments="70"
                    />

                    <Blogcard
                        image={img1}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="400"
                        comments="50"
                    />

                    <Blogcard
                        image={img2}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="500"
                        comments="60"
                    />

                    <Blogcard
                        image={img3}
                        title="Dolor clita vero elitr sea stet dolor justo diam"
                        description="Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                rebum clita rebum dolor stet amet justo"
                        authorImage={authorImg}
                        authorName="John Doe"
                        views="600"
                        comments="70"
                    />




                </div>
                <div className="btn-container">
                    <button className="load-btn">Load More</button>
                </div>

            </div>
        </section>
    );
}

export default Bloggrid;
