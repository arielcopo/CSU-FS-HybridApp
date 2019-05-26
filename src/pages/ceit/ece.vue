<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Electronics and Comm. Eng." back-link="Back">
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
          id: 'demetillo_a',
          name: 'Engr. Alexander T. Demetillo',
          position: ['Former College Dean','E.C.E. Dept.'],
          descrip: [
            'Master of Engineering major in ECE',
            'Ateneo de Cagayan University,', '-',
            'Cagayan de Oro City',
            'BS in Electronics and Communications Eng\'g', '-',
            'Mindanao University of Science and Technology,',
            'Cagayan de Oro City'
          ]
        },

        {
          id: 'dellosa',
          name: 'Engr. Jeffrey T. Dellosa',
          position: ['E.C.E. Dept.'],
          descrip: [
            'Master of Engineering major in ECE',
            'Ateneo de Davao University, Davao City', '-',
            'BS in Electronics and Communications Eng\'g',
            'Mindanao State University,Iligan City'
          ]
        }



      ]

    }
  }

}
</script>
