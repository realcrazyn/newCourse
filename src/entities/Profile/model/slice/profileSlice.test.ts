import { Currency } from 'entities/Currency'
import { ProfileSchema, ValidateProfileError } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'
import { Country } from 'entities/Country'
import { upadateProfileData } from '../services/updateProfileData/updateProfileData'

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true })
  })
  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({ readonly: true })
  })
  test('test update', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: '1234' }),
      ),
    ).toEqual({ form: { username: '1234' } })
  })
  test('test update profile srvice pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    }
    expect(
      profileReducer(state as ProfileSchema, upadateProfileData.pending),
    ).toEqual({ isLoading: true, validateError: undefined })
  })
  test('test update profile srvice fullfilled', () => {
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

    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      readonly: true,
      error: '',
      data: undefined,
      form: undefined,
      validateError: undefined,
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        upadateProfileData.fulfilled(profileData, ''),
      ),
    ).toEqual({
      isLoading: false,
      readonly: true,
      error: '',
      data: profileData,
      form: profileData,
      validateError: undefined,
    })
  })
})
