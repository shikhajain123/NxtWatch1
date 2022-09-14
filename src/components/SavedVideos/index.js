import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideMenu from '../SideMenu'

import SavedVideoCard from '../SavedVideoCard'
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
  SavedVideoContainer,
} from './styledComponents'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SavedVideos extends Component {
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
          const {isDarkTheme, savedVideosList} = value

          const renderTrending = () => (
            <TrendingTopContainer isDarkTheme={isDarkTheme}>
              <TrendingIconContainer isDarkTheme={isDarkTheme}>
                <HiFire size={25} />
              </TrendingIconContainer>
              <TrendingHead isDarkTheme={isDarkTheme}>
                Saved Videos
              </TrendingHead>
            </TrendingTopContainer>
          )

          const renderVideosList = () => (
            <TrendingVideosList>
              {savedVideosList.map(eachVideo => (
                <SavedVideoCard
                  key={eachVideo.id}
                  videoCard={eachVideo}
                  isDarkTheme={isDarkTheme}
                />
              ))}
            </TrendingVideosList>
          )

          const renderFailureView = () => (
            <SavedVideoContainer>
              <FailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                alt="no saved videos"
              />
              <FailureHead>No saved videos found</FailureHead>
              <FailureDes>
                You can save your videos while watching them
              </FailureDes>
            </SavedVideoContainer>
          )

          const renderTrendingVideosList = () => (
            <TrendingVideosListContainer>
              {renderTrending()}
              {renderVideosList()}
            </TrendingVideosListContainer>
          )

          return (
            <>
              <Header />
              <TrendingContainer
                isDarkTheme={isDarkTheme}
                data-testid="savedVideos"
              >
                <SideMenu />
                {savedVideosList.length === 0
                  ? renderFailureView()
                  : renderTrendingVideosList()}
              </TrendingContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default SavedVideos
