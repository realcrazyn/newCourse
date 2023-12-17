import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Avatar.module.scss'
import { CSSProperties, useMemo } from 'react'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const mods = {}

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [])

  return (
    <img
      alt={alt || 'avatar'}
      style={styles}
      className={classNames(cls.Avatar, mods, [className])}
      src={src}
    />
  )
}
