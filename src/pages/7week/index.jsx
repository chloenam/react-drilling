import React from "react";
import { FilterProvider } from "../../components/filterLayout/Filter/FilterContext";
import Filter from "../../components/filterLayout/Filter/Filter";

const FilterLayout = () => {
  return (
    <FilterProvider>
      <Filter />
    </FilterProvider>
  );
};

export default FilterLayout;
