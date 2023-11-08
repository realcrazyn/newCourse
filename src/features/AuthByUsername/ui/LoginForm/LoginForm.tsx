import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'
import { getLoginState } from '../../model/selectors/getLoginState'
interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const { password, username, error, isLoading } = useSelector(getLoginState)

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
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('login-title')} />
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
  )
})
