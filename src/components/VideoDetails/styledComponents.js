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
