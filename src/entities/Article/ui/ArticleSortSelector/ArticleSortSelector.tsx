import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleSortSelector.module.scss'
import { memo, useCallback, useMemo } from 'react'
import { Select, SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from '../../model/types/article'
import { SortOrder } from 'shared/types'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { t } = useTranslation()
  const { className, onChangeOrder, onChangeSort, order, sort } = props

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        content: 'возрастанию',
        value: 'asc',
      },
      {
        content: 'убыванию',
        value: 'desc',
      },
    ],
    [],
  )
  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        content: 'дате создания',
        value: ArticleSortField.CREATED,
      },
      {
        content: 'названию',
        value: ArticleSortField.TITLE,
      },
      {
        content: 'количеству просмотров',
        value: ArticleSortField.VIEWS,
      },
    ],
    [],
  )

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        value={sort}
        onChange={onChangeSort}
        options={sortFieldOptions}
        label="Сортировать ПО"
      ></Select>
      <Select
        value={order}
        onChange={onChangeOrder}
        options={orderOptions}
        label="по"
        className={cls.order}
      ></Select>
    </div>
  )
})
