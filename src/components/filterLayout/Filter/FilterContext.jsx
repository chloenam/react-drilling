import { createContext, useContext, useReducer } from "react";
import { dummyData } from "../dummyData/dummyData";

const FilterContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ITEM": {
      const { category, value } = action;

      const updatedItems = state[category].items.map((item) =>
        item.value === value ? { ...item, isSelected: !item.isSelected } : item
      );

      return {
        ...state,
        [category]: {
          ...state[category],
          items: updatedItems,
        },
      };
    }

    case "RESET_ALL": {
      const resetState = {};
      Object.keys(state).forEach((key) => {
        resetState[key] = {
          ...state[key],
          items: state[key].items.map((item) => ({
            ...item,
            isSelected: false,
          })),
        };
      });
      return resetState;
    }

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
