import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  ShadowContainer,
  ImageEl,
  LoginFormContainer,
  LoginDivContainer,
  LabelEl,
  InputEl,
  LoginButton,
  Error,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    visibility: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({visibility: true})
    } else {
      this.setState({visibility: false})
    }
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitLoginForm = async event => {
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
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      visibility,
      showSubmitError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <ShadowContainer>
          <ImageEl
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginFormContainer onSubmit={this.onSubmitLoginForm}>
            <LoginDivContainer>
              <LabelEl>USERNAME</LabelEl>
              <InputEl
                value={username}
                placeholder="Username"
                type="text"
                onChange={this.onChangeUsername}
              />
            </LoginDivContainer>
            <LoginDivContainer>
              <LabelEl>PASSWORD</LabelEl>
              <InputEl
                value={password}
                placeholder="Password"
                type={visibility ? 'text' : 'password'}
                onChange={this.onChangePassword}
              />
            </LoginDivContainer>
            <LoginDivContainer direction="row">
              <InputEl
                id="checkbox"
                type="checkbox"
                onChange={this.showPassword}
              />
              <LabelEl htmlFor="checkbox" cursor="pointer">
                Show Password
              </LabelEl>
            </LoginDivContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError ? <Error>*{errorMsg}</Error> : ''}
          </LoginFormContainer>
        </ShadowContainer>
      </LoginContainer>
    )
  }
}

export default Login
