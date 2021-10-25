import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const EmailLoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const EmailLoginBox = styled.div`
  position: relative;
  width: 100%;
`;
const EmailLoginLabel = styled.label`
  position: absolute;
  top: 18px;
  left: 18px;
  background: #fff;
  transition: 300ms;
  color: ${(props) => props.theme.LlineColor};
`;
const EmailLoginInput = styled.input`
  outline: none;
  width: 100%;
  padding: 18px;
  border: 1px solid transparent;
  border-bottom: 1px solid ${(props) => props.theme.LlineColor};
  border-radius: 3px;

  &:focus {
    border: 1px sold ${(props) => props.theme.ConceptColor};
  }
  &:valid + ${EmailLoginLabel} {
    top: -5px;
    font-size: 13px;
    color: #8d8d8d;
  }
  &:invalid + ${EmailLoginLabel} {
  }
  &:focus + ${EmailLoginLabel} {
    top: -5px;
    font-size: 13px;
    transition: 300ms;
  }
`;
const EmailLoginBtn = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 56px;
  background-color: ${(props) => (props.ready ? "blue" : "#dddfe4")}!important;
  border: 0;
  border-radius: 3px;
`;
const Span = styled.span``;

const Input = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);

  const submitChack = (email, password) => {
    if (email !== "" && password !== "") {
      setReady(true);
    } else {
      setReady(false);
    }
  };

  const onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    console.log(id , value)
    switch (id) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.log(`error`);
    }
    submitChack(email, password);
  };


  useEffect(() => {
    submitChack(email, password);
  }, [email, password]);

  return (
    <EmailLoginContainer>
      <Span>이메일 로그인</Span>

      <EmailLoginBox>
        <EmailLoginInput
          type="text"
          name="email"
          id="email"
          value={email}
          required
          onChange={onChange}
          ref={input => input && input.focus()}
        />
        <EmailLoginLabel htmlFor="email"> 이메일 주소 </EmailLoginLabel>
      </EmailLoginBox>

      <EmailLoginBox>
        <EmailLoginInput
          type="password"
          name="password"
          id="password"
          value={password}
          required
          onChange={onChange}
        />
        <EmailLoginLabel htmlFor="password"> 비밀번호 </EmailLoginLabel>
      </EmailLoginBox>
      <EmailLoginBtn ready={ready}>로그인</EmailLoginBtn>
      <span>비밀번호 찾기 , #1ea1f7 왼쪽 배치</span>
      <span>회원가입하기 언더라인 , #1ea1f7 오른쪽 배치</span>
    </EmailLoginContainer>
  );
};

export default Input;
