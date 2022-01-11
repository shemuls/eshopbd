import React from "react";

const FancyHeading = ({ title, subTitle }) => {
  return (
    <div className="sFancyHeading">
      {title && <h2 className="s-h2">{title}</h2>}
      {subTitle && <p className="mt-2 textThin">{subTitle}</p>}
    </div>
  );
};

export default FancyHeading;
