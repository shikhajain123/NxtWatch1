import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GiConsoleController} from 'react-icons/gi'
import Header from '../Header'
import SideMenu from '../SideMenu'

import GamingVideoCard from '../GamingVideoCard'
import SavedContext from '../../SavedContext/savedContext'

import {
  TrendingContainer,
  TrendingTopContainer,
  TrendingIconContainer,
  TrendingVideosListContainer,
  TrendingHead,
  TrendingVideosList,
  LoaderContainer,
  FailureImg,
  FailureHead,
  FailureDes,
  FailRetryBtn,
  VideosList,
} from './styledComponents'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    isLoading: status.loading,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({videosList: updatedData, isLoading: status.success})
    } else {
      this.setState({isLoading: status.failure})
    }
  }

  onClickRetryBtn = () => {
    this.setState({isLoading: status.loading}, this.getVideosList)
  }

  render() {
    const {isLoading, videosList} = this.state

    return (
      <SavedContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const renderTrending = () => (
            <TrendingTopContainer isDarkTheme={isDarkTheme}>
              <TrendingIconContainer isDarkTheme={isDarkTheme}>
                <GiConsoleController size={25} />
              </TrendingIconContainer>
              <TrendingHead isDarkTheme={isDarkTheme}>Gaming</TrendingHead>
            </TrendingTopContainer>
          )

          const renderVideosList = () => (
            <TrendingVideosList>
              {videosList.map(eachVideo => (
                <GamingVideoCard key={eachVideo.id} videoCard={eachVideo} />
              ))}
            </TrendingVideosList>
          )

          const renderFailureView = () => (
            <LoaderContainer>
              <FailureImg
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <FailureHead>Oops! Something Went Wrong</FailureHead>
              <FailureDes>
                We are having some trouble to complete your request. Please try
                again.
              </FailureDes>
              <FailRetryBtn type="button" onClick={this.onClickRetryBtn}>
                Retry
              </FailRetryBtn>
            </LoaderContainer>
          )

          const renderTrendingVideosList = () => (
            <TrendingVideosListContainer>
              {renderTrending()}
              {renderVideosList()}
            </TrendingVideosListContainer>
          )

          const renderTrendingVideos = () =>
            isLoading === status.success
              ? renderTrendingVideosList()
              : renderFailureView()

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                width="50"
                height="50"
              />
            </LoaderContainer>
          )

          return (
            <>
              <Header />
              <TrendingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                <SideMenu />
                {isLoading === status.loading
                  ? renderLoader()
                  : renderTrendingVideos()}
              </TrendingContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default Gaming
