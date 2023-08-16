import "./App.css";
import data from "./data.js";
function App() {
  return (
    <div>
      <div className="main-bg"></div>
      <div className="shoes_container">
        {data.map((shoes, i) => {
          return (
            <div>
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
    </div>
  );
}

export default App;
