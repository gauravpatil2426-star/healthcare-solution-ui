import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <section className='bg-footer'>
      <div className='container'>
        <div className="footer">
          <div className="footer-container">

            {/* Column 1 */}
            <div className="footer-col">
              <h3>GET IN TOUCH
                <div className="f-border">

                </div>

              </h3>
              <p>
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p><IoLocationSharp className='location' /> 123 Street, New York, USA</p>
              <p><MdEmail className='location' /> info@example.com</p>
              <p><IoCallOutline className='location' /> +012 345 67890</p>
            </div>

            {/* Column 2 */}
            <div className="footer-col">
              <h3>QUICK LINKS</h3>
              <div className="f-border-2">

              </div>
              <ul>
                <li>› Home</li>
                <li>› About Us</li>
                <li>› Our Services</li>
                <li>› Meet The Team</li>
                <li>› Latest Blog</li>
                <li>› Contact Us</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-col">
              <h3>POPULAR LINKS</h3>
              <div className="f-border-3">

              </div>
              <ul>
                <li>› Home</li>
                <li>› About Us</li>
                <li>› Our Services</li>
                <li>› Meet The Team</li>
                <li>› Latest Blog</li>
                <li>› Contact Us</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-col">
              <h3>NEWSLETTER</h3>
              <div className="f-border-4">

              </div>
              <div className="newsletter">
                <input type="email" placeholder="Your Email Address" />
                <button >Sign Up</button>
              </div>

              <h4 className="follow-title">FOLLOW US</h4>
              <div className="social-icons">
                <div className='curcal-icon'>
                  <FaTwitter className='tw' />

                </div>
                <div className='curcal-icon'>
                  <FaFacebookF className='tw' />

                </div>
                <div className='curcal-icon'>
                  <FaLinkedinIn className='tw' />

                </div>
                <div className='curcal-icon'>
                  <FaInstagram className='tw' />

                </div>

              </div>
            </div>
            <div className="copyright">
              <div className="copyright-flex">
                  <p><span className="site">© Your Site Name.</span> All Rights Reserved.</p>
                  <p>
                    Designed by <span className="hutml">HTML Codex</span>. Distributed by <span className="yui">ThemeWagon</span>
                  </p>
                </div>
            </div>



          </div>
        </div>


      </div>
    </section>

  )
};

export default Footer;