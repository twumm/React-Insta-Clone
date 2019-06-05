import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginInputChangeHandler = event => {
    event.target.name === "username"
    ?
      setUsername(event.target.value)
    :
      setPassword(event.target.value)
  }
  
  const login = (event) => {
    event.preventDefault()
    localStorage.setItem('username', username)
    setUsername('')
    setPassword('')
  }

  return (
    <div className="login-component">
      <form
        onSubmit={login}
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
