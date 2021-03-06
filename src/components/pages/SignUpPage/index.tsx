import { useHistory } from 'react-router'
import { observer } from 'mobx-react-lite'

import SignUpForm from '../../organisms/SignUpForm'
import FormHeader from '../../organisms/FormHeader'
import StartFormTemplate from '../../templates/StartForm'

import user from '../../../store/user'

import { ISignUpData } from '../../../interface/user'

import { PathEnum } from '../../../routes/endpoints'

const SignUpPage = () => {
  const history = useHistory()

  const onSubmitHandler = (data: ISignUpData): void => {
    user.resetErrors()
    user.signUp(data)
  }

  const onRegisterAfterDelay = (): void => {
    user.isRegistered = false
    history.push(PathEnum.LOGIN)
  }

  const onAdditionalButtonClickHandler = (): void => {
    user.isRegistered = false
    history.push(PathEnum.LOGIN)
  }

  return (
    <StartFormTemplate
      isLoading={user.isLoading}
      form={
        <SignUpForm
          onSubmitHandler={onSubmitHandler}
          onRegisterAfterDelay={onRegisterAfterDelay}
          onAdditionalButtonClickHandler={onAdditionalButtonClickHandler}
        />
      }
      header={<FormHeader mainText="Sign Up" additionalText="Registration" />}
    />
  )
}

export default observer(SignUpPage)
