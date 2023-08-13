import "./App.css";
import { useState } from "react";
function App() {
  let [글제목, set글제목] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [글제목Item, set글제목Item] = useState(0);
  let [like, setLike] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);
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
          </div>
        );
      })}

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

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.글제목Item]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
