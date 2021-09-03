<!-- Template -->
<template>
  <nav
    :class="{
      'transparent': transparent,
      'headroom':    headroom,
      'expand-sm':   expand == 'sm',
      'expand-md':   expand == 'md',
      'expand-lg':   expand == 'lg'
    }">
    <slot></slot>
  </nav>
</template>

<!-- JavaScript -->
<script lang='javascript'>
  export default {
    name: 'veu-navbar',
    props: {
      expand: {
        default: 'none',
        type: String
      },
      headroom: {
        default: false,
        type: Boolean
      },
      transparent: {
        default: false,
        type: Boolean
      }
    }
  };
</script>

<style scoped>
  nav {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  nav.headroom {
    will-change: transform;
    transition: all .2s ease;
  }

  nav.transparent {
    background-color: transparent;
    border: 0;
  }

  nav.expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
</style>