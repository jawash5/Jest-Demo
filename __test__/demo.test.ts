import {add} from "../src/test/utils";
import HelloWorld from "../src/components/HelloWorld.vue";
import {mount, shallowMount} from "@vue/test-utils";
import demo from '../src/components/demo';
import App from '../src/App.vue'

describe('demo', () => {
  it('add', () => {
    expect(add(1,2)).toBe(3)
  })

  it('组件测试', function () {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello Vue 3 + TypeScript + Vite'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.get("h1").html()).toBe('<h1>Hello Vue 3 + TypeScript + Vite</h1>')
    wrapper.unmount()
  });

  it('jsx测试', () => {
    const wrapper = mount(demo)
    expect(wrapper.get("div").html()).toBe('<div>HelloWorld</div>')
    wrapper.unmount()
  });

  it('图片测试', function () {
    const wrapper = shallowMount(App)
    expect(wrapper.find("img").exists()).toBe(true)
    wrapper.unmount()
  });

  it('E2E测试', async function () {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello Vue 3 + TypeScript + Vite'
      }
    })
    await wrapper.get("button").trigger('click')
    expect(wrapper.get("button").html()).toContain('1')
    wrapper.unmount()
  });

  it('图片测试', function () {
    const wrapper = mount(App)
    console.log(wrapper.html())
    expect(wrapper.find("img").exists()).toBe(true)
    wrapper.unmount()
  });

})