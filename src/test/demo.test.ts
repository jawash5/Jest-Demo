import {add} from "./utils";
import HelloWorld from "../components/HelloWorld.vue";
import {mount, shallowMount} from "@vue/test-utils";
import demo from '../components/demo';

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
    expect(wrapper.get("h1").html()).toBe('<h1>Hello Vue 3 + TypeScript + Vite</h1>')
    wrapper.unmount()
  });

  it('jsx测试', () => {
    const wrapper = mount(demo)
    expect(wrapper.get("div").html()).toBe('<div>HelloWorld</div>')
    wrapper.unmount()
  });
})