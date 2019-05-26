<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="All CED Faculty" back-link="Back">
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
          id: 'herrera',
          name: 'Dr. Miraluna L. Herrera',
          position: ['Dean','Secondary Dept.','Center Chief (AGAK)','Chair (CRC & CETC)'],
          descrip: [
            'BSEd in Mathematics',
            'MSU, Marawi City','-',
            'MS Applied Math\'1 Sciences',
            'University of Science and Technology Southern Philippine, CDO', '-',
            'Ph.D. in Mathematics (Combinatorics)',
            'MSU - IIT, Iligan City'
          ]
        },

        {
          id: 'cubillas_a',
          name: 'Dr. Ariel U. Cubillas',
          position: ['Elementary Dept.','Dept. Chair'],
          descrip: [
            'BEEd',
            'PNU, Mindanao Campus','-',
            'MAEd - Home Economics',
            'PNU, Mindanao Campus', '-',
            'Ph.D. - Education',
            'FSUU, Butuan City'
          ]
        },

        {
          id: 'tulang',
          name: 'Ms. Marichu D. Tulang',
          position: ['Elementary Dept.'],
          descrip: [
            'BEEd - Filipino',
            'FSUU, Butuan City','-',
            'MAEd - General Education',
            'CSU, Main', '-',
            'EdD - Early Childhood Education(On-Study Leave)',
            'Liceo de Cagayan University, CDO'
          ]
        },

        {
          id: 'bago',
          name: 'Ms. Lourdes B. Bago',
          position: ['Elementary Dept.'],
          descrip: [
            'MATSpEd - Teaching the Mentally Gifted',
            'PNU, Manila','-',
            'MA - Child Study & Development',
            'Bukidnon State University, Bukidnon', '-',
            'Ph.D. - Educational Management (CAR)',
            'Capitol University, CDO'
          ]
        },

        {
          id: 'bolivia',
          name: 'Ms. Lita A. Bolivia',
          position: ['Elementary Dept.'],
          descrip: [
            'BEEd',
            'Bukidnon State University, Bukidnon','-',
            'MA - Child Study & Development',
            'Bukidnon State University, Bukidnon', '-',
            'Ph.D. - Educational Management (CAR)',
            'Capitol University, CDO'
          ]
        },

        {
          id: 'canda',
          name: 'Dr. Remedios L. Canda',
          position: ['Elementary Dept.'],
          descrip: [
            'BSEd - History',
            'Saint Paul University, Surigao City','-',
            'BEEd - General Education',
            'Northeastern Mindanao Colleges, Surigao City', '-',
            'MAEd - Educational Management',
            'Agusan Institute of Technology, Butuan City', '-',
            'Ph.D. - Education',
            'Saint Paul University, Surigao City'
          ]
        },

        //end sa elementaryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

        {
          id: 'arnado_a',
          name: 'Dr. Alvic A. Arnado',
          position: ['Dept. Chair','Secondary Dept.','Member (CRC)'],
          descrip: [
            'BSEd - Mathematics',
            'MSU, IIT','-',
            'MM - Educational Management',
            'Iligan Medical Center College, Iligan City', '-',
            'Ph.D. - Educational Administration',
            'Central Mindanao University, Bukidnon'
          ]
        },

        {
          id: 'alegre',
          name: 'Dr. Emybel M. Alegre',
          position: ['Secondary Dept.','Director (Senior High School)','Graduate School Program Coordinator'],
          descrip: [
            'BSEd - Mathematics',
            'MSU, IIT','-',
            'Diploma in Science Teaching - Physics',
            'University of Philippines, Diliman', '-',
            'MA - Educational Management',
            'Samar State University, Samar', '-',
            'Ph.D. - Educational Management',
            'Samar State University, Samar'
          ]
        },

        {
          id: 'bulay',
          name: 'Ms. Minie L. Bulay',
          position: ['Secondary Dept.'],
          descrip: [
            'BSEd - General Science',
            'PNU, Mindanao Campus','-',
            'MASpEd - Learning Disability',
            'Holy Cross of Davao College, Davao City', '-',
            'MASciEd - General Science',
            'PNU, Mindanao Campus', '-',
            'PhDSciEd - Biology(On-Study Leave',
            'University of San Carlos, Cebu City'
          ]
        },

        {
          id: 'cubillas_c',
          name: 'Ms. Cristina A. Cubillas',
          position: ['Secondary Dept.'],
          descrip: [
            'BSEd - English',
            'Agusan Institute of Technology, Butuan City','-',
            'MAEd - Educational Management',
            'Agusan Institute of Technology, Butuan City','-',
            'EdD - Educational Management',
            'CSU -Main'
          ]
        },

        {
          id: 'delacruz',
          name: 'Ms. Fe M. Dela Cruz',
          position: ['Secondary Dept.'],
          descrip: [
            'BS - Biology',
            'University of San Carlos, Cebu City','-',
            'MA - Educational Management',
            'FSUU, Butuan City','-',
            'MS in Applied Statitics',
            'MSU, IIT','-',
            'PhD - Educational Management (CAR)',
            'FSUU, Butuan City'
          ]
        },

        {
          id: 'flores',
          name: 'Ms. Grace T. Flores',
          position: ['Secondary Dept.','College Secretary','Co-Chair (CRC)'],
          descrip: [
            'BSEd - History',
            'MSU, General Santos','-',
            'MAEd - Educational Management',
            'CSU, Main', '-',
            'EdD - Instructional Resource Management(On-going)',
            'University of San Jose Recoletos, Cebu City'
          ]
        },

        {
          id: 'lagura',
          name: 'Ms. Gladys L. Lagura',
          position: ['Secondary Dept.','QUAMS Core Group Member','College Over-all Accreditation Coordinator','Co-Chair (CETC)'],
          descrip: [
            'BSEd - History',
            'MSU, Marawi','-',
            'MAEd - General Education',
            'Agusan Colleges Incorporation, Butuan City', '-',
            'EdD - Educational Management (on-going)',
            'CSU, Main'
          ]
        },

        {
          id: 'lasco',
          name: 'Ms. Maris T. Lasco',
          position: ['Secondary Dept.'],
          descrip: [
            'BS - Teaching Mathematics',
            'CSU, Main','-',
            'MSciEd - Secondary Mathematics',
            'CSU, Main', '-',
            'PhDSciEd - Mathematics (on-study leave)',
            'De La Salle University, Manila'
          ]
        },

        {
          id: 'low',
          name: 'Dr. Sonia R. Low',
          position: ['Secondary Dept.','Director (PIAEA)','Co-Chair (IMDC)'],
          descrip: [
            'AB - English',
            'FSUU, Butuan City','-',
            'BSEd - English',
            'Lourdes College, CDO', '-',
            'MA - English (Literature)',
            'Xavier University, CDO','-',
            'EdD - Educational Management',
            'CSU, Main'
          ]
        },

        {
          id: 'mamaoag',
          name: 'Dr. Natividad R. Mamaoag',
          position: ['Secondary Dept.','Dean (Graduate School)'],
          descrip: [
            'BS in Biology',
            'University of San Carlos, Cebu City','-',
            'MAED - Educational Management',
            'Agusan Institute of Technology, Butuan City', '-',
            'Ed.D. - Science Education',
            'Cebu Normal University, Cebu City'
          ]
        },

        {
          id: 'mercado_m',
          name: 'Ms. Rissa T. Mercado',
          position: ['Secondary Dept.'],
          descrip: [
            'BS - Physical Education',
            'MSU, IIT','-',
            'MAEd - General Education',
            'CSU, Main', '-',
            'PhDEd - Curriculum Development (on-going)',
            'University of San Carlos, Cebu City'
          ]
        },

        {
          id: 'raganas_r',
          name: 'Dr. Nelia S. Raganas',
          position: ['Secondary Dept.','Director (National Service Training Program)','Focal Person (Disaster Risk Reduction)'],
          descrip: [
            'BSEd - Mathematics',
            'FSUU, Butuan City','-',
            'MAEd - Mathematics',
            'Bukidnon State University, Bukidnon', '-',
            'MAEd - Comp. Applied Instruction',
            'Adamson University, Manila', '-',
            'PhD - Math\'1 Sciences (Mathematics Education)',
            'Mindanao University of Science and Technology, CDO'
          ]
        },

        {
          id: 'garay',
          name: 'Dr. Lorline N. Garay',
          position: ['Secondary Dept.'],
          descrip: [
            'BSEd - Mathematics',
            'CSU, Main','-',
            'MAEd - Mathematics',
            'Bukidnon State University, Bukidnon', '-',
            'MAEd - Mathematics',
            'FSUU - Butuan City','-',
            'Ph.D in Education (unit earner)',
            'FSUU - Butuan City'
          ]
        },

        //end sa secondaryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

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
