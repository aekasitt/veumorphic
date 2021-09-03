<template>
  <veu-pane :theme='themes[themeIdx]'>
    <div class='container'>
      <div class='row'>
        <div class='offset-3'></div>
        <div class='col-6'>
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
                <div class='offset-4'></div>
                <div class='col-4 align-center'>
                  <veu-button :text='"Buttons"' />
                </div>
                <div class='col-4 align-center'>
                  <veu-button :text='"Inputs"' />
                </div>
                <div class='col-4'>
                  <veu-button :text='"Toggle Theme"' @click.native='toggleTheme' />
                </div>
              </div>
            </div>
          </veu-navbar>
        </div>
      </div>
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
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <p>
              Text-Input without placeholder
            </p>
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <veu-input />
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <p>
              Text-Input with placeholder
            </p>
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <veu-input :placeholder='sample' />
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <p>
              Text-Input of varying sizes
            </p>
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <veu-input :placeholder='"Small"' :size='"sm"' />
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <veu-input :placeholder='"Regular"' :size='"md"' />
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <veu-input :placeholder='"Large"' :size='"lg"' />
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-8'>
            <p>
              Text-Input that fits content
            </p>
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'></div>
          <div class='col-6'>
            <veu-input :placeholder='"I fit the contents written"' :width='"fit-content"' />
          </div>
        </div>
        <div class='row'>
          <div class='row'>
            <div class='offset-2'></div>
            <div class='col-8'>
              <p>
                Text-Input that fills available space
              </p>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'>&nbsp;</div>
          <div class='col-8'>
            <veu-input :placeholder='"I fill the available space"' :width='"fill-available"' />
          </div>
        </div>
        <div class='row'>
          <div class='offset-2'>&nbsp;</div>
          <div class='col-2'>
            <veu-input :placeholder='"I fill the available space"' :width='"fill-available"' />
          </div>
          <div class='offset-2'></div>
          <div class='col-2'>
            <veu-input :placeholder='"I fill the available space"' :width='"fill-available"' />
          </div>
          <div class='col-2'>
            <veu-input :placeholder='"I fill the available space"' :width='"fill-available"' />
          </div>
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
    methods: {
      toggleTheme() {
        let vue = this;
        vue.themeIdx++;
        if (vue.themeIdx >= vue.themes.length) {
          vue.themeIdx = 0;
        }
      }
    },
    data: () => ({
      sample: 'Hello, World!',
      themeIdx: 0,
      themes: [ 'grey', 'sepia', 'cloud', 'dark' ]
    })
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
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
  .offset-1 {width: 8.33%;}
  .offset-2 {width: 16.66%;}
  .offset-3 {width: 25%;}
  .offset-4 {width: 33.33%;}
  .offset-5 {width: 41.66%;}
  .offset-6 {width: 50%;}
  .offset-7 {width: 58.33%;}
  .offset-8 {width: 66.66%;}
  .offset-9 {width: 75%;}
  .offset-10 {width: 83.33%;}
  .offset-11 {width: 91.66%;}
  .offset-12 {width: 100%;}
  [class*='offset-']:after { /* clear offset content */
    content: "";
  }
  @media only screen and (max-width: 600px) {
    [class*='col-'] { /* Make all columns fill area on small screens */
      width: 100%;
    }
    [class*='offset-'] { /* Make all offsets disappear on small screens */
      display: none;
    }
  }

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
    text-align: center;
  }
</style>