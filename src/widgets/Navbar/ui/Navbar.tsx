import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavparProps {
  className?: string
}

export const Navbar = ({ className }: NavparProps) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}></div>
    </div>
  )
}
