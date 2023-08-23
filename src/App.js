import "./App.css";
import Card from "./components/Card.js";
import Detail from "./components/Detail.js";
import data from "./data.js";
import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
function App() {
  let [재고, 재고변경] = useState([10, 11, 12]);
  let shoes = data;
  return (
    <div>
      <div className="main-bg"></div>
      <Routes>
        <Route path="/" element={<Card />} />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route
          path="/event"
          element={
            <div>
              <h2>오늘의 이벤트</h2>
              <Outlet></Outlet>
            </div>
          }
        >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
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
