<!-- Template -->
<template>
  <div class='veumorphic'>
    {{ text }}
  </div>
</template>

<!-- JavaScript -->
<script lang='javascript'>
  export default {
    data() {
      return {}
    },
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
  .veumorphic
  {
    display: block;
    border-radius: 4px;
    padding-top: 20px;
    padding-bottom: 20px;
    outline: 0;
    font-weight: 600;
    text-align: center;
    border: 0;
    cursor: pointer;
    width: 100%;
    color: #b9c2ce;
    background-color: #b9c2ce;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
  }
  .veumorphic:hover
  {
    color: #e0e5ec;
    background-color: #E0E5EC;
  }
  .veumorphic:active
  {
    box-shadow: 9px 9px 16px rgba(0, 0, 0, 0), -9px -9px 16px rgba(247, 251, 255, 0), 9px 9px 16px rgba(0, 0, 0, 0.1) inset, -9px -9px 16px rgba(247, 251, 255, 0.7) inset;
  }
</style>