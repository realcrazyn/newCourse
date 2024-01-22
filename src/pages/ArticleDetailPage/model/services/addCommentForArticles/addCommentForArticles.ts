import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { Comment } from 'entities/Comment'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticles = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(`articleDetails/addCommentForArticles`, async (text, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi

  const userData = getUserAuthData(getState())

  const article = getArticleDetailsData(getState())

  if (!userData || !text || !article) {
    rejectWithValue('no data')
  }

  try {
    const response = await extra.api.post<Comment>(`/comments`, {
      articleId: article?.id,
      userId: userData?.id,
      text,
    })

    if (!response.data) {
      throw new Error('no data error')
    }

    dispatch(fetchCommentsByArticleId(article?.id))

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
