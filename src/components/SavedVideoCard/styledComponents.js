import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkTo = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const VideosItem = styled.li`
  display: flex;
  margin-bottom: 65px;
  list-style-type: none;
`

export const VideoImg = styled.img`
  width: 40%;
  margin-bottom: 10px;
`

export const VideoCardContainer = styled.div`
  padding: 10px 18px;
`

export const VideoImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 15px;
  margin-right: 15px;
`

export const VideoCard = styled.div``

export const VideoCardTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-size: 25px;
  font-weight: ${props => (props.isDarkTheme ? '600' : '700')};
  line-height: 1.7;
  margin: 0;
`

export const VideoCardChannel = styled.p`
  color: #616e7c;
  font-size: 14px;
  font-weight: 400;
  margin: 8px 0;
`
