import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
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
  VideoLikesContainer,
  ViewsCount,
  LikesContainer,
  UserIconContainer,
  LikeButton,
  DislikeButton,
  UserActionButton,
  HorizontalLine,
  ChannelContainer,
  ChannelImg,
  ChannelDes,
  ChannelNameContainer,
  ChannelSubscriber,
  ChannelName,
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

  changeSavedStatus = () => {
    this.setState(prevState => ({
      videoDetails: {
        ...prevState.videoDetails,
        isSaved: !prevState.videoDetails.isSaved,
      },
    }))
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

          const getTime = () => {
            const formattedDate = formatDistanceToNow(new Date(publishedAt))
            return formattedDate
          }

          const renderVideoPlayer = () => (
            <ReactPlayerE controls url={videoUrl} width="100%" height="55vh" />
          )

          const isVideoSaved = () => {
            const videoSaved = savedVideosList.find(
              eachVideo => eachVideo.id === id,
            )
            if (videoSaved === undefined) {
              return false
            }
            return true
          }

          const getVIdeoLikeStatus = () => {
            const videoObject = likedVideoIdStatusList.find(
              eachItem => eachItem.id === id,
            )
            if (videoObject === undefined) {
              return 'NONE'
            }
            return videoObject.status
          }

          const isSaved = isVideoSaved()
          const likeStatus = getVIdeoLikeStatus()

          const onClickLike = () => {
            if (likeStatus === 'LIKE') {
              changeLikeStatus(id, 'NONE')
            } else {
              changeLikeStatus(id, 'LIKE')
            }
          }

          const onClickDislike = () => {
            if (likeStatus === 'DISLIKE') {
              changeLikeStatus(id, 'NONE')
            } else {
              changeLikeStatus(id, 'DISLIKE')
            }
          }

          const onClickSave = () => {
            if (isSaved === false) {
              addSavedVideos(videoDetails)
            } else {
              removedSavedVideos(videoDetails)
            }
          }

          const onClickRetryBtn = () => {
            this.setState({isLoading: status.loading}, this.getVideoDetails)
          }

          const renderVideoDetails = () => (
            <>
              <VideoDescription isDarkTheme={isDarkTheme}>
                {title}
              </VideoDescription>
              <VideoLikesContainer>
                <ViewsCount>
                  {viewCount} views . {getTime()}
                </ViewsCount>
                <LikesContainer>
                  <LikeButton
                    type="button"
                    onClick={onClickLike}
                    likeStatus={likeStatus}
                  >
                    <UserIconContainer>
                      <BiLike />
                    </UserIconContainer>{' '}
                    Like
                  </LikeButton>
                  <DislikeButton
                    type="button"
                    onClick={onClickDislike}
                    likeStatus={likeStatus}
                  >
                    <UserIconContainer>
                      <BiDislike />
                    </UserIconContainer>{' '}
                    Like
                  </DislikeButton>
                  <UserActionButton
                    type="button"
                    isSaved={isSaved}
                    onClick={onClickSave}
                  >
                    <UserIconContainer>
                      <MdPlaylistAdd />
                    </UserIconContainer>{' '}
                    {isSaved ? 'Saved' : 'Save'}
                  </UserActionButton>
                </LikesContainer>
              </VideoLikesContainer>
            </>
          )

          const renderChannelDetails = () => (
            <ChannelContainer>
              <ChannelImg src={channel.profileImageUrl} alt="channel logo" />
              <ChannelNameContainer>
                <ChannelName isDarkTheme={isDarkTheme}>
                  {channel.name}
                </ChannelName>
                <ChannelSubscriber>
                  {channel.subscriberCount} subscribers
                </ChannelSubscriber>
                <ChannelDes isDarkTheme={isDarkTheme}>{description}</ChannelDes>
              </ChannelNameContainer>
            </ChannelContainer>
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
              <FailRetryBtn type="button" onClick={onClickRetryBtn}>
                Retry
              </FailRetryBtn>
            </LoaderContainer>
          )

          const renderVideoDetailsView = () =>
            isLoading === status.success ? (
              <VideoDetailsViewContainer>
                {renderVideoPlayer()}
                {renderVideoDetails()}
                <HorizontalLine />
                {renderChannelDetails()}
              </VideoDetailsViewContainer>
            ) : (
              renderVideoDetailsFailureView()
            )

          return (
            <>
              <Header />
              <TrendingContainer
                isDarkTheme={isDarkTheme}
                data-testid="videoItemDetails"
              >
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
