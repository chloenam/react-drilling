import React, { useState } from "react";
import "./index.css";
import dummyData from "../../components/emartmall/dummyData/dummyData";
import TabContent from "../../components/emartmall/TabContent/TabContent";
import TabList from "../../components/emartmall/TabList/TabList";
import useChangeCss from "../../hook/useChangeCSS";

const EmartMall = () => {
  const catalogs = dummyData.catalogs;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedBrand = dummyData.catalogs[selectedIndex];
  const items = selectedBrand.items;

  useChangeCss([
    "//script.gmarket.co.kr/starro/desktop/css/smilefresh/smilefresh.css",
    "//script.gmarket.co.kr/pc/css/application/kr/smilefresh/app.css",
  ]);

  return (
    <div className="main">
      <TabList
        catalogs={catalogs}
        selectedIndex={selectedIndex}
        onTabClick={setSelectedIndex}
      />
      <TabContent items={items} />
    </div>
  );
};

export default EmartMall;
