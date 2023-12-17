import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AvatarImg from './avatar.jpg'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Light = Template.bind({})
Light.args = {
  size: 150,
  src: AvatarImg,
}
export const Small = Template.bind({})
Small.args = {
  size: 50,
  src: AvatarImg,
}
