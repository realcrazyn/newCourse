import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileError.test', () => {
  test('should return error', () => {
    const error = 'some error'

    const state: DeepPartial<StateSchema> = {
      profile: {
        error,
      },
    }

    expect(getProfileError(state as StateSchema)).toEqual(error)
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
