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
        default: 'primary',
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
    border-color: #d1d9e6;
    box-shadow: 3px 3px 6px #b8b9be,-3px -3px 6px #fff;
    background-color: #e6e7ee;
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
    color: #31344b;
    background-color:#e6e7ee;
    border-color:#e6e7ee;
    box-shadow:inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff
  }

  button:active {
    box-shadow: 9px 9px 16px rgba(0, 0, 0, 0), -9px -9px 16px rgba(247, 251, 255, 0), 9px 9px 16px rgba(0, 0, 0, 0.1) inset, -9px -9px 16px rgba(247, 251, 255, 0.7) inset;
  }

  button:disabled {
    pointer-events: none;
    color:#31344b;
    background-color:#e6e7ee;
    border-color:#e6e7ee
  }

  button:focus {
    box-shadow:inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff
  }

  button:not(:disabled):not(.disabled):active,
  button:not(:disabled):not(.disabled).active {
    color:#31344b;
    background-color:#e6e7ee;
    border-color:#e6e7ee
  }

  button:not(:disabled):not(.disabled):active:focus,
  button:not(:disabled):not(.disabled).active:focus {
    color:#31344b;
    background-color:#e6e7ee;
    border-color:#e6e7ee
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
    color: #31344b;
  }

  button.secondary {
    color: #2d4cc8;
  }

  button.info {
    color: #44476a;
  }

  button.danger {
    color: #a91e2c;
  }

  button.warning {
    color: #ecb32c;
  }

  button.success {
    color: #18634b;
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
   * Chrome version 29 and above
   */
  @media screen
    and (-webkit-min-device-pixel-ratio:0)
    and (min-resolution:.001dpcm)
  {
    button {
      user-select: none; /* re-added to remove warning */
      -webkit-appearance: button;
      -webkit-user-select: none;
    }
  }

  /**
   * Chrome version 22 - 28
   */
  @media screen
    and (-webkit-min-device-pixel-ratio:0)
  {
    button {
      user-select: none; /* re-added to remove warning */
      -webkit-appearance: button;
      -webkit-user-select: none;
    }
  }
  

  /**
   * Mozilla Firefox
   */
  @supports (-moz-appearance: none) 
  {
    button {
      user-select: none;
    }
  }
</style>