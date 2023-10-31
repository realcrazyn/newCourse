import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input className={cls.input} autoFocus placeholder={t('log_username')} />
      <Input className={cls.input} placeholder={t('log_password')} />
      <Button className={cls.loginBtn}>{t('login')}</Button>
    </div>
  )
}
