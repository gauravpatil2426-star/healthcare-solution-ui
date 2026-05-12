import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";

function  TopHeader() {
  return (
    <header>
      {/* Top Header */}
      <div className="top-header">
        <div className="container flex">
          <div className="left">
            <span className="num">
              <IoCallOutline className="num"  /> +012 345 6789
            </span>
            <span className="divider">|</span>
            <span className="num">
              <CiMail className="num" /> info@example.com
            </span>
          </div>

          <div className="right">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

    
    </header>
  );
}

export default TopHeader;

