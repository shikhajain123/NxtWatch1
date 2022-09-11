import styled, {keyframes} from 'styled-components'

const FadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  padding: 15px;
  @media screen and (max-width: 767px) {
    padding-bottom: 30px;
  }
`

export const Applogo = styled.img`
  width: 160px;
  height: 40px;
  @media screen and (max-width: 767px) {
    width: 100px;
  }
`

export const HeaderContentSmallContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderContentLargeContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ButtonElSmall = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${props => props.color};
`
export const MenuContainer = styled.div`
  display: ${props => props.display};
  animation: ${FadeIn} 0.5s;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: ${props => props.bgColor};
  width: 103%;
  height: 50vh;
  top: -16px;
  left: -9px;
  padding-left: 40%;
  @media (min-width: 768px) {
    display: none;
  }
`
export const Para = styled.p`
  position: absolute;
  top: 45px;
  right: 50px;
  color: ${props => props.color};
`

export const ListItem = styled.li`
  padding: 10px 0;
  text-decoration: none;

  :hover {
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    .nav-icons {
      color: red;
    }
  }
`
export const ButtonElLarge = styled.button`
  color: ${props => props.color};
  border: ${props => props.border};
  border-color: ${props => props.color};
  background: transparent;
  outline: none;
  padding: ${props => props.padding};
  cursor: pointer;
`

export const ProfileImg = styled.img`
  width: 30px;
  margin-right: ${props => props.margin};
  margin-left: ${props => props.margin};
`
