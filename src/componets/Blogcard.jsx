import React from "react";
import { FaRegEye, FaCommentDots } from "react-icons/fa";

function BlogCard(props) {
  return (
    <div className="blog-card">
      <img src={props.image} alt="" />

      <div className="blog-content">
        <a href="/blog-details">{props.title}</a>
        <p>{props.description}</p>
      </div>

      <div className="blog-footer">
        <div className="author">
          <img src={props.authorImage} alt="" />
          <span>{props.authorName}</span>
        </div>

        <div className="blog-stats">
          <span><FaRegEye /> {props.views}</span>
          <span><FaCommentDots /> {props.comments}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
