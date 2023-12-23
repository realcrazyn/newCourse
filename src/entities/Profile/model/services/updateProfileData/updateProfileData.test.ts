import axios from 'axios'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { upadateProfileData } from './updateProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from '../../types/profile'

describe('upadateProfileData.test', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

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

  test('sucess request', async () => {
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
    const thunk = new TestAsyncThunk(upadateProfileData, {
      profile: {
        form: profileData,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileData)
  })

  test('failed request', async () => {
    const thunk = new TestAsyncThunk(upadateProfileData, {
      profile: {
        form: profileData,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })
  test('failed request', async () => {
    const thunk = new TestAsyncThunk(upadateProfileData, {
      profile: {
        form: { ...profileData, lastname: '' },
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})
