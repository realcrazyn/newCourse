import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: '',
  data: undefined,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
    },
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice