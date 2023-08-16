import data from "../data.js";
import { Link, Navigate } from "react-router-dom";

function Card() {
  return (
    <div className="shoes_container">
      {data.map((shoes, i) => {
        return (
          <div className="shoes_item">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
              width="50%"
            />
            <h4>{shoes.title}</h4>
            <p>{shoes.price}</p>
          </div>
        );
      })}
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
    </div>
  );
}

export default Card;
