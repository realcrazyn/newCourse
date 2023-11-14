import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'

import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginPassowrd } from '../../model/selectors/getLoginPassowrd/getLoginPassowrd'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DunamicModuleLoader/DynamicModuleLoader'
import { Loader } from 'shared/ui/Loader/Loader'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = { loginForm: loginReducer }

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const error = useSelector(getLoginError)
  const password = useSelector(getLoginPassowrd)
  const isLoading = useSelector(getLoginLoading)
  const username = useSelector(getLoginUsername)

  const dispatch = useDispatch()

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch],
  )
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch],
  )
  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password: password, username: username }))
  }, [dispatch, password, username])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('login-title')} />
        {isLoading && <Loader />}
        {error && <Text text={t('login_error')} theme={TextTheme.ERROR} />}

        <Input
          className={cls.input}
          value={username}
          onChange={onChangeUsername}
          autoFocus
          placeholder={t('log_username')}
        />
        <Input
          className={cls.input}
          value={password}
          onChange={onChangePassword}
          placeholder={t('log_password')}
        />
        <Button
          disabled={isLoading}
          onClick={onLoginClick}
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('login')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
