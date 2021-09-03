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
      Rounded
    </p>
    <veu-button :rounded='true' />
    <p>
      Color Variants
    </p>
    <veu-button :variant='"primary"' />
    <veu-button :variant='"secondary"' />
    <veu-button :variant='"info"' />
    <veu-button :variant='"success"' />
    <veu-button :variant='"danger"' />
    <veu-button :variant='"warning"' />
    <p>
      Hover Animations
    </p>
    <veu-button :text='"Up"' :animate='"up"' />
    <veu-button :text='"Down"' :animate='"down"' />
    <p>
      Sizes
    </p>
    <veu-button :text='"Small"' :size='"sm"' />
    <veu-button :text='"Regular"' :size='"md"' />
    <veu-button :text='"Large"' :size='"lg"' />
    <p>
      Text-Input without placeholder
    </p>
    <veu-input />
    <p>
      Text-Input with placeholder
    </p>
    <veu-input :placeholder='sample' />
    <p>
      Text-Input of varying sizes
    </p>
    <veu-input :placeholder='"Small"' :size='"sm"' />
    <veu-input :placeholder='"Regular"' :size='"md"' />
    <veu-input :placeholder='"Large"' :size='"lg"' />
    <p>
      Text-Input that fits content
    </p>
    <veu-input :placeholder='"I fit the contents written"' :width='"fit-content"' />
    <p>
      Text-Input that fills available space
    </p>
    <veu-input :placeholder='"I fill the available space"' :width='"fill-available"' />
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