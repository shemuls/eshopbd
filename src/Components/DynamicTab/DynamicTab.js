import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import allProducts from "../../FakeData/Products/index.js";
import ProductsGrid from "../Shop/ProductsGrid/ProductsGrid.js";
import "./DynamicTab.css";
import TabProducts from "./TabProducts.js";

const DynamicTab = () => {
  const filterData = [
    { id: 1, category: "laptop" },
    { id: 2, category: "camera" },
    { id: 3, category: "android" },
    { id: 4, category: "clock" },
  ];
  const [key, setKey] = useState("all");
  const [filterProduts, setFilterProduts] = useState([]);

  const selectTab = (k) => {
    setKey(k);
    if (k !== "all") {
      const getFilterProducts = allProducts.filter(
        (fProduct) => fProduct.category === k
      );
      getFilterProducts.length
        ? setFilterProduts(getFilterProducts.slice(0, 12))
        : setFilterProduts([]);
    }
  };

  return (
    <div className="sDynamicProductTabArea">
      <Tabs
        defaultActiveKey="all"
        activeKey={key}
        onSelect={(k) => selectTab(k)}
        id="sDynamicProductTab"
        className="mb-3 justify-content-center"
      >
        <Tab eventKey="all" title="FOR ALL">
          <ProductsGrid />
        </Tab>
        {filterData.map((fd, index) => (
          <Tab
            key={"dynamicTab__" + index}
            eventKey={fd.category}
            title={fd.category.toUpperCase()}
          >
            {filterProduts.length ? (
              <TabProducts filterProduts={filterProduts} category={key} />
            ) : (
              <p className="alert alert-danger">
                This category products not available at this moment
              </p>
            )}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default DynamicTab;
