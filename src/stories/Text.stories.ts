import Text from '@/components/Text.vue';
import { Variant } from '@/types/text-types';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    fSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};
const Template = (args: any) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: '<Text v-bind="args" />',
});

export const Primary = Template.bind({});

Primary.args = {
  variant: Variant.PRIMARY,
  title: 'THIS IS PRIMARY TITLE',
  class: 'content-white',
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: Variant.SECONDARY,
  title: 'THIS IS SECONDARY TITLE',
  class: 'content-white',
};
