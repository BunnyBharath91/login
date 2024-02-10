import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onLoginSuccess = msg => {
    console.log(msg)
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = msg => {
    console.log(msg)
    this.setState({error: "*Username and Password didn't match"})
  }

  onSubmitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response.ok)

    if (username !== '' && password !== '') {
      if (response.ok === true) {
        this.onLoginSuccess('success')
        this.setState({error: ''})
      } else {
        this.onLoginFailure('failure')
      }
    } else {
      this.onLoginFailure('failure')
    }

    this.setState({
      username: '',
      password: '',
    })
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserNameContainer = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="inputUserName" className="input-label">
          USERNAME
        </label>
        <input
          type="text"
          id="inputUserName"
          value={username}
          onChange={this.onChangeUserName}
          className="input-bar"
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordContainer = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="inputPassword" className="input-label">
          PASSWORD
        </label>
        <input
          type="password"
          id="inputPassword"
          value={password}
          onChange={this.onChangePassword}
          className="input-bar"
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    const {error} = this.state
    return (
      <div className="login-container">
        <img
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-img"
        />
        <form className="form-container" onSubmit={this.onSubmitDetails}>
          <img
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
          />
          <div className="input-container">
            {this.renderUserNameContainer()}
          </div>
          <div className="input-container">
            {this.renderPasswordContainer()}
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <p className="err-msg">{error}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
