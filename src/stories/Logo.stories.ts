import Logo from '@/components/Logo.vue';

export default {
  title: 'Logo',
  component: Logo,
};

const Template = (args: any) => ({
  components: { Logo },
  setup() {
    return { args };
  },
  template: '<Logo v-bind="args"/>',
});

export const Index = Template.bind({});
Index.args = {
  logoName: 'Xircle',
};
