import { Routes, Route } from "react-router-dom";
import Tab from "./components/Tab/Tab.jsx";
import Best from "./pages/1week/index.jsx";
import EmartMall from "./pages/2week/index.jsx";
import AirAgree from "./pages/3week/index.jsx";
import BrandShop from "./pages/4week/index.jsx";
import Accessibility from "./pages/5week/index.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Tab />
      <Routes>
        <Route path="/" element={<Best />} />
        <Route path="/2week" element={<EmartMall />} />
        <Route path="/3week" element={<AirAgree />} />
        <Route path="/4week" element={<BrandShop />} />
        <Route path="/5week" element={<Accessibility />} />
      </Routes>
    </>
  );
}

export default App;
