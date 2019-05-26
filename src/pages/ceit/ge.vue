<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Geodetic Engineering" back-link="Back">
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
          id: 'santillan',
          name: 'Engr. Meriam M. Santillan',
          position: ['College Dean','G.E. Dept.'],
          descrip: [
            'MS in Remote Sensing',
            'UP Diliman, Quezon City', '-',
            'BS in Geodetic Eng\'g',
            'Caraga State University, Butuan City'
          ]
        },


        {
          id: 'japitana',
          name: 'Engr. Michelle V. Japitana',
          position: ['G.E. Dept.'],
          descrip: [
            'MS in Remote Sensing',
            'UP Diliman, Quezon City', '-',
            'BS in Geodetic Eng\'g',
            'Caraga State University, Butuan City'
          ]
        },

        {
          id: 'asube',
          name: 'Engr. Lorie Cris S. Asube',
          position: ['G.E. Dept.'],
          descrip: [
            'MS in Land Administration and Management (on going)',
            'Visayas State University, Leyte', '-',
            'BS in Geodetic Eng\'g',
            'Caraga State University, Butuan City'
          ]
        },

        {
          id: 'cabilitasan',
          name: 'Engr. John I. Cabilitasan',
          position: ['G.E. Dept.'],
          descrip: [
            'Master in Public Administration',
            'Ateneo de Cagayan University', '-',
            'BS in Geodetic Eng\'g',
            'Cagayan de Oro College', '-',
            'BS in Civil Eng\'g',
            'Cagayan de Oro College'
          ]
        }



      ]

    }
  }

}
</script>
