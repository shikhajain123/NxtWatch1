import SavedContext from '../../SavedContext/savedContext'

import {
  LinkTo,
  VideosItem,
  VideoImg,
  VideoCardTitle,
  VideoCardChannel,
} from './styledComponents'

const GamingVideoCard = props => {
  const {videoCard} = props
  const {id, title, thumbnailUrl, viewCount} = videoCard

  return (
    <SavedContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <LinkTo to={`/videos/${id}`}>
            <VideosItem>
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />

              <VideoCardTitle isDarkTheme={isDarkTheme}>{title}</VideoCardTitle>
              <VideoCardChannel>
                {viewCount} Watching Worldwide
              </VideoCardChannel>
            </VideosItem>
          </LinkTo>
        )
      }}
    </SavedContext.Consumer>
  )
}

export default GamingVideoCard
