import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileData.test', () => {
  test('should return data', () => {
    const data = {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    }

    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
