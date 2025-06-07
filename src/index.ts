import Button from './components/styled/Button.vue';

export { default as Button } from './components/styled/Button.vue';

export const install = (app: any) => {
  app.component('MyButton', Button);
};
