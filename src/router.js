import React from "react";
import styled from "styled-components";
import { Route, Switch  } from "react-router-dom";
import {
  LoginPage,
  MainPage,
  SignUpPage,
  ErrorPage,
  csPage,
  reviewPage,
  rankingPage,
  productsPage,
  faq,
  Oneonone,
  notice
} from "page"; //  page폴더 내의 index파일에 export할 페이지들을 한꺼번에 모아놓고 이 페이지들을 import해줄 때 한줄로 편하게 사용하기위함


export default function Router() {
  return (
    <Content>
    <hr/>
    <br/>
    <br/>
    <br/>

            <Switch>

        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/products" component={productsPage} />
        <Route exact path="/ranking" component={rankingPage} />
        <Route exact path="/review" component={reviewPage} />
        <Route exact path="/cs" component={csPage} />
        <Route exact path="/cs/faq" component={faq} />
        <Route exact path="/cs/Oneonone" component={Oneonone} />
        <Route exact path="/cs/notice" component={notice} />
        <Route exact path="*" component={ErrorPage} />

    </Switch>
    </Content>

    
  );
}

const Content = styled.div``;
