import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileLoading } from './getProfileLoading'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }

    expect(getProfileLoading(state as StateSchema)).toBeTruthy()
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileLoading(state as StateSchema)).toEqual(undefined)
  })
})
