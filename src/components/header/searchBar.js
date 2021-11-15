import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "api/axios";

export function SearchBar() {
  //     api 비동기 호출 방법
  //     const [itemList, setItemList] = useState([])

  //     const getItem = useCallback(async() => {
  //         const res = await axiosInstance.get('/api/item')
  //         setItemList(res.data)
  //     }, [])

  //     useEffect(() => {
  //         getItem()
  //     }, [])

  return (
    <Cover>
      <input placeholder="검색어를 입력해 주세요" />
    </Cover>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 50px;
  border: solid 2px #1bbcff;
  input {
    width: 100%;
    border: none;
    font-size: 24px;
    line-height: 48px; // height의 높이와 똑같은 px사용 시 글자가 검색창 중간에 놓임
  }
  input:focus {
    outline: none;
  }
`;
