import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons"; //참고용 로고
import { Link } from "react-router-dom";

import GoogleSignin from "./Google";
import Email from "./Email";

const BackGournd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f3f3f3;
  @media (max-width: 720px) {
    background-color: #fff;
    align-items: flex-start;
  }
`;

const SigninContainer = styled.div`
  width: 450px;
  //min-height: 682px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  background-color: #fff;
  @media (max-width: 720px) {
    width: 100%;
    box-shadow: none;
  }
`;
const SigninForm = styled.form`
  width: 100%auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 0 40px;
  @media (max-width: 720px) {
    margin: 0 16px;
  }
`;

const SiteLogo = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: ${(props) => props.theme.ConceptColor};
`;

const OrContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const OrLine = styled.div`
  width: 100%;
  height: 1px;
  z-index: 1;
  position: absolute;
  top: 6px;
  border-bottom: 1px solid ${(props) => props.theme.LlineColor};
`;
const OrSpan = styled.span`
  z-index: 2;
  background-color: ${(props) => props.theme.LBackColor};
  font-size: 13px;
  color: ${(props) => props.theme.GrayColor};
  padding: 0 15px;
`;

const SocialLoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Span = styled.span``;
const Singin = () => {
  return (
    <BackGournd>
      <SigninContainer>
        <SigninForm>
          <Link to="/">
            <SiteLogo icon={faAccusoft} />
          </Link>

          <Email />

          <OrContainer>
            <OrSpan>OR</OrSpan>
            <OrLine />
          </OrContainer>

          <SocialLoginContainer>
            {/*         <img src={kakao} alt="" />
             */}{" "}
            <Span>간편 로그인</Span>
            <GoogleSignin />
          </SocialLoginContainer>
        </SigninForm>
      </SigninContainer>
    </BackGournd>
  );
};

export default Singin;
