import axios from 'axios'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchProfileData } from './fetchFileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { profileActions } from '../../slice/profileSlice'

describe('fetchProfileData.test', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  test('sucess request', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    const profileData = {
      first: 'Alex',
      lastname: 'Vish',
      age: 29,
      currency: Currency.USD,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin1',
      avatar:
        'https://avatars.mds.yandex.net/i?id=3e54935a746b9607d363f1440785d04d7dab9394-7664914-images-thumbs&n=13',
    }
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileData)
  })

  test('failed request', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
