import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
  StoreDecorator({
    profile: {
      readonly: false,
      isLoading: false,
      form: {
        first: 'Alex',
        lastname: 'Vish',
        age: 29,
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Moscow',
        username: 'admin1',
        avatar:
          'https://avatars.mds.yandex.net/i?id=3e54935a746b9607d363f1440785d04d7dab9394-7664914-images-thumbs&n=13',
      },
    },
  }),
]
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      readonly: false,
      isLoading: false,
      form: {
        first: 'Alex',
        lastname: 'Vish',
        age: 29,
        currency: Currency.USD,
        country: Country.Russia,
        city: 'Moscow',
        username: 'admin1',
        avatar:
          'https://avatars.mds.yandex.net/i?id=3e54935a746b9607d363f1440785d04d7dab9394-7664914-images-thumbs&n=13',
      },
    },
  }),
]
