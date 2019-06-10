import React from 'react'
import Login from './Login'

const LoginPage = ({ username, password, loginInputChangeHandler, loginHandler }) => {
  return (
    <div>
      <Login
        username={username}
        password={password}
        loginInputChangeHandler={loginInputChangeHandler}
        loginHandler={loginHandler}
      />
    </div>
  )
}

export default LoginPage
