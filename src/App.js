import "./App.css";
import Card from "./components/Card.js";
import Detail from "./components/Detail.js";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
function App() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="main-bg"></div>

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <div>
        <h4>about페이지임</h4>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
