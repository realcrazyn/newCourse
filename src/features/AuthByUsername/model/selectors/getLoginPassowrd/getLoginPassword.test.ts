import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassowrd } from './getLoginPassowrd'

describe('getLoginPassowrd.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    }

    expect(getLoginPassowrd(state as StateSchema)).toEqual('123')
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginPassowrd(state as StateSchema)).toEqual('')
  })
})
