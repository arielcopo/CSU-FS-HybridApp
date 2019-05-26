<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Information Technology" back-link="Back">
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
          id: 'sabugaa',
          name: 'Ms. Jennifer E. Sabugaa',
          position: ['CEIT Web Administrator','Program Coordinator','I.T. Dept.'],
          descrip: [
            'Master in Information Technology',
            'University of the Immaculate Concepcion, Davao City', '-',
            'BS in Information Technology',
            'ASSCAT, Bunawan, Agusan del Sur'
          ]
        },

        {
          id: 'daguil',
          name: 'Dr. Rolyn C. Daguil',
          position: ['Director (ICT Center)','I.T. Dept.'],
          descrip: [
            'Ph. D. in Information Technology',
            'Hannam University, Korea', '-',
            'MS in Information Technology',
            'Hannam University, Korea', '-',
            'BS in Computer Science',
            'Mindanao State University(Main), Marawi City'
          ]
        },

        {
          id: 'dalaorao',
          name: 'Mr. Gleen A. Dalaorao',
          position: ['I.T. Dept.'],
          descrip: [
            'Doctor in Information Technology',
            'Technological Institute of the Philippines, Quezon City', '-',
            'MS in Information Technology',
            'Ateneo de Davao University, Davao City', '-',
            'BS in Computer Science',
            'SJIT, Butuan City'
          ]
        },

        {
          id: 'presbitero',
          name: 'Prof. James V. Presbitero',
          position: ['I.T. Dept.'],
          descrip: [
            'MS in Information Technology',
            'Hannam University, South Korea', '-',
            'BS in Computer Science',
            'James Cook University, Australia'
          ]
        },

        {
          id: 'pitogo',
          name: 'Mr. Vicente Pitogo',
          position: ['Program Coordinator','I.T. Dept.'],
          descrip: [
            'MS in Information Technology',
            'Caraga State University, Butuan City', '-',
            'BS in Information Technology',
            'St. Joseph Institute of Technology, Butuan City'
          ]
        },

        {
          id: 'walters',
          name: 'Mr. Billy Jack P. Walters',
          position: ['I.T. Dept.'],
          descrip: [
            'BS in Information Technology',
            'Father Saturnino Urios University, Butuan City'
          ]
        },

        {
          id: 'bacabis',
          name: 'Ms. Regein D. Bacabis',
          position: ['I.T. Dept.'],
          descrip: [
            'BS in Computer Science',
            'Caraga State University, Butuan City'
          ]
        },

        {
          id: 'nakazato',
          name: 'Mr. Takeyasu V. Nakazato',
          position: ['I.T. Dept.'],
          descrip: [
            'BS in Computer Science',
            'Caraga State University, Butuan City'
          ]
        }

      ]

    }
  }

}
</script>
