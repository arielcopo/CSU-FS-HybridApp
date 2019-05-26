<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="All CASNR Staff" back-link="Back">
        <f7-nav-right>
          <f7-link icon-f7="menu" panel-open="right"></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <app-body v-bind:employee="employee" v-bind:eduback="eduback" ></app-body>
    </div>
  </f7-page>
</template>

<script>
import Body from './../scrolling.vue';

export default {
  components: {
    'app-body': Body
  },
  data () {
    return {
      employee: [

        {
          id: 'ruda',
          name: 'Ms. Jerah Mae M. Ruda',
          position: ['College Staff']
        },

        {
          id: 'batausa',
          name: 'Ms. Sharine B. Batausa',
          position: ['College Staff']
        },

        {
          id: 'geolagon',
          name: 'Mr. Welmer B. Geolagon',
          position: ['College Staff']
        },

        {
          id: 'ruda_r',
          name: 'Mr. Ruben A. Ruda',
          position: ['College Staff']
        },

        {
          id: 'casol',
          name: 'Mr. Jose Y. Casol',
          position: ['College Staff']
        }

      ]
    }
  }

}
</script>
