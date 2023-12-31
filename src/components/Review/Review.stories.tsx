import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Review } from './Review'

export default {
  title: 'Components/Review',
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
  component: Review,
} as ComponentMeta<typeof Review>

const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />

export const Default = Template.bind({})
export const Excellent = Template.bind({})
Excellent.args = {
  rating: 5,
}
export const VeryGood = Template.bind({})
VeryGood.args = {
  rating: 4.3,
}

export const Adeguate = Template.bind({})
Adeguate.args = {
  rating: 2.5,
}

export const VeryPoor = Template.bind({})
VeryPoor.args = {
  rating: 1,
}
