import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticlePageInited } from '../../selectors/articlesPageSelectors'
import { articlePageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const inited = getArticlePageInited(getState())

  if (!inited) {
    dispatch(articlePageActions.initState())
    dispatch(fetchArticlesList({}))
  }
})
