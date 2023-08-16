import data from "../data.js";

function Detail() {
  let shoes = data[0];
  return (
    <div className="shoes_item">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="50%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
}

export default Detail;
