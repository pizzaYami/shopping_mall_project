import data from "../data.js";
import { useParams } from "react-router-dom";

function Detail({ shoes }) {
  let { id } = useParams();
  console.log(shoes);

  return (
    <div className="shoes_item">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`}
        width="50%"
      />
      <h4>{shoes[id].title}</h4>
      <p>{shoes[id].content}</p>
      <p>{shoes[id].price}</p>
    </div>
  );
}

export default Detail;
