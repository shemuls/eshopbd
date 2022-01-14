import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { productCategories } from "../../FakeData/FakeData.js";
import TabContent from "./TabContent.js";
import TabMenu from "./TabMenu.js";

const CategoriesTab = () => {
  return (
    <Tab.Container
      id="verticalCategoriesTab"
      defaultActiveKey={productCategories[0].name.toLowerCase()}
    >
      <Row>
        <Col sm={3}>
          <Nav
            variant="pills"
            className="flex-column verticalCategoriesTab__nav"
          >
            {productCategories.map((pcat, index) => (
              <TabMenu key={"sTabMenu__" + index} category={pcat} />
            ))}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {productCategories.map((pcat, index) => (
              <TabContent key={"sTabContent__" + index} category={pcat} />
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default CategoriesTab;
