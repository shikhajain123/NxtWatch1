import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkTo = styled(Link)`
  text-decoration: none;
`

export const VideosItem = styled.li`
  list-style-type: none;
  padding: 40px 20px 0 0;
`

export const VideoImg = styled.img`
  width: 300px;
  margin-bottom: 14px;
`

export const VideoCardContainer = styled.div`
  display: flex;
  margin-right: 6px;
`

export const VideoCardTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-size: 20px;
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  line-height: 1.7;
  margin: 0;
`

export const VideoCardChannel = styled.p`
  color: #64748b;
  font-size: 14px;
  font-weight: 400;
  margin: 8px 0;
`
