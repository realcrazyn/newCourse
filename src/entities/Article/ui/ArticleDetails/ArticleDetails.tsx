import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DunamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { memo, useCallback, useEffect } from 'react'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  getArticleIsLoading,
  getArticleDetailsData,
  getArticleDetailsError,
} from '../../model/selectors/articleDetails'
import { useSelector } from 'react-redux'
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
  className?: string
  id: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { t } = useTranslation()
  const { className, id } = props

  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
  }

  const dispatch = useAppDispatch()

  const isLoading = useSelector(getArticleIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        )
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        )
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            block={block}
            className={cls.block}
          />
        )
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton
          width={200}
          height={200}
          border={'50%'}
          className={cls.avatar}
        />
        <Skeleton width={'37%'} height={24} className={cls.title} />
        <Skeleton width={'50%'} height={32} className={cls.skeleton} />
        <Skeleton width={'100%'} height={200} className={cls.skeleton} />

        <Skeleton width={'100%'} height={200} className={cls.skeleton} />
      </>
    )
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('article_download_err')}
        theme={TextTheme.ERROR}
      />
    )
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} className={cls.avatar} src={article?.img} />
        </div>

        <Text
          size={TextSize.L}
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
        />
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <Text text={article?.views ? String(article?.views) : '0'} />
        </div>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
