import { getQueryParams } from './addQueryParams'

describe('addQueryParams.test', () => {
  test('test with one param', () => {
    const param = getQueryParams({
      test: 'value',
    })
    expect(param).toBe('?test=value')
  })
  test('test with multile param', () => {
    const param = {
      test: 'value',
      second: '2',
    }
    expect(param).toBe('?test=value&second=2')
  })
  test('test with undefined', () => {
    const param = getQueryParams({
      test: 'value',
      second: undefined,
    })
    expect(param).toBe('?test=value')
  })
})
