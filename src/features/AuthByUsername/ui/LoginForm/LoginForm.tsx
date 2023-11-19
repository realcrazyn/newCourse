import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
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
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
export interface LoginFormProps {
  className?: string
  onSucess: () => void
}

const initialReducers: ReducersList = { loginForm: loginReducer }

const LoginForm = memo(({ className, onSucess }: LoginFormProps) => {
  const { t } = useTranslation()
  const error = useSelector(getLoginError)
  const password = useSelector(getLoginPassowrd)
  const isLoading = useSelector(getLoginLoading)
  const username = useSelector(getLoginUsername)

  const dispatch = useAppDispatch()

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
  const onLoginClick = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({ password: password, username: username }),
    )
    if (result.meta.requestStatus === 'fulfilled') {
      onSucess()
    }
  }, [onSucess, dispatch, password, username])

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
