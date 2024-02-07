import { ArticleList } from './ui/ArticleList/ArticleList'
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'

import { Article, ArticleView } from './model/types/article'
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema'
import { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector'

export type { Article, ArticleDetailsSchema }
export { ArticleView, ArticleList, ArticleDetails, ArticleViewSelector }
