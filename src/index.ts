import Button from './components/Button/styled/index.vue';

export { default as Button } from './components/Button/styled/index.vue';

export const install = (app: any) => {
  app.component('Button', Button);
};
