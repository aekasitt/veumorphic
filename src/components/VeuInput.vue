<template>
  <input :class="{
    'fill-available': width == 'fill-available',
    'fit-content':    width == 'fit-content',  
    'size-sm':        size  == 'sm',
    'size-md':        size  == 'md',
    'size-lg':        size  == 'lg'
  }"
  :placeholder='placeholder'>
</template>

<script lang='javascript'>
  export default {
    name: 'veu-input',
    props: {
      placeholder: {
        default: '',
        type: String
      },
      size: {
        default: 'md',
        type: String
      },
      width: {
        default: 'fit-content',
        type: String
      }
    }
  }
</script>

<style scoped>
  input {
    /* Animation */
    transition: all .3s ease-in-out;
    /* Coloring */
    /*color: #44476a;
    background-color: #e6e7ee;*/
    color: inherit;
    background-color: inherit;
    border: .0625rem solid #d1d9e6;
    box-shadow: inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff;
    /* Spacing */
    display: block;
    /* width: 100%; */
    height: calc(1.5em + 1.2rem + .0625rem);
    padding: .6rem .75rem;
    background-clip: padding-box;
    border-radius: .55rem;
    /* Text */
    font-weight: 300;
  }

  /**
   * Sizes
   */
  input.size-sm {
    font-size: .875rem;
    line-height: 1;
  }
  input.size-md {
    font-size: 1rem;
    line-height: 1.5;
  }
  input.size-lg {
    font-size: 1.25rem;
    line-height: 2rem
  }

  /**
   * Input Lengths
   */
  input.fit-content {
    width: fit-content;
  }
  /**
   * Chrome and Safari
   */
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    input.fit-content {
      width: -webkit-fit-content;
    }
    input.fill-available {
      width: -webkit-fill-available;
    }
  }

  /**
   * Mozilla Firefox
   */
  @-moz-document url-prefix() {
    input.fit-content {
      width: -moz-fit-content;
    }
    input.fill-available {
      width: -moz-available;
    }
  }
</style>