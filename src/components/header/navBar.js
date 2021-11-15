import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Cover>
      <Link to="/">
        <div>Bitman</div>
      </Link>
      <div className="menuContainer">
        <Link to="/ranking">
          <div>랭킹</div>
        </Link>
        <Link to="/products">
          <div>상품</div>
        </Link>
        <Link to="/review">
          <div>리뷰</div>
        </Link>
        <Link to="cs">
          <div>고객센터</div>
        </Link>
      </div>
      <Link to="/login">
        <div>로그인</div>
      </Link>
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  .menuContainer {
    display: flex;
    width: 35%;
    justify-content: space-between;
  }
`;
