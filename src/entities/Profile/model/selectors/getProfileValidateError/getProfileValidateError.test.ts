import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateError } from './getProfileValidateError'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { ValidateProfileError } from '../../types/profile'

describe('getProfileValidateError.test', () => {
  test('should return error', () => {
    const error = [ValidateProfileError.INCORRECT_AGE]

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: error,
      },
    }

    expect(getProfileValidateError(state as StateSchema)).toEqual(error)
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined)
  })
})
