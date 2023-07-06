import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort food',
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1906-3469&mode=design&t=yDKGMKcGtHgM8jaG-4',
    },
  },
  //   Aqui se hace una referencia al componente que queremos testear y asi poder enviarle args (props) por default a todas las tories que se van a crear
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})

export const DarkTheme = Template.bind({})
DarkTheme.parameters = {
  theme: 'dark',
}
