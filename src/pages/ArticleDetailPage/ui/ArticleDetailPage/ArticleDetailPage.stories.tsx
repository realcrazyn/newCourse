import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticleDetailPage from './ArticleDetailPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'ArticleDetailPage',
  component: ArticleDetailPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailPage>

const Template: ComponentStory<typeof ArticleDetailPage> = (args) => (
  <ArticleDetailPage />
)

export const Light = Template.bind({})
Light.args = {}
export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
