import { BModal } from 'bootstrap-vue';

export default {
  title: 'Example/Modal',
  component: BModal
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BModal },
  template: `
<b-modal v-bind="$props">
  <p>Hello, World!</p>
</b-modal>
  `
});

export const Demo = Template.bind({});
Demo.args = {
  visible: true
};
