import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
}
export const Clear = Template.bind({})
Clear.args = {
  children: 'CLEAR',
  theme: ThemeButton.CLEAR,
}
export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Outlined',
  theme: ThemeButton.OUTLINE,
}
export const OutlinedDark = Template.bind({})
OutlinedDark.args = {
  children: 'Outlined',
  theme: ThemeButton.OUTLINE,
}
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
