import React from "react";
import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./CategoriesTab.module.css";

const TabContent = ({ category }) => {
  return (
    <Tab.Pane eventKey={category.name.toLowerCase()}>
      <div
        style={{
          backgroundImage: `url(${category.img})`,
        }}
        className={classes.sCategoryTab_contentWrap}
      >
        <div
          className={
            classes.sCategoryTab_content +
            " d-flex justify-content-center align-items-center"
          }
        >
          <Link
            className="btn btn-primary btn-lg textUppercase rounded-0"
            to={"/" + category.name.toLowerCase()}
          >
            View All
          </Link>
        </div>
      </div>
    </Tab.Pane>
  );
};

export default TabContent;
