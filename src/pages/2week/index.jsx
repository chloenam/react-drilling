import React, { useState } from "react";
import "./index.css";
import dummyData from "../../components/emartmall/dummyData/dummyData";
import TabContent from "../../components/emartmall/TabContent/TabContent";
import TabList from "../../components/emartmall/TabList/TabList";

const EmartMall = () => {
  const catalogs = dummyData.catalogs;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedBrand = dummyData.catalogs[selectedIndex];
  const items = selectedBrand.items;

  return (
    <div className="main">
      <TabList catalogs={catalogs} selectedIndex={selectedIndex} onTabClick={setSelectedIndex} />
      <TabContent items={items} />
    </div>
  );
};

export default EmartMall;
