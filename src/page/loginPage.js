import React from "react";
import styled from "styled-components";
import {
  Form,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
} from "react-bootstrap";

export function LoginPage() {
  //  Jsx로 사용할 함수명의 첫글자는 대문자 + camel양식, 파일명 첫글자는 소문자 + camel양식
  return (
    <Cover>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Id </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          login
        </Button>
      </Form>
    </Cover>
  );
}

const Cover = styled.div`
  div {
  }
`;
