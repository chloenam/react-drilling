import React, { useState, createContext, useContext } from "react";

const TabsContext = createContext();

export function Tabs({ children }) {
  const [active, setActive] = useState(0);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div className="box__pattern">
        <h3>Compound Components Pattern</h3>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return <div style={{ display: "flex", gap: 10 }}>{children}</div>;
};

Tabs.Tab = function Tab({ index, label }) {
  const { active, setActive } = useContext(TabsContext);
  return (
    <button
      style={{ fontWeight: active === index ? "bold" : "normal" }}
      onClick={() => setActive(index)}
    >
      {label}
    </button>
  );
};

Tabs.Panel = function Panel({ index, children }) {
  const { active } = useContext(TabsContext);
  return active === index ? <div>{children}</div> : null;
};
