<template>
  <div class='container'>
    <div class='row'>
      <div class='offset-2'></div>
      <div class='col-4'>
        <p>
          Using without sample text
        </p>
      </div>
      <div class='col-4'>
        <p>
          Using with sample text
        </p>
      </div>
    </div>
    <div class='row'>
      <div class='offset-2'></div>
      <div class='col-4'>
        <veu-button />
      </div>
      <div class='col-4'>
        <veu-button :text='sample' />
      </div>
    </div>
    <div class='row'>
      <div class='offset-2'></div>
      <div class='col-8'>
        <p>
          Rounded
        </p>
        <veu-button :rounded='true' />
      </div>
    </div>
    <div class='row'>
      <div class='offset-2'></div>
      <div class='col-8'>
        <p>
          Color Variants
        </p>
      </div>
    </div>
    <div class='row'>
      <div class='col-4 align-center'>
        <veu-button :text='"Primary"' :variant='"primary"' />
      </div>
      <div class='col-4 align-center'>
        <veu-button :text='"Secondary"' :variant='"secondary"' />
      </div>
      <div class='col-4 align-center'>
        <veu-button :text='"Info"' :variant='"info"' />
      </div>
    </div>
    <div class='row'>
      <div class='col-4 align-center'>
        <veu-button :text='"Success"' :variant='"success"' />
      </div>
      <div class='col-4 align-center'>
        <veu-button :text='"Danger"' :variant='"danger"' />
      </div>
      <div class='col-4 align-center'>
        <veu-button :text='"Warning"' :variant='"warning"' />
      </div>
    </div>
    <div class='row'>
      <div class='col-4 align-center'>
        <veu-button :text='"Disabled"' :disabled='true' />
      </div>
    </div>
    <div class='row'>
      <div class='offset-2'></div>
      <div class='col-8'>
        <p>
          Hover Animations
        </p>
      </div>
    </div>
    <div class='row'>
      <div class='offset-3'></div>
      <div class='col-3 align-center'>
        <veu-button :text='"Up"' :animate='"up"' />
      </div>
      <div class='col-3 align-center'>
        <veu-button :text='"Down"' :animate='"down"' />
      </div>
    </div>
    <div class='row'>
      <div class='offset-2'></div>
      <div class='col-8'>
        <p>
          Sizes
        </p>
      </div>
    </div>
    <div class='row'>
      <div class='col-4 align-center'>
        <veu-button :text='"Small"' :size='"sm"' />
      </div>
      <div class='col-4 align-center'>
        <veu-button :text='"Regular"' :size='"md"' />
      </div>
      <div class='col-4 align-center'>
        <veu-button :text='"Large"' :size='"lg"' />
      </div>
    </div>
  </div>
</template>

<script lang='javascript'>
  import VeuButton from '../../src/components/VeuButton.vue';
  export default {
    name: 'Buttons',
    components: { VeuButton }
  }
</script>
