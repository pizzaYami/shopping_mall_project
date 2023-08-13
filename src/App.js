import "./App.css";
import { useState } from "react";
function App() {
  let [글제목, set글제목] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [글제목Item, set글제목Item] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, set입력값] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      {글제목.map(function (item, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                set글제목Item(i);
              }}
            >
              {item}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] += 1;
                  setLike(copy);
                }}
              >
                👍🏻{like[i]}
              </span>
            </h4>
            <p>2월 18일 발행</p>
            <button
              onClick={(e) => {
                let copy = [...글제목];
                copy.splice(i, 1);
                set글제목(copy);
                let copy2 = [...like];
                copy2.splice(i, 1);
                setLike(copy2);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          set입력값(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.push(입력값);
          set입력값("");
          set글제목(copy);
          let copy2 = [...like];
          copy2.push(0);
          setLike(copy2);
        }}
      >
        글발행
      </button>

      {modal == true ? (
        <Modal
          글제목={글제목}
          글제목Item={글제목Item}
          color={"skyblue"}
        ></Modal>
      ) : null}
    </div>
  );
}

function Modal({ 글제목, 글제목Item, color }) {
  return (
    <div className="modal" style={{ background: color }}>
      <h4>{글제목[글제목Item]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
