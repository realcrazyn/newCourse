import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.atrticeDetailsComments?.isLoading
export const getArticleCommentsError = (state: StateSchema) =>
  state.atrticeDetailsComments?.error
