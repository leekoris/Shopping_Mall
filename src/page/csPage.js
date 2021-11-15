import React from "react";
import styled from "styled-components";
import { Link, Route } from 'react-router-dom';
import { FcAssistant, FcComments,FcCustomerSupport } from "react-icons/fc";
export { notice } from "./notice";
export { faq } from "./faq";
export { Oneonone } from "./Oneonone";


export function csPage() {
  return (
  
   <div>
    <Route>
     <span>
    <Link to ="/cs/faq"> <FcAssistant  size="120"/> FAQ </Link>


  

    <Link to="/cs/Oneonone"><FcCustomerSupport size="120"/>  1대1문의 </Link>
    </span>


      <div>
    <Link to="/cs/notice"><FcComments size="120"/> 공지사항</Link>  
    </div>
</Route>
    
    </div>
     
  );
}

const Cover = styled.div`
  div {
  }
`;
