import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { User, userActions } from 'entities/User'
import {
  TOKEN_LOCALSTORAGE_KEY,
  USER_LOCALSTORAGE_KEY,
} from 'shared/const/localStorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(`login/loginByUsername`, async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi

  try {
    const response = await extra.api.post<User>(`/login`, authData)

    if (!response.data) {
      throw new Error('no data error')
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    dispatch(userActions.setAuthData(response.data))

    extra.navigate?.('/about')
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
