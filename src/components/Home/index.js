import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import SideMenu from '../SideMenu'
import PremiumBanner from '../PremiumBanner'
import HomeVideoCard from '../HomeVideoCard'
import SavedContext from '../../SavedContext/savedContext'

import {
  HomeContainer,
  HomeBannerContainer,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchBtn,
  LoaderContainer,
  FailureImg,
  FailureHead,
  FailureDes,
  FailRetryBtn,
  VideosList,
} from './styledComponents'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <HomeContainer>
          <SideMenu />
        </HomeContainer>
      </>
    )
  }
}

export default Home
