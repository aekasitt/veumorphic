// src/index.js

import VeuButton from './components/VeuButton.js';
import VeuInput from './components/VeuInput.js';

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