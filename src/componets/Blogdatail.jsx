import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";


function Blogdatail() {
    return (
        <div>
            <div className="container">
                <div className="b-flex">
                    <div className="w-60">
                        <div className="bg-datail-img">
                            <img src={require('../img/258.jpg')} alt="" className="bgu-img" />

                        </div>
                        <div>
                            <h1 className="t-1">Diam dolor est labore duo ipsum clita sed et lorem tempor sanctus lorem kasd duo</h1>
                        </div>
                        <div className="blog-datal-p">
                            <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren  dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam  nonumy, gubergren sit stet no diam kasd vero.</p>
                            <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet  consetetur  elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd  diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.
                            </p>
                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>
                        </div>
                        <div className="card">
                            <div className="left">
                                <img src={require('../img/dj.jpg')} alt="" />
                                <h3>John Doe</h3>
                            </div>

                            <div className="right">
                                <div className="stat">
                                    <span className="num-56"><FaRegEye className='eyes-4' /> 12345</span>
                                </div>

                                <div className="stat">
                                    <span className="num-56"><FaCommentDots className='eyes-4' />123</span>
                                </div>
                            </div>
                        </div>
                        <div className="comments-section">
                            <h2 className="comments-title">3 COMMENTS</h2>

                            {/* Comment 1 */}
                            <div className="comment-box">
                                <img
                                    src={require('../img/dj.jpg')}
                                    alt="user"
                                    className="comment-img"
                                />

                                <div className="comment-content">
                                    <h4 className="doe-text">
                                        John Doe <span className="data-text">01 Jan 2045</span>
                                    </h4>

                                    <p className="data-des">
                                        Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua,
                                        tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
                                        dolores sed eirmod
                                    </p>

                                    <button className="reply-btn">Reply</button>
                                </div>
                            </div>

                            {/* Comment 2 */}
                            <div className="comment-box">
                                <img
                                    src={require('../img/dj.jpg')}
                                    alt="user"
                                    className="comment-img"
                                />

                                <div className="comment-content">
                                    <h4 className="doe-text">
                                        John Doe <span className="data-text">01 Jan 2045</span>
                                    </h4>

                                    <p className="data-des">
                                        Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua,
                                        tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
                                        dolores sed eirmod
                                    </p>

                                    <button className="reply-btn">Reply</button>
                                </div>
                            </div>

                            {/* Comment 3 */}

                            <div className="comment-box">
                                <img
                                    src={require('../img/dj.jpg')}
                                    alt="user"
                                    className="comment-img"
                                />

                                <div className="comment-content">
                                    <h4 className="doe-text">
                                        John Doe <span className="data-text">01 Jan 2045</span>
                                    </h4>

                                    <p className="data-des">
                                        Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua,
                                        tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
                                        dolores sed eirmod
                                    </p>

                                    <button className="reply-btn">Reply</button>
                                </div>
                            </div>

                            <div className="comment-form-section">
                                <h2 className="form-title">LEAVE A COMMENT</h2>

                                <form className="comment-form">
                                    <div className="row">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="email" placeholder="Your Email" />
                                    </div>

                                    <input type="text" placeholder="Website" className="full-input" />

                                    <textarea
                                        rows="6"
                                        placeholder="Comment"
                                        className="full-input"
                                    ></textarea>

                                    <button type="submit" className="submit-btn">
                                        Leave Your Comment
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="w-40">
                        <div className="search-wrapper">
                            <input type="text" placeholder="Keyword" className="search-input" />
                            <button className="search-btn">
                                <IoSearchSharp className="serach-icon" />
                            </button>
                        </div>
                        <div className="line-cate">
                            <h4>Categories
                                <div className="line-op">

                                </div>

                            </h4>

                        </div>
                        <div className="list-89">
                            <IoIosArrowForward className="arro-icon" />
                            <h5 className="web-d">Web Design</h5>

                        </div>
                        <div className="list-89">
                            <IoIosArrowForward className="arro-icon" />
                            <h5 className="web-d">Web Development</h5>

                        </div>
                        <div className="list-89">
                            <IoIosArrowForward className="arro-icon" />
                            <h5 className="web-d">Web Development</h5>

                        </div>
                        <div className="list-89">
                            <IoIosArrowForward className="arro-icon" />
                            <h5 className="web-d">Keyword Research</h5>

                        </div>
                        <div className="list-89">
                            <IoIosArrowForward className="arro-icon" />
                            <h5 className="web-d">Email Marketing</h5>

                        </div>

                        <div className="r-post">
                            <div className="line-cate">
                                <h4>Recent Post
                                    <div className="line-op-0">


                                    </div>

                                </h4>
                            </div>
                            <div className="flex-897">
                                <div className="r-post-card">
                                    <img src={require('../img/256.jpg')} alt="" className="cards-imhd" />

                                </div>
                                <div className="card-conte">
                                    <p className="card-text">Lorem ipsum dolor sit <br /> amet consec adipis elit</p>

                                </div>
                            </div>

                            <div className="flex-897">
                                <div className="r-post-card">
                                    <img src={require('../img/blog-2.jpg')} alt="" className="cards-imhd" />

                                </div>
                                <div className="card-conte">
                                    <p className="card-text">Lorem ipsum dolor sit <br /> amet consec adipis elit</p>

                                </div>
                            </div>
                            <div className="flex-897">
                                <div className="r-post-card">
                                    <img src={require('../img/blog-3.jpg')} alt="" className="cards-imhd" />

                                </div>
                                <div className="card-conte">
                                    <p className="card-text">Lorem ipsum dolor sit <br /> amet consec adipis elit</p>

                                </div>
                            </div>

                            <div className="flex-897">
                                <div className="r-post-card">
                                    <img src={require('../img/about (1).jpg')} alt="" className="cards-imhd" />

                                </div>
                                <div className="card-conte">
                                    <p className="card-text">Lorem ipsum dolor sit <br /> amet consec adipis elit</p>

                                </div>
                            </div>

                            <div className="flex-897">
                                <div className="r-post-card">
                                    <img src={require('../img/blog-3.jpg')} alt="" className="cards-imhd" />

                                </div>
                                <div className="card-conte">
                                    <p className="card-text">Lorem ipsum dolor sit <br /> amet consec adipis elit</p>

                                </div>
                            </div>

                            <div className="img-543">
                                <img src={require('../img/256.jpg')} alt="" className="img-uio" />

                            </div>
                        </div>
                        <div className="line-cate">
                            <h4>Tag Cloud
                                <div className="line-op-01">


                                </div>

                            </h4>
                        </div>
                        <div className="flex-9065">
                            <div className="desgn">
                                <p className="desgn-t">Design</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">Devlopment</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">Marketong</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">SEO</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">Writing</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">Consulting</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">Design</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">Development</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">Marketing</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">SEO</p>


                            </div>
                            <div className="desgn">
                                <p className="desgn-t">Writing</p>


                            </div>

                            <div className="desgn">
                                <p className="desgn-t">Consulting</p>


                            </div>



                        </div>
                        <div className="line-cate">
                            <h4>PLAIN TEXT
                                <div className="line-op-01">


                                </div>

                            </h4>
                        </div>
                        <div className="massege-box">
                            <p className="messge-text">Vero sea et accusam justo dolor  accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                            <button class="desgn-1">Read More</button>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
};

export default Blogdatail;