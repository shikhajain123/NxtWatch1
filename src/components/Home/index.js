import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ErrorImage from '../ErrorImage'
import AppTheme from '../../context/Theme'
import {HomeContainer, BannerContainer, AppLogo} from './styledComponents'

class Home extends Component {
  state = {
    searchInput: '',
    videoArray: [],
    status: '',
    isLoading: true,
    display: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data.videos)
      await this.setState({
        videoArray: data.videos,
        status: true,
        isLoading: false,
      })
    }
    this.setState({status: false})
  }

  renderBanner = () => (
    <>
      <BannerContainer>
        <AppLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
      </BannerContainer>
    </>
  )

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading, videoArray, searchInput, status} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, changeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f9f9f9' : '#181818'

          return (
            <>
              <HomeContainer data-testid="home" bgColor={bgColor} color={color}>
                {this.renderBanner}
                {isLoading ? this.renderLoader : this.renderVideos}
              </HomeContainer>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Home
