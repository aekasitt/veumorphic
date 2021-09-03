<template>
  <veu-pane>
    <p>
      Using without sample text
    </p>
    <veu-button />
    <p>
      Using with sample text
    </p>
    <veu-button :text='sample' />
    <p>
      Input without placeholder
    </p>
    <veu-input />
    <p>
      Input with placeholder
    </p>
    <veu-input :placeholder='sample' />
  </veu-pane>
</template>

<script>
  import VeuButton from '../src/components/VeuButton.vue';
  import VeuInput from '../src/components/VeuInput.vue';
  import VeuPane from '../src/components/VeuPane.vue';
  export default {
    components: {
      VeuButton, VeuInput, VeuPane
    },
    data: () => ({ sample: 'Hello, World!' })
  };
</script>