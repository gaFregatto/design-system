import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typograph/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero veritatis molestiae quos, eum consequuntur ratione saepe et odio asperiores neque fugiat officia, unde praesentium error voluptatibus ea in iure aut.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
