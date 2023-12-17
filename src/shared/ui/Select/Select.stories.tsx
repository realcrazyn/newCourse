import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from './Select'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Light = Template.bind({})
Light.args = {
  label: 'Укажите значение',
  options: [
    { content: '123', value: '123' },
    { content: '1asdasd23', value: 'dfsfd123' },
    { content: '121233', value: '123123' },
  ],
  value: '123123',
}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
