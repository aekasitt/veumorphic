<template>
  <input :class="{
    'veumorphic': true,
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

<style>
  input.veumorphic {
    /* Animation */
    transition: all .3s ease-in-out;
    /* Bordering */
    border-width: .0625rem;
    border-style: solid;
    /* Spacing */
    display: block;
    height: calc(1.5em + 1.2rem + .0625rem);
    padding: .6rem .75rem;
    background-clip: padding-box;
    border-radius: .55rem;
    /* Text */
    color: inherit;
    font-weight: 300;
  }

  /**
   * Sizes
   */
  input.veumorphic.size-sm {
    font-size: .875rem;
    line-height: 1;
  }
  input.veumorphic.size-md {
    font-size: 1rem;
    line-height: 1.5;
  }
  input.veumorphic.size-lg {
    font-size: 1.25rem;
    line-height: 2rem
  }

  /**
   * Theme Coloring
   */

  .grey input.veumorphic {
    background-color: #D9DAE1;
    border-color: #D1D9E6;
    box-shadow: inset 2px 2px 5px #B8B9BE, inset -3px -3px 7px #FFFFFF;
  }

  .sepia input.veumorphic {
    background-color: #DBCEAC;
    border-color: #C7BB9C;
    box-shadow: inset 2px 2px 5px #D7A382, inset -3px -3px 7px #F3D8AC;
  }

  .cloud input.veumorphic {
    background-color: #CBDAE8;
    border-color: #C9CDE4;
    box-shadow: inset 2px 2px 5px #B7C9D5, inset -3px -3px 7px #DFF0FF;
  }

  .dark input.veumorphic {
    background-color: #5A5F85;
    border-color: #232635;
    box-shadow: inset 3px 3px 6px #232635, inset -3px -3px 6px #A0A3B5;
  }

  /**
   * Input Lengths
   */
  input.veumorphic.fit-content {
    width: fit-content;
  }
  /**
   * Chrome and Safari
   */
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    input.veumorphic.fit-content {
      width: -webkit-fit-content;
    }
    input.veumorphic.fill-available {
      width: -webkit-fill-available;
    }
  }

  /**
   * Mozilla Firefox
   */
  @-moz-document url-prefix() {
    input.veumorphic.fit-content {
      width: -moz-fit-content;
    }
    input.veumorphic.fill-available {
      width: -moz-available;
    }
  }
</style>