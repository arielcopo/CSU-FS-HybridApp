<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Agricultural Engineering" back-link="Back">
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
          id: 'capilitan',
          name: 'Engr. Jobelle J. Capilitan',
          position: ['Program Coordinator','A.E. Dept.'],
          descrip: [
            'MS in Engineering major in LAWREAT (on going)',
            'USEP, Tagum City', '-',
            'BS in Agricultural Eng\'g',
            'Mindanao State University, Marawi City'
          ]
        },

        {
          id: 'pondog',
          name: 'Engr. Anamarie J. Pondog',
          position: ['A.E. Dept.'],
          descrip: [
            'MS in Engineering major in LAWREAT (on going)',
            'USEP, Tagum City', '-',
            'BS in Agricultural Eng\'g',
            'Caraga State University, Butuan City'
          ]
        }



      ]

    }
  }

}
</script>
