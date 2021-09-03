// example/routes.js
import Buttons from './views/Buttons.vue';
import Inputs from './views/Inputs.vue';

export default [{
  path: '/',
  redirect: 'buttons',
},
{
  name: 'buttons',
  path: '/buttons',
  component: Buttons
},
{
  name: 'inputs',
  path: '/inputs',
  component: Inputs
}];