import "./App.css";
import Card from "./Card.js";
import Detail from "./Detail.js";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="main-bg"></div>

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
