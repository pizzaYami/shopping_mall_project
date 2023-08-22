import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

function Detail({ shoes }) {
  let { id } = useParams();
  return (
    <div className="shoes_item">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`}
        width="33%"
      />
      <h4>{shoes[id].title}</h4>
      <p>{shoes[id].content}</p>
      <p>{shoes[id].price}</p>
      <TabContent />
    </div>
  );
}

function TabContent() {
  let [tapButton, setTapButton] = useState(0);
  let [tapContent, setTapContent] = useState([
    <div>HTML content</div>,
    <div>CSS content</div>,
    <div>JS content</div>,
  ]);
  return (
    <Container>
      <TapContainer tapButton={tapButton}>
        <button
          onClick={() => {
            setTapButton(0);
          }}
        >
          HTML
        </button>
        <button
          onClick={() => {
            setTapButton(1);
          }}
        >
          CSS
        </button>
        <button
          onClick={() => {
            setTapButton(2);
          }}
        >
          JS
        </button>
      </TapContainer>
      <TapContents>{tapContent[tapButton]}</TapContents>
    </Container>
  );
}

export default Detail;

let Container = styled.div`
  background: #f5f7f8;
  width: 800px;
  height: 200px;
  padding: 20px;
`;

let TapContainer = styled.div`
  button {
    height: 30px;
    min-width: 40px;
    margin-right: 10px;
    background-color: white; // 나중에 바꿈
  }
  button: nth-child(${(props) => props.tapButton + 1}) {
    background: yellow;
  }
`;

let TapContents = styled.div`
  height: 100%;
  padding: 20px;
  border: 3px solid yellow;
`;
