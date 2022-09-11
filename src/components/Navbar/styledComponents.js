import styled from 'styled-components'

export const NavContainer = styled.div`
  width: 25%;
`

export const Responsive = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: 1;
  padding: 0;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ListItem = styled.li`
  color: ${props => props.color};
  padding: 10px 0;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  transition: background-color 0.5s;
  transform-origin: center center;
  :hover {
    background-color: ${props => props.bgColor};
    color: black;
    .nav-icons {
      color: red;
    }
  }
`
export const SpanEl = styled.span`
  padding: 0 10px;
`
export const SocialMediaContainer = styled.div`
  margin-top: 450px;
  padding: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SocialMediaIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ContactUsPara = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.color};
`

export const InfoPara = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.color};
`
