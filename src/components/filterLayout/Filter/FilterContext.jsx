import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";
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

  /** useCallback으로 안정적인 dispatch 함수 제공 */
  const toggleItem = useCallback((category, value) => {
    dispatch({ type: "TOGGLE_ITEM", category, value });
  }, []);

  const resetAll = useCallback(() => {
    dispatch({ type: "RESET_ALL" });
  }, []);

  /** useMemo로 value 최적화 → Provider 리렌더링 최소화 */
  const contextValue = useMemo(
    () => ({ filters: state, toggleItem, resetAll }),
    [state, toggleItem, resetAll]
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
