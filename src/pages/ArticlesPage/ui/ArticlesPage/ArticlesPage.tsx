import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPage.module.scss'
import { memo, useCallback, useEffect } from 'react'
import {
  Article,
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DunamicModuleLoader/DynamicModuleLoader'
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from '../../model/slices/articlePageSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlePage: articlePageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const error = useSelector(getArticlePageError)
  const view = useSelector(getArticlePageView)
  const page = useSelector(getArticlePageNum)
  const hasMore = useSelector(getArticlePageHasMore)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(articlePageActions.initState())
    dispatch(
      fetchArticlesList({
        page: 1,
      }),
    )
  })

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  )
}
export default memo(ArticlesPage)
