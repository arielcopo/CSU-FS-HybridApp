<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Social Sciences and Humanities" back-link="Back">
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
          id: 'badiang',
          name: 'Ms. Shiela S. Badiang',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'BS Psychology',
            'MSU - IIT (2001)','-',
            'MAEd Guidance Counseling',
            'FSUU (2009)'
          ]
        },

        {
          id: 'alan',
          name: 'Mr. Erico G. Alan',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB in Econimics',
            'Urios College (1990)','-',
            'MA in Business Administration',
            'FSUU (1995)','-',
            'Doctor in Management',
            'Urios College (1999)'

          ]
        },

        {
          id: 'bolongaita',
          name: 'Mr. Johnny P. Bolongaita',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB in English/Philosophy',
            'Urios College (1990)',
            'MA Educational Management',
            'Urios College (1995)', '-',
            'Ph.D. (Units Earned)'

          ]
        },

        {
          id: 'maglente_n',
          name: 'Mr. Norry P. Maglente',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB Sociology',
            'CSU (2000)'

          ]
        },

        {
          id: 'masing',
          name: 'Ms. Anna Lyn A. Masing',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'BS in Psychology',
            'MSU - Main (1991) Cum Laude','-',
            'MEd Guidance & Counseling',
            'XU (2007)','-',
            'Ph.D. in Psychology',
            'Counseling Ateneo de Davao University (on-going)'
          ]
        },

        {
          id: 'sanchez',
          name: 'Ms. Ruth E. Sanchez',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB in Psychology',
            'MSU - Main (1989)','-',
            'MA in Organizational Psychology',
            'Xavier University CDO (2008)', '-',
            'Ph.D. in Psychology',
            'Ateneo de Davao University (on-going)'
          ]
        },

        {
          id: 'yting',
          name: 'Ms. Ana Ma.Belinda R. Yting',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'BS in International Relations',
            'MSU - Main (1989)','-',
            'MA in History',
            'University of San Carlos, Cebu City (2012)'
          ]
        },

        {
          id: 'alesna',
          name: 'Mr. Cedrix Von T. Alesna',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB Philosophy',
            'USC Cebu (2007)','-',
            'MA in Philosophy',
            'USC (on-going)'
          ]
        },

        {
          id: 'catle',
          name: 'Ms. Jewry S. Catle',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB Sociology',
            'MSU - IIT (2007)','-',
            'MA in Sociology',
            'MSU - IIT (2016)'
          ]
        },

        {
          id: 'manigo',
          name: 'Ms. Lilibeth L. Manigo',
          position: ['Secretary','Social Sciences & Humanities Dept.'],
          descrip: [
            'BS in Psychology',
            'MSU - Main (2007) Magna Cum Laude', '-',
            'MA Guidance & Counseling',
            'FSUU (2013)', '-',
          ]
        },

        {
          id: 'miranda',
          name: 'Ms. Connie Fern B. Miranda',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB Sociology',
            'MSU - IIT (2008)','-',
            'MA in Sociology',
            'MSU - IIT (2016)'
          ]
        },

        {
          id: 'tabugon',
          name: 'Mr. Garry B. Tabugon',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB Philosophy',
            'SCCS Marikina (2007)','-',
            'MA in Philosophy',
            'UP Diliman (2013)'
          ]
        },

        {
          id: 'makinano',
          name: 'Mr. Rex B. Makinano',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB Sociology',
            'MSU - Main (1997)','-',
            'MA in Sociology',
            'MSU - IIT (2008)'
          ]
        },

        {
          id: 'maglente',
          name: 'Ms. Ordem K. Maglente',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB in Sociology',
            'CSU (2000)','-',
            'MA in Public Administration',
            'CSU (CAR)', '-',
            'MA in Sociology',
            'MSU - IIT (2010)', '-',
            'Ph.D. in Sociology',
            'XU, CDO (on-going)'

          ]
        },

        {
          id: 'martinez',
          name: 'Mr. Paolo Alberto A. Martinez',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'BS in Psychology',
            'MSU - Main (2013)'

          ]
        },

        {
          id: 'ortega',
          name: 'Ms. Gracyl Mae U. Ortega',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'BS in Psychology',
            'MSU - Main (2015)'

          ]
        },

        {
          id: 'tortola',
          name: 'Mr. Master George M. Tortola',
          position: ['Social Sciences & Humanities Dept.'],
          descrip: [
            'AB in History/CT',
            'CMU, Bukidnon (1992)','-',
            'MA in Teaching Social Studies',
            'CMU, Bukidnon (27 units)'

          ]
        }

      ]
    }
  }

}
</script>
