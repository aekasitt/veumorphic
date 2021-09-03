<!-- Template -->
<template>
  <div :class="{
    'grey':  theme == 'grey',
    'sepia': theme == 'sepia',
    }">
    <slot></slot>
  </div>
</template>

<!-- JavaScript -->
<script lang='javascript'>
  export default {
    name: 'veu-pane',
    props: {
      theme: {
        default: 'grey',
        type: String
      }
    }
  };
</script>

<style scoped>
  * {
    /* Text Sizes */
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
  }
  /* Theme Coloring */
  .grey {
    color: #44476A;
    background-color: #E6E7EE;
  }
  .sepia {
    background-color: #EDDAB2;
    color: #834E56;
  }
</style>