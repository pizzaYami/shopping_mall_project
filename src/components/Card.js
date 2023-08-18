import data from "../data.js";
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Card() {
  let [shoes, setShoes] = useState([...data]);
  let [getCounter, setGetCounter] = useState(2);
  useEffect(() => {
    alert("로딩중입니다.");
  }, [shoes]);
  return (
    <>
      {getCounter < 4 ? (
        <button
          onClick={() => {
            axios
              .get(`https://codingapple1.github.io/shop/data${getCounter}.json`)
              .then((결과) => {
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
                setGetCounter(getCounter + 1);
              })
              .catch(() => {
                console.error("응 실패야~");
              });
          }}
        >
          서버
        </button>
      ) : null}

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <div className="shoes_container">
        {shoes.map((shoes, i) => {
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
      </div>
    </>
  );
}

export default Card;
