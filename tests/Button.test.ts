import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/components/Button/styled/index.vue';

describe('Button', () => {
  it('renders content', () => {
    const wrapper = mount(Button, { slots: { default: 'Click Me' } });
    expect(wrapper.text()).toBe('Click Me');
  });
});
