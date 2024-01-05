import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailPage.module.scss'
import { memo } from 'react'

interface ArticleDetailPageProps {
  className?: string
}

export const ArticleDetailPage = (props: ArticleDetailPageProps) => {
  const { t } = useTranslation()
  const { className } = props

  return (
    <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
      ARTICLE DETAILS
    </div>
  )
}

export default memo(ArticleDetailPage)
