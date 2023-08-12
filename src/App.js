import "./App.css";
import { useState } from "react";
function App() {
  let [글제목, set글제목] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [like, setLike] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={() => setLike(like + 1)}>👍</span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트추천";
          set글제목(copy);
        }}
      >
        바꿔라
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          set글제목(copy);
        }}
      >
        정렬
      </button>
    </div>
  );
}

export default App;
