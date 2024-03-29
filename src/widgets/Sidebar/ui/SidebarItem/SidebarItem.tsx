import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { SidebarItemType } from '../../model/types/sidebar'

interface SidebarItemProps {
  item?: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  if (!item) {
    return <></>
  }

  const isAuth = useSelector(getUserAuthData)

  if (!isAuth && item.authOnly) {
    return null
  }

  return (
    <AppLink
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{item.text}</span>
    </AppLink>
  )
})
