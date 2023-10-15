import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavparProps {
  className?: string
}

export const Navbar = ({ className }: NavparProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        {' '}
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          {t('main_nav')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          {t('about_nav')}
        </AppLink>
      </div>
    </div>
  )
}
