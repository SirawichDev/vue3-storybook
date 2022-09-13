import { shallowMount } from '@vue/test-utils';
import Text from '@/components/Text.vue';

describe('Text.vue', () => {
  it('renders props.msg when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(Text, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
