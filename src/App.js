import "./App.css";
import data from "./data.js";
function App() {
  return (
    <div>
      <div className="main-bg"></div>
      <Card />
    </div>
  );
}

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
    </div>
  );
}

export default App;
