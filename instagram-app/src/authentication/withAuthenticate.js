import React from 'react'

const withAuthenticate = PostsPage => LoginPage => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: !!localStorage.getItem('username')
      }
    }

    componentDidMount() {
      const loggedIn = localStorage.getItem('username')
      this.setState({ loggedIn })
    }

    componentDidUpdate() {
      const loggedIn = !!localStorage.getItem('username')
      if(loggedIn !== this.state.loggedIn){
        this.setState({ loggedIn });
      }
    }
    

    render() {
      return this.state.loggedIn
      ? <PostsPage {...this.props} />
      : <LoginPage {...this.props} />;
    }
  }
}

export default withAuthenticate
