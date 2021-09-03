<template>
  <veu-pane>
    <div class='container'>
      <div class='row'>
        <div class='col-20'></div>
        <div class='col-60'>
          <veu-navbar :headroom='true' :expand='"lg"'>
            <div class='container'>
              <div class='row'>
                <div class='col-100'>
                  <h1 class='align-center'>
                    Veumorphic UI Kit
                  </h1>
                </div>
              </div>
              <div class='row'>
                <div class='col-20'></div>
                <div class='col-30'>
                  <veu-button :text='"Buttons"' />
                </div>
                <div class='col-30'>
                  <veu-button :text='"Inputs"' />
                </div>
                <div class='col-20'></div>
              </div>
            </div>
          </veu-navbar>
        </div>
      </div>
      <div class='container'>
        <div class='row'>
          <p>
            Using without sample text
          </p>
        </div>
        <div class='row'>
          <veu-button />
        </div>
        <div class='row'>
          <p>
            Using with sample text
          </p>
        </div>
        <div class='row'>
          <veu-button :text='sample' />
        </div>
        <div class='row'>
          <div class='col-100 align-center'>
            <p>
              Rounded
            </p>
            <veu-button :rounded='true' />
          </div>
        </div>
        <div class='row'>
            <p>
              Color Variants
            </p>
        </div>
        <div class='row'>
          <div class='col-20'>
            <veu-button :text='"Primary"' :variant='"primary"' />
          </div>
          <div class='col-20'>
            <veu-button :text='"Secondary"' :variant='"secondary"' />
          </div>
          <div class='col-20'>
            <veu-button :text='"Info"' :variant='"info"' />
          </div>
          <div class='col-20'>
            <veu-button :text='"Success"' :variant='"success"' />
          </div>
          <div class='col-20'>
            <veu-button :text='"Danger"' :variant='"danger"' />
          </div>
        </div>
        <div class='row'>
          <div class='col-20'>
            <veu-button :text='"Warning"' :variant='"warning"' />
          </div>
        </div>
        <div class='row'>
          <p>
            Hover Animations
          </p>
        </div>
        <div class='row'>
          <div class='col-20'></div>
          <div class='col-40'>
            <veu-button :text='"Up"' :animate='"up"' />
          </div>
          <div class='col-40'>
            <veu-button :text='"Down"' :animate='"down"' />
          </div>
        </div>
        <div class='row'>
          <p>
            Sizes
          </p>
        </div>
        <div class='row'>
          <div class='col-25'>
            <veu-button :text='"Small"' :size='"sm"' />
          </div>
          <div class='col-25'>
            <veu-button :text='"Regular"' :size='"md"' />
          </div>
          <div class='col-25'>
            <veu-button :text='"Large"' :size='"lg"' />
          </div>
        </div>
        <div class='row'>
          <p>
            Text-Input without placeholder
          </p>
        </div>
        <div class='row'>
          <veu-input />
        </div>
        <div class='row'>
          <p>
            Text-Input with placeholder
          </p>
        </div>
        <div class='row'>
          <veu-input :placeholder='sample' />
        </div>
        <div class='row'>
          <p>
            Text-Input of varying sizes
          </p>
        </div>
        <div class='row'>
          <div class='col-100'>
            <veu-input :placeholder='"Small"' :size='"sm"' />
          </div>
        </div>
        <div class='row'>
          <div class='col-100'>
            <veu-input :placeholder='"Regular"' :size='"md"' />
          </div>
        </div>
        <div class='row'>
          <div class='col-100'>
            <veu-input :placeholder='"Large"' :size='"lg"' />
          </div>
        </div>
        <div class='row'>
          <p>
            Text-Input that fits content
          </p>
        </div>
        <div class='row'>
          <veu-input :placeholder='"I fit the contents written"' :width='"fit-content"' />
        </div>
        <div class='row'>
          <p>
            Text-Input that fills available space
          </p>
        </div>
        <div class='row'>
          <veu-input :placeholder='"I fill the available space"' :width='"fill-available"' />
        </div>
      </div>
    </div>
  </veu-pane>
</template>

<script>
  import VeuButton from '../src/components/VeuButton.vue';
  import VeuInput from '../src/components/VeuInput.vue';
  import VeuNavbar from '../src/components/VeuNavbar.vue';
  import VeuPane from '../src/components/VeuPane.vue';
  export default {
    components: {
      VeuButton, VeuInput, VeuNavbar, VeuPane
    },
    data: () => ({ sample: 'Hello, World!' })
  };
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .container {
    border-radius: 5px;
    padding: 20px;
  }
  [class*='col-'] {
    float: left;
    box-sizing: border-box;
  }
  /* Column with pre-defined width ratio: 20% */
  .col-20 { width: 20%; }
  /* Column with pre-defined width ratio: 25% */
  .col-25 { width: 25%; }
  /* Column with pre-defined width ratio: 30% */
  .col-30 { width: 30%; }
  /* Column with pre-defined width ratio: 40% */
  .col-40 { width: 40%; }
  /* Column with pre-defined width ratio: 60% */
  .col-60 { width: 60%; }
  /* Column with pre-defined width ratio: 70% */
  .col-70 { width: 70%; }
  /* Column with pre-defined width ratio: 75% */
  .col-75 { width: 75%; }
  /* Column with pre-defined width ratio: 80% */
  .col-80 { width: 80%; }
  /* Column with pre-defined width ratio: 100% */
  .col-100 { width: 100%; }
  /* Clear floats after the columns */
  .row {
    display: flex;
    width: 100%
  }
  .row:after {
    content: "";
    display: block;
    clear: both;
  }
  .hidden {
    display: none;
  }
  .align-center {
    margin-left: auto;
    margin-right: auto;
  }
</style>