<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Physical Education" back-link="Back">
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
          id: 'rodriguez',
          name: 'Dr. Charito C. Rodriguez',
          position: ['P.E. Dept.','Dept. Chair', 'Chair (Sports Development Office)'],
          descrip: [
            'BS - Physical Education',
            'Southwestern University, Cebu City','-',
            'MA - Physical Education',
            'Southwestern University, Cebu City','-',
            'EdD - Physical Education',
            'Southwestern University, Cebu City','-',
          ]
        },

        {
          id: 'cajenta',
          name: 'Ms. Sitti Obaida J. Cajenta',
          position: ['P.E. Dept.'],
          descrip: [
            'MAEd - Educational Management',
            'AIT, Butuan City', '-',
            'BSEd - Physical Education',
            'AIT, Butuan City'
          ]
        },

        {
          id: 'cacho',
          name: 'Mr. Jonel F. Cacho',
          position: ['P.E. Dept.'],
          descrip: [
            'BS - Physical Education',
            'MSU, Marawi'
          ]
        },

        {
          id: 'credo',
          name: 'Mr. Marc Joy A. Credo',
          position: ['P.E. Dept.'],
          descrip: [
            'BS - Physical Education',
            'MSU, Marawi'
          ]
        },

        {
          id: 'itliong',
          name: 'Mr. Niño P. Itliong',
          position: ['P.E. Dept.'],
          descrip: [
            'BS - Physical Education',
            'MSU, Marawi','-',
            'MS - Physical Education (on-study leave)',
            'FSUU, Butuan City'
          ]
        },

        {
          id: 'odtojan',
          name: 'Ms. Geryll M. Odtojan',
          position: ['P.E. Dept.'],
          descrip: [
            'BSEd - Physical Education',
            'University of San Carlos, Cebu City','-',
            'MA - Educational Management (Units Earner)',
            'San Nicolas College, Surigao City','-',
            'MA - Physical Education (Units Earner)',
            'Southwestern University, Cebu City'
          ]
        }

      ]

    }
  }

}
</script>
