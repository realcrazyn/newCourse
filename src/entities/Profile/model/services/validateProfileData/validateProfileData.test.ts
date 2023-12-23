import axios from 'axios'
import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { validateProfileData } from './validateProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from '../../types/profile'

describe('validateProfileData.test', () => {
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
    const result = validateProfileData(profileData)

    expect(result).toEqual([])
  })

  test('without first and last name', async () => {
    const result = validateProfileData({
      ...profileData,
      first: '',
      lastname: '',
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
  test('without age', async () => {
    const result = validateProfileData({
      ...profileData,
      age: undefined,
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
  test('without country', async () => {
    const result = validateProfileData({
      ...profileData,
      country: undefined,
    })
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })
  test('without adata', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
