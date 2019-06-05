import React from 'react'
import LoginPage from '../components/Login/LoginPage'

const withAuthenticate = App => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      const user = localStorage.getItem('username')
      if (user) {
        this.setState({
          loggedIn: true
        })
      } else {
        this.setState({
          loggedIn: false
        })
      }
    }

    render() {

      if (this.state.loggedIn) {
        return (
          <App {...this.props} />
        )
      } else {
        return <LoginPage />
      }
    }
  }
}

export default withAuthenticate
