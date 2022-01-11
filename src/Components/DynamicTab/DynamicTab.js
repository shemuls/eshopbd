import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ProductsGrid from "../ProductsGrid/ProductsGrid.js";
import "./DynamicTab.css";

const DynamicTab = () => {
  return (
    <div className="sDynamicProductTabArea">
      <Tabs
        defaultActiveKey="all"
        id="sDynamicProductTab"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="all" title="FOR ALL">
          <ProductsGrid />
        </Tab>
        <Tab eventKey="for-men" title="FOR MEN">
          <p>
            alias assumenda sed, quidem, sequi earum reiciendis Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Laudantium voluptatem
            molestiae accusantium ab et necessitatibus in eum modi dolorum
            tenetur eos quia fugiat deserunt praesentium est!
          </p>
        </Tab>
        <Tab eventKey="for-women" title="FOR WOMEN">
          <p>
            dolorum tenetur eos quia fugiat deserunt praesentium est! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatem molestiae alias assumenda sed, quidem, sequi earum
            reiciendis accusantium ab et necessitatibus in eum modi
          </p>
        </Tab>
        <Tab eventKey="for-children" title="FOR CHILDREN">
          <p>
            dolorum tenetur eos quia fugiat deserunt praesentium est! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatem molestiae alias assumenda sed, quidem, sequi earum
            reiciendis accusantium ab et necessitatibus in eum modi
          </p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default DynamicTab;
