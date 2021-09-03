<!-- Template -->
<template>
  <button
    :class="{
      'rounded':   rounded, 
      'primary':   variant == 'primary',
      'secondary': variant == 'secondary',
      'info':      variant == 'info',
      'danger':    variant == 'danger',
      'warning':   variant == 'warning',
      'success':   variant == 'success',
      'anim-down': animate == 'down',
      'anim-up':   animate == 'up',
      'size-sm':   size    == 'sm',
      'size-md':   size    == 'md',
      'size-lg':   size    == 'lg'
    }">
    {{ text }}
  </button>
</template>

<!-- JavaScript -->
<script lang='javascript'>
  export default {
    name: 'veu-button',
    data: () => ({}),
    props: {
      animate: {
        default: 'none',
        type: String,
      },
      rounded: {
        default: false,
        type: Boolean
      },
      size: {
        default: 'md',
        type: String
      },
      text: {
        default: 'Submit',
        type: String
      },
      variant: {
        default: 'none',
        type: String
      }
    }
  }
</script>

<!-- Styles -->
<style scoped>
  button {
    /* Animation */
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    /* Bordering */
    border: .0625rem solid transparent;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-radius: .55rem;
    /* Coloring */
    background-color: inherit;
    border-color: #d1d9e6;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    /* Spacing */
    display: inline-block;
    margin-right: .75rem;
    margin-bottom: .75rem;
    vertical-align: middle;
    padding: .55rem .95rem;
    /* Text */
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    /* User Interaction */
    user-select: none;
  }

  button {
    position: relative;
    transition: all .2s ease;
    letter-spacing: .025em;
  }

  button:hover {
    border-color: #e6e7ee;
    box-shadow:inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff
  }

  button:disabled {
    pointer-events: none;
    opacity: .6;
  }

  /**
   * Sizes
   */
  button.size-sm {
    font-size: .875rem
  }

  button.size-md {
    font-size: 1rem;
  }

  button.size-lg {
    font-size: 1.25rem;
  }

  /**
   * Edge and Variants
   */
  button.rounded {
    border-radius: 2rem;
  }

  button.primary {
    color: #31344b !important;
  }

  button.secondary {
    color: #2d4cc8 !important;
  }

  button.info {
    color: #44476a !important;
  }

  button.danger {
    color: #a91e2c !important;
  }

  button.warning {
    color: #ecb32c !important;
  }

  button.success {
    color: #18634b !important;
  }

  /**
   * Animations
   */
  button.anim-down:hover {
    transform: translate(0, 2px);
  }

  button.anim-up:hover {
    transform: translate(0,-2px);
  }

  /**
   * Chrome and Safari
   */
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    button {
      user-select: none; /* re-added to remove warning */
      -webkit-appearance: button;
      -webkit-user-select: none;
    }
  }
  

  /**
   * Mozilla Firefox
   */
  @-moz-document user-prefix() {
    button {
      user-select: none; /* re-added to remove warning */
      -moz-user-select: none;
      -moz-appearance: button;
    }
  }

  /**
   * Dynamic Coloring
   */

   /* GREY (Default) THEME */

  button:disabled {
    color: #31344B;
    background-color: #D8DEE9;
    border-color: #D8DEE9;
  }

  button:hover {
    color: #31344V;
    background-color: #C8C9D0;
    border-color: #C8C9D0;
  }

  button:active { /* for grey and cloud */
    box-shadow: 9px 9px 16px rgba(0, 0, 0, 0), -9px -9px 16px rgba(247, 251, 255, 0), 9px 9px 16px rgba(0, 0, 0, 0.1) inset, -9px -9px 16px rgba(247, 251, 255, 0.7) inset;
  }

  button:focus { /* for grey and cloud */
    box-shadow:inset 2px 2px 5px #B8B9bE, inset -3px -3px 7px #FFF;
  }

  button:not(:disabled):not(.disabled):active,
  button:not(:disabled):not(.disabled).active,
  button:not(:disabled):not(.disabled):active:focus,
  button:not(:disabled):not(.disabled).active:focus {
    color: #31344B;
    background-color: #C8C9D0;
    border-color: #C8C9D0;
  }

  /* SEPIA THEME */

  .sepia button:disabled {
    color: #644147;
    background-color: #EFD59A;
    border-color: #EFD59A;
  }

  .sepia button:hover {
    color: #644147;
    background-color: #C7BB9C;
    box-shadow: inset 2px 2px 5px #834E56, inset -3px -3px 7px #834E56;
  }

  .sepia button:focus {
    box-shadow: inset 2px 2px 5px #99927E, inset -3px -3px 7px #EFD59A;
  }

  .sepia button:not(:disabled):not(.disabled):active,
  .sepia button:not(:disabled):not(.disabled).active,
  .sepia button:not(:disabled):not(.disabled):active:focus,
  .sepia button:not(:disabled):not(.disabled).active:focus {
    color: #644147;
    background-color: #C7BB9C;
    border-color: #C7BB9C;
    box-shadow: inset 2px 2px 5px #99927E, inset -3px -3px 7px #EFD59A;
  }

  /* CLOUD THEME */

  .cloud button:disabled {
    background-color: #CBDAE8;
    border-color: #B0D8F1;
  }

  .cloud button:hover {
    color: #20272C;
    background-color: #B7C9D5;
  }

  .cloud button:not(:disabled):not(.disabled):active,
  .cloud button:not(:disabled):not(.disabled).active,
  .cloud button:not(:disabled):not(.disabled):active:focus,
  .cloud button:not(:disabled):not(.disabled).active:focus {
    color: #20272C;
    background-color: #B7C9D5;
    border-color: #B7C9D5;
  }

   /* DARK THEME */

  .dark button {
    color: #C9CDE4;
    box-shadow: 3px 3px 6px #232635, -3px -3px 6px #A0A3B5;
    border-color: #656C98;
  }

  .dark button:focus {
    box-shadow: inset 3px 3px 6px #232635, inset -3px -3px 6px #A0A3B5;
  }

  .dark button:disabled {
    background-color: #656C98;
    border-color: #656C98;
  }

  .dark button:hover {
    background-color: #3B405B;
    box-shadow: inset 3px 3px 6px #232635, inset -3px -3px 6px #A0A3B5;
  }

  .dark button:not(:disabled):not(.disabled):active,
  .dark button:not(:disabled):not(.disabled).active,
  .dark button:not(:disabled):not(.disabled):active:focus,
  .dark button:not(:disabled):not(.disabled).active:focus {
    color: #20272C;
    background-color: #3B405B;
    border-color: #3B405B;
    box-shadow: inset 3px 3px 6px #232635, inset -3px -3px 6px #A0A3B5;
  }
</style>