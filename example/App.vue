<template>
  <veu-pane :theme='themes[themeIdx]' style='height: 100vh'>
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
                  <router-link to='buttons'>
                    <veu-button :text='"Buttons"' />
                  </router-link>
                </div>
                <div class='col-4 align-center'>
                  <router-link to='inputs'>
                    <veu-button :text='"Inputs"' />
                  </router-link>
                </div>
                <div class='col-4'>
                  <veu-button :text='"Toggle Theme"' @click.native='toggleTheme' />
                </div>
              </div>
            </div>
          </veu-navbar>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </veu-pane>
</template>

<script>
  export default {
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