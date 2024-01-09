import { StateSchema } from 'app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleIsLoading,
} from './articleDetails'

describe('getArticleDetails.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: '12',
    }

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: data,
      },
    }

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }

    expect(getArticleIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: '123',
      },
    }

    expect(getArticleDetailsError(state as StateSchema)).toEqual('123')
  })
})
