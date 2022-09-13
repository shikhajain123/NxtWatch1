import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  min-height: 85vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  font-family: 'Roboto';
`

export const TrendingTopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px 0px 24px 48px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ebebeb')};
`

export const TrendingIconContainer = styled.div`
  padding: 20px;
  border-radius: 35px;
  color: #ff0000;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#d7dfe9')};
  margin-right: 18px;
`

export const TrendingHead = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#212121')};
`

export const TrendingVideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 32px 24px 24px 48px;
  margin: 0;
`

export const VideosContainer = styled.div`
  padding: 15px;
  height: 70%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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

export const VideosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const TrendingVideosListContainer = styled.div`
  flex-grow: 1;
  height: 85vh;
  overflow-y: auto;
`
