import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./BlogGrid.module.css";

const BlogPost = ({ post }) => {
  console.log(post);
  return (
    <div className={classes.post_item + " shadow-sm rounded-3 mb-4"}>
      <div
        style={{
          backgroundImage: `url(${post?.image})`,
        }}
        className={classes.post_imgWrap}
      ></div>
      <div className={classes.post_content}>
        <Link
          className={
            classes.post_title + " hoverColorPrimary colorSecondaryAlt"
          }
          to="#"
        >
          {post?.text}
        </Link>
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon className="text-primary" icon={faUser} />
            <div className="p-2">
              {post?.owner?.firstName + " " + post?.owner?.lastName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
