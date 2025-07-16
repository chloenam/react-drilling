import React, { useState } from "react";
import "./index.css";
import dummyData from "../../components/emartmall2/dummyData/dummyData";
import TabContent from "../../components/emartmall2/TabContent/TabContent";
import TabList from "../../components/emartmall2/TabList/TabList";
import useChangeCss from "../../hook/useChangeCSS";

const Portal = () => {
  const catalogs = dummyData.catalogs;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedBrand = dummyData.catalogs[selectedIndex];
  const items = selectedBrand.items;

  useChangeCss([
    "//script.gmarket.co.kr/pc/css/application/kr/smilefresh/app.css",
    "//script.gmarket.co.kr/starro/desktop/css/smilefresh/smilefresh.css",
  ]);

  return (
    <>
      <div className="main main--6week">
        <TabList
          catalogs={catalogs}
          selectedIndex={selectedIndex}
          onTabClick={setSelectedIndex}
        />
        <TabContent items={items} />
      </div>
    </>
  );
};

export default Portal;
