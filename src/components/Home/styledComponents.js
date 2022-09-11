import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 30px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  @media (max-width: 767px) {
    margin-top: 24px;
    padding: 30px 0 30px 20px;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-height: 40vh;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

export const AppLogo = styled.img`
  width: 80px;
`
