import React from "react";
import styled from "styled-components";

export function Footer() {
  return (
    <Cover>
      <div className="line" />
      <h2>TEL: 1234-5678</h2>
      <div>
        <p>만든이: 김 이 박</p>
        <p>주소: 서울특별시 서초구 서초동 서초대로74길 33</p>
        <p>© bitman, Co.</p>
      </div>
    </Cover>
  );
}

const Cover = styled.div`
  .line {
    width: 100%;
    border-bottom: 2px solid #000000;
  }
  div {
    p {
      margin: 8px 8px;
    }
  }
  h2 {
    margin: 8px 8px;
  }
  position: absolute;
  margin: 8px 8px 0 0;
  padding: 0%;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: left;
  color: black;
`;
