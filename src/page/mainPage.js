import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import { SearchBar } from "components/header";

export function MainPage() {
  // const [img, setImg] = useState();

  // const getImgData = useCallback(async () => {
  //   const res = await axios.get("http://pvpvpvpvp.gonetis.com:8080/sample/get");
  //   setImg(res.data);
  // }, []);

  // useEffect(() => {
  //   getImgData();
  // }, []);

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setImage(null);
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setImage(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        // 비동기 통신 GET 응답은 response.data 에 저장됩니다.
        // 이미지는 바이너리 형태로 들어오기 때문에
        // responseType을 blob 형태로 받고나서
        // <img src= 태그에 사용하기 위해서
        // URL.createObjectURL(response.data) 해줍니다.
        // https://webcorgi.tistory.com/40
        // https://xively.tistory.com/54
        // 참고
        const response = await axios({
          method: "GET",
          url: `http://pvpvpvpvp.gonetis.com:8080/sample/get`,
          responseType: "blob",
        });
        const url = URL.createObjectURL(response.data);
        setImage(url);
        console.log(response.data);
        // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);
  if (!image) return null;
  return (
    <>
      <a href="http://pvpvpvpvp.gonetis.com:8080/sample/get">
        {" "}
        <img src={image} />
      </a>
    </>
  );
}

// return <SearchBar />;
