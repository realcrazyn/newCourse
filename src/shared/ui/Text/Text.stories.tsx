import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Light = Template.bind({})
Light.args = {
  title: `This is title`,
  text: `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        rerum possimus, dolores nisi nihil voluptatem hic porro. Similique quasi
        omnis, nostrum ex beatae fugit ducimus! Aliquid necessitatibus vitae
        laboriosam quos.`,
}
export const Error = Template.bind({})
Error.args = {
  title: `This is title`,
  theme: TextTheme.ERROR,
  text: `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        rerum possimus, dolores nisi nihil voluptatem hic porro. Similique quasi
        omnis, nostrum ex beatae fugit ducimus! Aliquid necessitatibus vitae
        laboriosam quos.`,
}
export const Dark = Template.bind({})
Dark.args = {
  title: `This is title`,

  text: `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        rerum possimus, dolores nisi nihil voluptatem hic porro. Similique quasi
        omnis, nostrum ex beatae fugit ducimus! Aliquid necessitatibus vitae
        laboriosam quos.`,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
