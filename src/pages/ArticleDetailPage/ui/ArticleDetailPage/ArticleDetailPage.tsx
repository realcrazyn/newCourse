import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetailPage.module.scss'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailPageProps {
  className?: string
}

export const ArticleDetailPage = (props: ArticleDetailPageProps) => {
  const { t } = useTranslation()
  const { className } = props

  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
        {t('no_article')}
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailPage)
