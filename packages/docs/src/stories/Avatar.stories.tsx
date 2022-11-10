import { Avatar, AvatarProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Date display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gaFregatto.png',
    alt: 'Guilherme Arai Fregatto',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
