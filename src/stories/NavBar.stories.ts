import Navbar from '@/components/layout/NavBar.vue';
import { Variant } from '@/types/text-types';

export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {
    menuColor: { control: 'color' },
    onClick: {},
  },
};
const Template = (args: any) => ({
  components: { Navbar },
  setup() {
    return { args };
  },
  template: '<Navbar v-bind="args"/>',
});

export const Index = Template.bind({});
Index.args = {
  menuList: [
    {
      link: '',
      name: 'Home',
      active: true,
    },
    {
      link: '',
      name: 'About',
      active: false,
    },
    {
      link: '',
      name: 'Service',
      active: false,
    },
    {
      link: '',
      name: 'Page',
      active: false,
    },
  ],
}
