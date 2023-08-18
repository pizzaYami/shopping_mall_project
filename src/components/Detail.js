import data from "../data.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail({ shoes }) {
  let { id } = useParams();
  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);
  return (
    <div className="shoes_item">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`}
        width="33%"
      />
      <input
        type="text"
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <h4>{shoes[id].title}</h4>
      <p>{shoes[id].content}</p>
      <p>{shoes[id].price}</p>
    </div>
  );
}

export default Detail;
