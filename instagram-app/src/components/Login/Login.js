import React from 'react'
import styled from 'styled-components'
import instagramTextLogo from '../../assets/img/instagram-text-logo.png'

const LoginComponentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e6e6e6;;
  width: 320px;
  margin: 0 auto;
  margin-top: 10%;
  background-color: white;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LoginInstaLogoDiv = styled.div`
  margin: 30px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const LoginInput = styled.input`
  width: 230px;
  background-color: #FAFAFA;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  height: 25px;
  margin-bottom: 5px;
  padding-left: 8px;

  &::placeholder {
    color: #999999;
    letter-spacing: 1px;
  }
`;

const LoginSubmitInput = styled.input`
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  padding: 10px 0; 
  position: relative;
  margin-top: 5px;
  cursor: pointer;
`;

const DisclamerParagraph = styled.p`
  font-size: 10px;
  padding: 20px;
`;

const Login = ({ username, password,
  loginInputChangeHandler, loginHandler }) => {

  return (
    <LoginComponentDiv>
      <LoginInstaLogoDiv>
        <img src={instagramTextLogo} width={200} alt="Instagram" />
      </LoginInstaLogoDiv>

      <LoginForm
        onSubmit={loginHandler}
      >
        <LoginInput
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={loginInputChangeHandler}
        />
        <LoginInput
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={loginInputChangeHandler}
        />
        <LoginSubmitInput
          type="submit"
          value="Login"
        />
      </LoginForm>
      <DisclamerParagraph>
        (This is a project made with React. No real data is used)
      </DisclamerParagraph>
    </LoginComponentDiv>
  )
}

export default Login
