import React from "react";
import TabItem from "../TabItem/TabItem";

const TabList = ({ catalogs, selectedIndex, onTabClick }) => {
  return (
    <div className="box__chip-group brand-type">
      <div className="box__chip-group-inner">
        {catalogs.map((brand, index) => (
          <TabItem
            key={brand.sdBrandSeq}
            id={`filter-chip1_title-${brand.sdBrandSeq}`}
            name="filter-chip"
            isActive={selectedIndex === index}
            onClick={() => onTabClick(index)}
            logo={{
              on: brand.brandLogoImage.onImageUrl,
              off: brand.brandLogoImage.offImageUrl,
            }}
            altText={brand.sdBrandName}
          />
        ))}
      </div>
    </div>
  );
};

export default TabList;
