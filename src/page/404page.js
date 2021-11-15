import React from "react";
import styled from "styled-components";

export function ErrorPage() {
  return <Cover>404 Not Found.</Cover>;
}

const Cover = styled.div`
  width: 100%;
  height: 75px;
  font-size: 50px;
  color: red;
  font-weight: bold;
  background-color: #000000;
`;
