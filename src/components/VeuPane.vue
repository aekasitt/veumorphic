<!-- Template -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<!-- JavaScript -->
<script lang='javascript'>
  export default {
    name: 'veu-pane'
  };
</script>

<style scoped>
  * {
    /* Coloring */
    color: #44476a;
    background-color: #e6e7ee;
    /* Text Sizes */
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
  }
</style>