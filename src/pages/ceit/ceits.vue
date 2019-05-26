<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="CEIT Staff" back-link="Back">
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
      eduback: '',
      employee: [
        {
          id: 'lazarte',
          name: 'Ms. Rezalyn M. Lazarte',
          position: ['CEIT Office Staff']
        },
        
        {
          id: 'demetillo',
          name: 'Ms. Lovela T. Demetillo',
          position: ['CEIT Office Staff']
        },

        {
          id: 'mahilom',
          name: 'Mr. Jimbery Clyde B. Mahilom',
          position: ['CEIT Office Staff']
        },
        
        {
          id: 'micarandayo',
          name: 'Ms. Malyn T. Micarandayo',
          position: ['CEIT Office Staff']
        },

        {
          id: 'cerillo',
          name: 'Mr. Dearman C. Cerillo',
          position: ['Computer Technician']
        },

        {
          id: 'madrid',
          name: 'Mr. Herbert O. Madrid',
          position: ['Computer Technician']
        },

        {
          id: 'heria',
          name: 'Emr. Daniel B. Heria',
          position: ['Machinest']
        },
      ],
    }
  }

}
</script>