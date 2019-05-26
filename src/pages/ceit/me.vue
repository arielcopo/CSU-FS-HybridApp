<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Mining Engineering" back-link="Back">
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
      eduback: 'EDUCATIONAL BACKGROUND',
      employee: [


        {
          id: 'santiago',
          name: 'Engr. Rebecca A. Santiago',
          position: ['M.E. Dept.'],
          descrip: [
            'Master\'s Business Administration',
            '(MBA Higher Mngt. Course)',
            'Philippine Christian University Manila', '-',
            'BS in Mining Eng\'g',
            'Cebu Institute of Technology, Cebu City'
          ]
        }



      ]

    }
  }

}
</script>
