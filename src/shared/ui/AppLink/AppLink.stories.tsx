import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'link',
}
export const Secondary = Template.bind({})
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'link',
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'link',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'link',
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
