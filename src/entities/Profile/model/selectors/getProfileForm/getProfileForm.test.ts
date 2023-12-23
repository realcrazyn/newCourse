import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

describe('getProfileForm.test', () => {
  test('should return form', () => {
    const form = {
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
        form,
      },
    }

    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })
  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
