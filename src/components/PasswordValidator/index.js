// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Header,
  Paragraph,
  InputEl,
  ErrorPara,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangeInput = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Header>Password Validator</Header>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputEl type="password" value={password} onChange={onChangeInput} />
        {password.length < 8 ? (
          <ErrorPara>Your password must be at least 8 characters</ErrorPara>
        ) : (
          ''
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
