import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { username: '123' }
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('1232')),
    ).toEqual({ username: '1232' })
  })
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' }
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('1232')),
    ).toEqual({ password: '1232' })
  })
})