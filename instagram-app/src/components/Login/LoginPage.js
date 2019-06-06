import React from 'react'
import styled from 'styled-components'
import Login from './Login'

const MainLoginPageDiv = styled.div`
  min-height: 100%;
  padding-bottom: 40px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const LoginPage = ({ username, password,
  loginInputChangeHandler, loginHandler }) => {
    
  return (
    <MainLoginPageDiv>
      <Login
        username={username}
        password={password}
        loginInputChangeHandler={loginInputChangeHandler}
        loginHandler={loginHandler}
      />
    </MainLoginPageDiv>
  )
}

export default LoginPage
