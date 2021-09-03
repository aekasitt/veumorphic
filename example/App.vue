<template>
  <section>
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
  </section>
</template>

<script>
  import VeuButton from '../src/components/VeuButton.vue';
  import VeuInput from '../src/components/VeuInput.vue';
  export default {
    components: {
      'veu-button': VeuButton,
      'veu-input': VeuInput
    },
    data: () => ({ sample: 'Hello, World!' })
  };
</script>