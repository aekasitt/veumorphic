<!-- Template -->
<template>
  <div :class="{
    'veumorphic': true,
    'cloud': theme == 'cloud',
    'dark':  theme == 'dark',
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

<style>
  .veumorphic {
    /* Text Sizes */
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1rem;
    font-weight: 300;
  }
  /* Theme Coloring */
  .veumorphic.grey {
    color: #44476A;
    background-color: #E6E7EE;
  }
  .veumorphic.sepia {
    background-color: #EDDAB2;
    color: #834E56;
  }
  .veumorphic.cloud {
    background-color: #E6F1F9;
    color: #445862;
  }
  .veumorphic.dark {
    background-color: #60688A;
    color: #C9CDE4;
  }
</style>