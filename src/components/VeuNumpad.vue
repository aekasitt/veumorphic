<!-- Template -->
<template>
  <table class='numeric-keyboard'>
    <tbody>
      <tr>
        <td colspan='3'>
          <table class='numpad'>
            <tbody>
              <tr>
                <td data-key='1' data-icon='1' class='numeric-keyboard-key' @click='keyPressed'></td>
                <td data-key='2' data-icon='2' class='numeric-keyboard-key' @click='keyPressed'></td>
                <td data-key='3' data-icon='3' class='numeric-keyboard-key' @click='keyPressed'></td>
              </tr>
              <tr>
                <td data-key='4' data-icon='4' class='numeric-keyboard-key' @click='keyPressed'></td>
                <td data-key='5' data-icon='5' class='numeric-keyboard-key' @click='keyPressed'></td>
                <td data-key='6' data-icon='6' class='numeric-keyboard-key' @click='keyPressed'></td>
              </tr>
              <tr>
                <td data-key='7' data-icon='7' class='numeric-keyboard-key' @click='keyPressed'></td>
                <td data-key='8' data-icon='8' class='numeric-keyboard-key' @click='keyPressed'></td>
                <td data-key='9' data-icon='9' class='numeric-keyboard-key' @click='keyPressed'></td>
              </tr>
              <tr>
                <td data-key='.' data-icon='.' class='numeric-keyboard-key' @click='keyPressed'></td>
                <td data-key='0' data-icon='0' class='numeric-keyboard-key' @click='keyPressed'></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </td>
        <td colspan='1'>
          <table class='prompt'>
            <tbody>
              <tr>
              <td data-key='del' data-icon='del' class='numeric-keyboard-key' @click='keyPressed'></td>
              </tr>
              <tr>
                <td data-key='ok' data-icon='ok' class='numeric-keyboard-key' @click='keyPressed'></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<!-- JavaScript -->
<script lang='javascript'>
</script>

<!-- Styles -->
<style>

</style>
