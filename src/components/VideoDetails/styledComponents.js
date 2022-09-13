import styled from 'styled-components'

import ReactPlayer from 'react-player'

export const TrendingContainer = styled.div`
  display: flex;
  min-height: 85vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  font-family: 'Roboto';
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const VideoDetailsViewContainer = styled.div``

export const VideoPlayerContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  padding-left: 60px;
  padding-top: 40px;
  padding-right: 60px;
  padding-bottom: 24px;
`

export const ReactPlayerE = styled(ReactPlayer)`
  margin-bottom: 25px;
`
export const FailureImg = styled.img`
  width: 300px;
`

export const FailureHead = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`

export const FailureDes = styled.p`
  color: #64748b;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`

export const FailRetryBtn = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  font-size: 12px;
  height: 35px;
  width: 85px;
  border-radius: 5px;
  border: none;
  outline: none;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
`

export const VideoDescription = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`
export const VideoLikesContainer = styled.div`
  display: flex;
`

export const ViewsCount = styled.p`
  font-size: 15px;
`
export const LikesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`
export const UserActionButton = styled.button`
  display: flex;
  align-items: center;
  color: ${props => (props.isSaved ? '#2563eb  ' : '#64748b')};
  background-color: transparent;
  font-size: 14px;
  padding: 0 8px;
  border: none;
  cursor: pointer;
`

export const LikeButton = styled(UserActionButton)`
  color: ${props => (props.likeStatus === 'LIKE' ? '#2563eb  ' : '#64748b')};
`

export const DislikeButton = styled(UserActionButton)`
  color: ${props => (props.likeStatus === 'DISLIKE' ? '#2563eb  ' : '#64748b')};
`

export const UserIconContainer = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-right: 6px;
`
export const HorizontalLine = styled.hr`
  background-color: #d7dfe9;
  border: 2px solid #d7dfe9;
  width: 100%;
  margin: 18px 0;
`
export const ChannelContainer = styled.div`
  display: flex;
`

export const ChannelImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 20px;
  margin-right: 15px;
`

export const ChannelNameContainer = styled.div``

export const ChannelName = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-size: 20px;
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  margin: 0 0 8px;
`

export const ChannelSubscriber = styled.p`
  color: #616e7c;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 25px;
`

export const ChannelDes = styled.p`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#475569')};
  font-size: 15px;
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  font-family: 'Roboto';
`
