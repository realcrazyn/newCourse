import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article/model/types/article'

export const getArticlePageIsLoading = (state: StateSchema) =>
  state.articlePage?.isLoading || false

export const getArticlePageError = (state: StateSchema) =>
  state.articlePage?.error || ''

export const getArticlePageView = (state: StateSchema) =>
  state.articlePage?.view || ArticleView.BIG

export const getArticlePageNum = (state: StateSchema) => {
  return state.articlePage?.page || 1
}

export const getArticlePageLimit = (state: StateSchema) =>
  state.articlePage?.limit || 9
export const getArticlePageHasMore = (state: StateSchema) =>
  state.articlePage?.hasMore
