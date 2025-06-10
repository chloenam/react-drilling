import { Routes, Route } from "react-router-dom";
import Tab from "./components/Tab/Tab.jsx";
import Best from "./pages/1week/index.jsx";
import EmartMall from "./pages/2week/index.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Tab />
      <Routes>
        <Route path="/" element={<Best />} />
        <Route path="/2week" element={<EmartMall />} />
      </Routes>
    </>
  );
}

export default App;
