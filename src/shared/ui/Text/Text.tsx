import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMATY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text = ({
  className,
  text,
  title,
  theme = TextTheme.PRIMATY,
}: TextProps) => {
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
