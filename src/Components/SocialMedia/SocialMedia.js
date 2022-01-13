import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <ul className={classes.sSocialMedia + " m-0 p-0"}>
      <li>
        <Link to="#">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </li>
      <li>
        <Link to="#">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </li>
      <li>
        <Link to="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </li>
      <li>
        <Link to="#">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
