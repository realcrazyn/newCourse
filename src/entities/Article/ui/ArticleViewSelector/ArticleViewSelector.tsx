import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { memo } from 'react'
import { ArticleView } from 'entities/Article/model/types/article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props

  const viewTypes = [
    { view: ArticleView.SMALL, icon: TiledIcon },
    { view: ArticleView.BIG, icon: ListIcon },
  ]

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
          className={classNames('', {
            [cls.notSelected]: viewType.view !== view,
          })}
        >
          <Icon Svg={viewType.icon} />
        </Button>
      ))}
    </div>
  )
})
