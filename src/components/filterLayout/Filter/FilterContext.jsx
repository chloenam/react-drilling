import { createContext, useContext, useReducer } from "react";
import { dummyData } from "../dummyData/dummyData";

const FilterContext = createContext();

const deepToggle = (items, value) =>
  items.map((item) => {
    if (item.value === value) {
      const newChecked = !item.isSelected;
      return {
        ...item,
        isSelected: newChecked,
        child: item.child
          ? deepToggleWithValue(item.child, newChecked)
          : undefined,
      };
    }
    if (item.child) {
      return { ...item, child: deepToggle(item.child, value) };
    }
    return item;
  });

const deepToggleWithValue = (items, isSelected) =>
  items.map((item) => ({
    ...item,
    isSelected,
    child: item.child ? deepToggleWithValue(item.child, isSelected) : undefined,
  }));

const deepReset = (items) =>
  items.map((item) => ({
    ...item,
    isSelected: false,
    child: item.child ? deepReset(item.child) : undefined,
  }));

const filterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ITEM":
      return {
        ...state,
        [action.category]: {
          ...state[action.category],
          items: deepToggle(state[action.category].items, action.value),
        },
      };
    case "RESET_ALL":
      const resetState = {};
      Object.keys(state).forEach((key) => {
        resetState[key] = { ...state[key], items: deepReset(state[key].items) };
      });
      return resetState;
    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, dummyData);

  const toggleItem = (category, value) =>
    dispatch({ type: "TOGGLE_ITEM", category, value });
  const resetAll = () => dispatch({ type: "RESET_ALL" });

  return (
    <FilterContext.Provider value={{ filters: state, toggleItem, resetAll }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
