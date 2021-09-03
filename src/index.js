// src/index.js

import VeuButton from './components/VeuButton.vue';
import VeuInput from './components/VeuInput.vue';

export {
  VeuButton,
  VeuInput
};

export default {
  install ( Vue ) {
    Vue.component('VeuButton', VeuButton);
    Vue.component('VeuInput', VeuInput);
  }
}