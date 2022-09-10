import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ShadowContainer = styled.div`
  padding: 80px 60px;
  box-shadow: 0px 0px 20px 5px #c6c9cc;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const ImageEl = styled.img`
  width: 150px;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const LoginDivContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
  margin-top: 16px;
  margin-bottom: 16px;
`

export const LabelEl = styled.label`
  margin-bottom: 2px;
  font-weight: bold;
  cursor: ${props => props.cursor};
`

export const InputEl = styled.input`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 600;
  outline: none;
  padding: 10px;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 600;
  outline: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 5px;
`

export const Error = styled.p`
  color: #ff0000;
`
