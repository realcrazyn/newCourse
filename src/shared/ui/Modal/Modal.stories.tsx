import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Light = Template.bind({})
Light.args = {
  isOpen: true,
  children: `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        rerum possimus, dolores nisi nihil voluptatem hic porro. Similique quasi
        omnis, nostrum ex beatae fugit ducimus! Aliquid necessitatibus vitae
        laboriosam quos.`,
}
export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: `
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        rerum possimus, dolores nisi nihil voluptatem hic porro. Similique quasi
        omnis, nostrum ex beatae fugit ducimus! Aliquid necessitatibus vitae
        laboriosam quos.`,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
