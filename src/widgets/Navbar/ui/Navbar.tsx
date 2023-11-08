import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, userActions } from 'entities/User'
import { useDispatch, useSelector } from 'react-redux'

interface NavparProps {
  className?: string
}

export const Navbar = ({ className }: NavparProps) => {
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const [isAuthModal, setIsAuthModal] = useState(false)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal((prev) => false)
  }, [])
  const onShowModal = useCallback(() => {
    setIsAuthModal((prev) => true)
  }, [])
  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('logoff')}
        </Button>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('login')}
      </Button>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
