<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Computer Science" back-link="Back">
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
          id: 'tabada',
          name: 'Dr. Luisito I. Tabada',
          position: ['C.S. Dept.'],
          descrip: [
            'Ph.D. In Computer Science',
            'Ateneo de Manila University, Quezon City', '-',
            'MS Computer Application',
            'University of Vireje, Belgium', '-',
            'BS in Electrical Eng\'g',
            'Mindanao State University , Marawi City'
          ]
        },

        {
          id: 'jayoma',
          name: 'Mr. Jaymer M. Jayoma',
          position: ['C.S. Dept.'],
          descrip: [
            'Doctor in Information Technology',
            'Technological Institute of the Philippines, Quezon City', '-',
            'MS in Information Technology',
            'Ateneo de Davao University, Davao City', '-',
            'BS in Computer Science',
            'Mindanao State University, Marawi City'
          ]
        },

        {
          id: 'timosan',
          name: 'Ms. Jesterlyn Q. Timosan',
          position: ['Chairperson (IT Department)','C.S. Dept.'],
          descrip: [
            'MS in Information Technology',
            'Caraga State University, Butuan City', '-',
            'BS in Computer Science',
            'Caraga State University, Butuan City'
          ]
        },

        {
          id: 'ortuyo',
          name: 'Ms. Maria Besa Joy M. Ortuyo',
          position: ['Database Administrator','System Developer (ICT Center)','C.S. Dept.'],
          descrip: [
            'MS in Information Technology',
            'Caraga State University, Butuan City', '-',
            'BS in Computer Science',
            'Mindanao State University, Iligan City'
          ]
        },

        {
          id: 'pacot',
          name: 'Mr. Mark Phil D. Pacot',
          position: ['Program Coordinator','C.S. Dept.'],
          descrip: [
            'MS in Information Technology',
            'Caraga State University, Butuan City', '-',
            'BS in Computer Science',
            'Caraga State University, Butuan City'
          ]
        },

        {
          id: 'matias',
          name: 'Mr. Junrie B. Matias',
          position: ['C.S. Dept.'],
          descrip: [
            'Doctor in Information Technology',
            'Technological Institute of the Philippines, Quezon City', '-',
            'Masters in Information Technology',
            'Mindanao University of Science and Technology, Cagayan de Oro City', '-',
            'BS in Computer Science',
            'Caraga State University, Butuan City'

          ]
        }



      ]

    }
  }

}
</script>
