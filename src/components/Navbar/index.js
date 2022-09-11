import {HiHome} from 'react-icons/hi'
import {AiFillFire, AiFillTwitterCircle} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {TiSocialLinkedinCircular} from 'react-icons/ti'
// import {} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import AppTheme from '../../context/Theme'
// import {ListContainer} from '../Header/styledComponents'
import {
  NavContainer,
  ListContainer,
  ListItem,
  SpanEl,
  SocialMediaContainer,
  SocialMediaIconsContainer,
  ContactUsPara,
  InfoPara,
  Responsive,
} from './styledComponents'

class Navbar extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const hoverBgColor = activeTheme === 'light' ? '#616e7c' : '#475569'

          return (
            <NavContainer>
              <Responsive>
                <ListContainer>
                  <Link to="/">
                    <ListItem color={color} bgColor={hoverBgColor}>
                      <span className="nav-icons">
                        <HiHome size={30} />
                      </span>
                      {'  '}
                      <SpanEl>Home</SpanEl>
                    </ListItem>
                  </Link>
                  <Link to="/trending">
                    <ListItem color={color} bgColor={hoverBgColor}>
                      <span className="nav-icons">
                        <AiFillFire size={30} />
                      </span>
                      {'  '}
                      <SpanEl>Trending</SpanEl>
                    </ListItem>
                  </Link>
                  <Link to="/gaming">
                    <ListItem color={color} bgColor={hoverBgColor}>
                      <span className="nav-icons">
                        <SiYoutubegaming size={30} />
                      </span>
                      {'  '}
                      <SpanEl>Gaming</SpanEl>
                    </ListItem>
                  </Link>
                  <Link to="/saved-videos">
                    <ListItem color={color} bgColor={hoverBgColor}>
                      <span className="nav-icons">
                        <MdPlaylistAdd size={30} />
                      </span>
                      {'  '}
                      <SpanEl>Saved videos</SpanEl>
                    </ListItem>
                  </Link>
                </ListContainer>
                <SocialMediaContainer>
                  <ContactUsPara color={`${color}`}>CONTACT US</ContactUsPara>
                  <SocialMediaIconsContainer>
                    {/* <MdOutlineFacebook size={40} /> */}
                    <AiFillTwitterCircle size={40} color={color} />
                    <TiSocialLinkedinCircular size={40} color={color} />
                  </SocialMediaIconsContainer>
                  <InfoPara color={`${color}`}>
                    Enjoy! Now to see your channels and recommedations!
                  </InfoPara>
                </SocialMediaContainer>
              </Responsive>
            </NavContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Navbar
