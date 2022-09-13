import {formatDistanceToNow} from 'date-fns'

import SavedContext from '../../SavedContext/savedContext'

import {
  LinkTo,
  VideosItem,
  VideoImg,
  VideoCardContainer,
  VideoCard,
  VideoCardTitle,
  VideoCardChannel,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoCard} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoCard

  const getTime = () => {
    const formattedDate = formatDistanceToNow(new Date(publishedAt))
    return formattedDate
  }

  return (
    <SavedContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LinkTo to={`/videos/${id}`}>
            <VideosItem>
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardContainer>
                <VideoCardTitle isDarkTheme={isDarkTheme}>
                  {title}
                </VideoCardTitle>
                <VideoCardChannel>{channel.name}</VideoCardChannel>
                <VideoCardChannel>
                  {viewCount} views . {getTime()} ago
                </VideoCardChannel>
              </VideoCardContainer>
            </VideosItem>
          </LinkTo>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default TrendingVideoCard
