<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="All CEIT Faculty" back-link="Back">
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
        },

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
        },

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
        },

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
        },

        {
          id: 'plender',
          name: 'Ms. Jenie L. Plender',
          position: ['I.S. Dept.'],
          descrip: [
            'MS in Information Technology',
            'Caraga State University, Butuan City', '-',
            'BS in Computer Science',
            'Caraga State University, Butuan City'
          ]
        },

        {
          id: 'cher_tabada',
          name: 'Prof. Cherry I. Tabada',
          position: ['I.S. Dept.'],
          descrip: [
            'MS in Computer Application',
            'Mindanao State University, Iligan City', '-',
            'BS in Computer Science',
            'AMA University, Quezon City'
          ]
        },

        {
          id: 'bonotan',
          name: 'Mr. Melbert R. Bonotan',
          position: ['I.S. Dept.'],
          descrip: [
            'BS in Computer Science',
            'Caraga State University, Butuan City'
          ]
        },

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
