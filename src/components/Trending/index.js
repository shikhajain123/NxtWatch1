import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideMenu from '../SideMenu'

import TrendingVideoCard from '../TrendingVideoCard'
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

class Trending extends Component {
  state = {
    isLoading: status.loading,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
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
                <HiFire size={25} />
              </TrendingIconContainer>
              <TrendingHead isDarkTheme={isDarkTheme}>Trending</TrendingHead>
            </TrendingTopContainer>
          )

          const renderVideosList = () => (
            <TrendingVideosList>
              {videosList.map(eachVideo => (
                <TrendingVideoCard
                  key={eachVideo.id}
                  videoCard={eachVideo}
                  isDarkTheme={isDarkTheme}
                />
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
              <TrendingContainer
                isDarkTheme={isDarkTheme}
                data-testid="trending"
              >
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

export default Trending
