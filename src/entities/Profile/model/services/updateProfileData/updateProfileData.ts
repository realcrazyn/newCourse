import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { Profile } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileData'

export const upadateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(`prfile/upadateProfileData`, async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi

  const formData = getProfileForm(getState())
  try {
    const response = await extra.api.put<Profile>(`/profile`, formData)

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
