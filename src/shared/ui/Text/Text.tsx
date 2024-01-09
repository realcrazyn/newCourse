import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextTheme {
  PRIMATY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}
export enum TextSize {
  M = 'size_m',
  L = 'size_l',
  S = 'size_s',
}
interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMATY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props

  const mods: Mods = {
    [cls[align]]: true,
    [cls[theme]]: true,
    [cls[size]]: true,
  }

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
})
