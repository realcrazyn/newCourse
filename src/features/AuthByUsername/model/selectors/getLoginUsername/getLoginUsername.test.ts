import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginPassowrd.test', () => {
  test('should return Username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123',
      },
    }

    expect(getLoginUsername(state as StateSchema)).toEqual('123')
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
