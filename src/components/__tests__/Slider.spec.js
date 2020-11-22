import Slider from '../slider';
import { mount } from '@vue/test-utils';

const mountComponent = (options = {}) => {
  return mount(Slider, options);
}

let wrapper = null

afterEach(() => {
  wrapper.destroy()
})

it('renders correctly', () => {
  wrapper = mountComponent();
  expect(wrapper.html()).toMatchSnapshot();
});

it('renders vertically', () => {
  wrapper = mountComponent({ 
    propsData: {
      vertical: true
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it('renders inverted', () => {
  wrapper = mountComponent({ 
    propsData: {
      inverted: true
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it('renders disabled', () => {
  wrapper = mountComponent({ 
    propsData: {
      disabled: true
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

it('should change value on key press', () => {
  wrapper = mountComponent();

  wrapper.trigger('keydown.up');

  expect(wrapper.vm.val).toBe(1);

  wrapper.trigger('keydown.down');

  expect(wrapper.vm.val).toBe(0);

  wrapper.trigger('keydown.pageup');

  expect(wrapper.vm.val).toBe(10);

  wrapper.trigger('keydown.pagedown');
  
  expect(wrapper.vm.val).toBe(0);

  wrapper.trigger('keydown.end');
  
  expect(wrapper.vm.val).toBe(100);
  
  wrapper.trigger('keydown.home');

  expect(wrapper.vm.val).toBe(0);

  wrapper.trigger('keydown.right');

  expect(wrapper.vm.val).toBe(1);

  wrapper.trigger('keydown.left');

  expect(wrapper.vm.val).toBe(0);
});

it('should increment with a given step size', () => {
  wrapper = mountComponent({
    propsData: {
      stepSize: 10
    }
  });

  wrapper.trigger('keydown.up');
  expect(wrapper.vm.val).toBe(10);
})
