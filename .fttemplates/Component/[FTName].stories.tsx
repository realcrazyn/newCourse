import { ComponentStory, ComponentMeta } from '@storybook/react'

import {<FTName>} from './<FTName>'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: '<FTName>',
  component: <FTName>,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof <FTName>>

const Template: ComponentStory<typeof <FTName>> = (args) => <<FTName> />

export const Light = Template.bind({})
Light.args = {}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
