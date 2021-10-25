import React from "react";
import styled from "styled-components";
import { useGoogleLogin } from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const GoogleBtn = styled.button`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 0;
  border-radius: 3px;
  padding: 0 20px;
  background-color: #e74c3c;
  color: #fff;
`;

const GoogleIcon = styled(FontAwesomeIcon)``;

const Span = styled.span``;

const clientId = process.env.REACT_APP_Google_KEY;

const onSuccess = (res) => {
  const {
    profileObj: { email, name, imageUrl },
  } = res;
  console.log(email, name, imageUrl);
};
const onFailure = (res) => {
  //에러나면 동작
  console.log(res);
};

const GoogleSignin = () => {
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });
  return (
    <GoogleBtn onClick={signIn}>
      <GoogleIcon icon={faGoogle} />
      <Span>Sign in with Google</Span>
    </GoogleBtn>
  );
};

export default GoogleSignin;
