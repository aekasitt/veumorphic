<template>
  <section>
    <p>
      Using default bar width and height.
    </p>
    <veu-button />
  </section>
</template>

<script>
  import VeuButton from '../src/components/VeuButton.vue';
  export default {
    components: { 'veu-button': VeuButton },
    // data: () => ({  })
  };
</script>