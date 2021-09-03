<template>
  <input :placeholder='placeholder'>
</template>

<script lang='javascript'>
  export default {
    name: 'veu-input',
    props: {
      placeholder: {
        default: '',
        type: String
      }
    }
  }
</script>

<style scoped>
  input {
    display: block;
    width: 100%;
    height: calc(1.5em + 1.2rem + .0625rem);
    padding: .6rem .75rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: #44476a;
    background-color: #e6e7ee;
    background-clip: padding-box;
    border: .0625rem solid #d1d9e6;
    border-radius: .55rem;
    box-shadow: inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff;
    transition: all .3s ease-in-out
  }
</style>