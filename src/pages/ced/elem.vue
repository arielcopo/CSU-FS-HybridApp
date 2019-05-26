<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Elementary Education" back-link="Back">
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
        }

      ]

    }
  }

}
</script>
