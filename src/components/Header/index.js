import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {ImCross} from 'react-icons/im'
import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import './index.css'

import AppTheme from '../../context/Theme'

import {
  HeaderContainer,
  Applogo,
  HeaderContentSmallContainer,
  ButtonElSmall,
  MenuContainer,
  ListContainer,
  ListItem,
  Para,
  HeaderContentLargeContainer,
  ButtonElLarge,
  ProfileImg,
} from './styledComponents'

class Header extends Component {
  state = {
    displayHeader: 'none',
  }

  onClickLogo = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  displayMenu = () => {
    this.setState({displayHeader: 'block'})
  }

  hideHeader = () => {
    this.setState({displayHeader: 'none'})
  }

  render() {
    const {displayHeader} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, changeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#231f20'
          const navColor = activeTheme === 'light' ? 'black' : 'white'
          const onChangeTheme = () => {
            const val = activeTheme === 'light' ? 'dark' : 'light'
            changeTheme(val)
          }
          return (
            <HeaderContainer bgColor={`${bgColor}`}>
              <Applogo
                src={
                  activeTheme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
                onClick={this.onClickLogo}
                cursor="pointer"
              />
              <HeaderContentSmallContainer>
                <ButtonElSmall onClick={onChangeTheme} color={`${color}`}>
                  {activeTheme === 'light' ? (
                    <BsMoon size={25} />
                  ) : (
                    <BsBrightnessHigh size={25} />
                  )}
                </ButtonElSmall>
                <ButtonElSmall onClick={this.displayMenu} color={`${color}`}>
                  <GiHamburgerMenu size={25} />
                </ButtonElSmall>

                <ButtonElSmall onClick={this.onClickLogout} color={`${color}`}>
                  <FiLogOut size={25} />
                </ButtonElSmall>
              </HeaderContentSmallContainer>
              <MenuContainer display={displayHeader}>
                <ListContainer
                  bgColor={activeTheme === 'light' ? '#e2e8f0' : '#000000'}
                >
                  <Para
                    onClick={this.hideHeader}
                    color={activeTheme === 'light' ? '#000' : ' #d7dfe9'}
                  >
                    <ImCross />
                  </Para>
                  <Link to="/" className={navColor}>
                    <ListItem color={`${color}`}>
                      <HiHome className="nav-icons" /> <span>Home</span>
                    </ListItem>
                  </Link>
                  <Link to="/trending" className={navColor}>
                    <ListItem color={`${color}`}>
                      <AiFillFire className="nav-icons" /> <span>Trending</span>
                    </ListItem>
                  </Link>
                  <Link to="/gaming" className={navColor}>
                    <ListItem color={`${color}`}>
                      <SiYoutubegaming className="nav-icons" />{' '}
                      <span>Gaming</span>
                    </ListItem>
                  </Link>
                  <Link to="/saved-videos" className={navColor}>
                    <ListItem color={`${color}`}>
                      <MdPlaylistAdd className="nav-icons" />{' '}
                      <span>Saved videos</span>
                    </ListItem>
                  </Link>
                </ListContainer>
              </MenuContainer>
              <HeaderContentLargeContainer>
                <ButtonElLarge
                  onClick={onChangeTheme}
                  color={color}
                  border="none"
                >
                  {activeTheme === 'light' ? (
                    <BsMoon size={25} />
                  ) : (
                    <BsBrightnessHigh size={25} className="animate" />
                  )}
                </ButtonElLarge>
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  margin="30px"
                />
                <ButtonElLarge
                  color={activeTheme === 'light' ? '#3b82f6' : '#ffffff'}
                  padding="5px 15px"
                  onClick={this.onClickLogout}
                >
                  Logout
                </ButtonElLarge>
              </HeaderContentLargeContainer>
            </HeaderContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default withRouter(Header)
