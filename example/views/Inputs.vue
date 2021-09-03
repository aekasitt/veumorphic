<<template>
  <div class='container'>
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
</template>
<script lang='javascript'>
  import VeuInput from '../../src/components/VeuInput.vue';
  export default {
    name: 'Inputs',
    components: { VeuInput }
  }
</script>