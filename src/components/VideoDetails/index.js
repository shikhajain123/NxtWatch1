import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideMenu from '../SideMenu'
import SavedContext from '../../SavedContext/savedContext'

import {
  TrendingContainer,
  LoaderContainer,
  VideoDetailsViewContainer,
  VideoPlayerContainer,
  ReactPlayerE,
  FailureImg,
  FailureHead,
  FailureDes,
  FailRetryBtn,
  VideoDetailsContainer,
  VideoDescription,
} from './styledComponents'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    isLoading: status.loading,
    videoDetails: [],
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({videoDetails: updatedData, isLoading: status.success})
    } else {
      this.setState({isLoading: status.failure})
    }
  }

  render() {
    const {isLoading, videoDetails} = this.state
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails

    return (
      <SavedContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            savedVideosList,
            likedVideoIdStatusList,
            addSavedVideos,
            removedSavedVideos,
            changeLikeStatus,
          } = value

          const renderLoader = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                sss
                width="50"
                height="50"
              />
            </LoaderContainer>
          )

          const renderVideoPlayer = () => (
            <ReactPlayerE controls url={videoUrl} height="60vh" />
          )

          const renderVideoDetails = () => (
            <>
              <VideoDescription isDarkTheme={isDarkTheme}>
                {title}
              </VideoDescription>
            </>
          )

          const renderVideoDetailsFailureView = () => (
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

          const renderVideoDetailsView = () =>
            isLoading === status.success ? (
              <VideoDetailsViewContainer>
                {renderVideoPlayer()}
                {renderVideoDetails()}
              </VideoDetailsViewContainer>
            ) : (
              renderVideoDetailsFailureView()
            )

          return (
            <>
              <Header />
              <TrendingContainer isDarkTheme={isDarkTheme} data-testid="">
                <SideMenu />
                <VideoPlayerContainer>
                  {isLoading === status.loading
                    ? renderLoader()
                    : renderVideoDetailsView()}
                </VideoPlayerContainer>
              </TrendingContainer>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}

export default VideoDetails
