import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileReadonly.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }

    expect(getProfileReadonly(state as StateSchema)).toBeTruthy()
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
