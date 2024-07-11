import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesPageFilter.module.scss'
import { memo, useCallback } from 'react'
import {
  ArticleSortField,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import { Select } from 'shared/ui/Select/Select'
import { Card } from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { ArticleSortSelector } from 'entities/Article'
import { SortOrder } from 'shared/types'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'

interface ArticlesPageFilterProps {
  className?: string
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
  const { t } = useTranslation()
  const { className } = props
  const dispatch = useAppDispatch()

  const view = useSelector(getArticlePageView)
  const sort = useSelector(getArticlePageSort)
  const order = useSelector(getArticlePageOrder)
  const search = useSelector(getArticlePageSearch)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch],
  )

  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlePageActions.setOrder(order))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch],
  )

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [])

  const debouncedFetchData = useDebounce(fetchData, 1500)
  const onChangeSort = useCallback(
    (sort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(sort))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch],
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlePageActions.setSearch(search))
      dispatch(articlePageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch],
  )

  return (
    <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder="Поиск" value={search} onChange={onChangeSearch} />
      </Card>
    </div>
  )
})
