<!-- Template -->
<template>
  <nav
    :class="{
      'veumorphic': true,
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

<style>
  nav.veumorphic {
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  nav.veumorphic.headroom {
    will-change: transform;
    transition: all .2s ease;
  }

  nav.veumorphic.transparent {
    background-color: transparent;
    border: 0;
  }

  nav.veumorphic.expand-lg {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
</style>