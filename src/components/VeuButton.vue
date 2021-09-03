<!-- Template -->
<template>
  <input type='submit' :value='text' />
</template>

<!-- JavaScript -->
<script lang='javascript'>
  export default {
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
  input[type='submit']
  {
    margin-right: .75rem;
    margin-bottom: .75rem;
    font-size: 1rem;
    border-color: #d1d9e6;
    box-shadow: 3px 3px 6px #b8b9be,-3px -3px 6px #fff;
    color:#31344b;
    background-color:#e6e7ee
  }

  input[type='submit']
  {
    position: relative;
    transition: all .2s ease;
    letter-spacing: .025em;
  }

  input[type='submit']:hover
  {
    color:#31344b;
    background-color:#e6e7ee;
    border-color:#e6e7ee;
    box-shadow:inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff
  }

  input[type='submit']:active
  {
    box-shadow: 9px 9px 16px rgba(0, 0, 0, 0), -9px -9px 16px rgba(247, 251, 255, 0), 9px 9px 16px rgba(0, 0, 0, 0.1) inset, -9px -9px 16px rgba(247, 251, 255, 0.7) inset;
  }

  input[type='submit']:disabled {
    color:#31344b;
    background-color:#e6e7ee;
    border-color:#e6e7ee
  }
  input[type='submit']:focus {
    box-shadow:inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff
  }
  input[type='submit']:not(:disabled):not(.disabled):active,
  input[type='submit']:not(:disabled):not(.disabled).active
  {
    color:#31344b;
    background-color:#e6e7ee;
    border-color:#e6e7ee
  }
  input[type='submit']:not(:disabled):not(.disabled).active:focus,
  input[type='submit']:not(:disabled):not(:disabled):active.focus
  {
    color:#31344b;
    background-color:#e6e7ee;
    border-color:#e6e7ee
  }
</style>