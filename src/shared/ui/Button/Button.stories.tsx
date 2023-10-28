import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { Button, ButtonSize, ButtonTheme } from './Button'
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
  theme: ButtonTheme.CLEAR,
}
export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'CLEAR_INVERTED',
  theme: ButtonTheme.CLEAR_INVERTED,
}

export const Outlined = Template.bind({})
Outlined.args = {
  children: 'Outlined',
  theme: ButtonTheme.OUTLINE,
}
export const OutlinedSizeL = Template.bind({})
OutlinedSizeL.args = {
  children: 'Outlined',
  size: ButtonSize.L,
  theme: ButtonTheme.OUTLINE,
}
export const OutlinedSizeXL = Template.bind({})
OutlinedSizeXL.args = {
  children: 'Outlined',
  size: ButtonSize.XL,
  theme: ButtonTheme.OUTLINE,
}

export const Backgound = Template.bind({})
Backgound.args = {
  children: 'Backgound',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgoundDark = Template.bind({})
BackgoundDark.args = {
  children: 'BackgoundDark',
  theme: ButtonTheme.BACKGROUND,
}
BackgoundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}
export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}
export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}

export const BackgoundInverted = Template.bind({})
BackgoundInverted.args = {
  children: 'BackgoundDark',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const BackgoundInvertedDark = Template.bind({})
BackgoundInvertedDark.args = {
  children: 'BackgoundInvertedDark',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}
BackgoundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]
