<template>
  <div>
    <section>
      <p>
        Basic Components not using Veumorphic
      </p>
      <input type='submit'>
      <input type='submit' :value='sample'>
      <input type='text'>
      <input type='text' :placeholder='sample'>
    </section>
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
  </div>
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