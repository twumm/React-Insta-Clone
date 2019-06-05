import React from 'react'

const Login = ({ username, password, loginInputChangeHandler, loginHandler }) => {
  return (
    <div className="login-component">
      <form
        onSubmit={loginHandler}
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={loginInputChangeHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={loginInputChangeHandler}
        />
        <input
          type="submit"
          value="Login"
        />
      </form>
    </div>
  )
}

export default Login
