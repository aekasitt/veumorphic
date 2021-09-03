<!-- Template -->
<template>
  <button>
    {{ text }}
  </button>
</template>

<!-- JavaScript -->
<script lang='javascript'>
  export default {
    name: 'veu-button',
    data: () => ({}),
    props: {
      text: {
        default: 'Submit',
        type: String
      }
    }
  }
</script>

<!-- Styles -->
<style scoped>
  button {
    margin-right: .75rem;
    margin-bottom: .75rem;
    font-size: 1rem;
    border-color: #d1d9e6;
    box-shadow: 3px 3px 6px #b8b9be,-3px -3px 6px #fff;
    color: #31344b;
    background-color: #e6e7ee;
  }

  button {
    position: relative;
    transition: all .2s ease;
    letter-spacing: .025em;
  }

  button:hover {
    color:#31344b;
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
   * Chrome version 29 and above
   */
  @media screen
    and (-webkit-min-device-pixel-ratio:0)
    and (min-resolution:.001dpcm)
  {
    button {
      -webkit-appearance: button;
    }
  }

  /**
   * Chrome version 22 - 28
   */
  @media screen
    and (-webkit-min-device-pixel-ratio:0)
  {
    button {
      -webkit-appearance: button;
    }
  }
  

  /**
   * Mozilla Firefox
   */
  /* @supports (-moz-appearance:none) 
  {
    button {
      ...
    }
  } */
</style>