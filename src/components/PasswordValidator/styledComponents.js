// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const PasswordContainer = styled.div`
  background-color: #475569;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
`

export const Header = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  color: #f8fafc;
`

export const InputEl = styled.input`
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
  border-radius: 5px;
  padding-bottom: 8px;
  padding-top: 8px;
  margin-top: 20px;
`
export const ErrorPara = styled.p`
  color: #ef4444;
`
