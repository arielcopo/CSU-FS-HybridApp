<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Languages and Literature" back-link="Back">
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
          id: 'torralba',
          name: 'Ms. Shella A. Torralba',
          position: ['Chairperson','Languages & Literature Dept.'],
          descrip: [
            'AB in Filipino',
            'MSU - IIT (2008)', '-',
            'MA in Filipino',
            'SPU, Surigao City (2014)'
          ]
        },

        {
          id: 'acabo',
          name: 'Ms. Meldy A. Acabo',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB in English',
            'MSU - Main (2011) Cum Laude', '-',
            'MA in English',
            'SPUS Surigao (on-going)'
          ]
        },

        {
          id: 'bohol',
          name: 'Mr. Jan Grenechaux V. Bohol',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB in English',
            'MSU - IIT (2011)', '-',
            'MA in English Language Teaching',
            'MSU - Maguindanao (on-going)'
          ]
        },

        {
          id: 'castro',
          name: 'Ms. Dolly Loves S. Castro',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB Philippine Literature',
            'CSU (2015)', '-',
            'MA in Filipino',
            'SPU SUrigao (on-going)'
          ]
        },

        {
          id: 'lopez',
          name: 'Ms. Liezl T. Lopez',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB Mass Communication',
            'SJIT (2010)', '-',
            'Teacher Certificate Program',
            'CSU (2015)','-',
            'MA Media Studies',
            'USJR (9 units)','-',
            'MA Ed in English Language Teaching',
            'CSU (on-going)'

          ]
        },

        {
          id: 'taragua',
          name: 'Mr. Enrique F. Taragua',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB in English',
            'SJIT (1992)','-',
            'MA in Education Managament',
            'SJIT (1995)', '-',
            'MA in English Language Teaching',
            'PNU (CAR)', '-',
            'Ph.D. in English',
            'USJR (on-going)'
          ]
        },

        {
          id: 'brown',
          name: 'Ms. Didith P. Brown',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'BS Ed Major in Filipino',
            'MSU - Main (1993)','-',
            'MA in Filipino',
            'MSU - Main (2000)', '-',
            'Ph.D. in Filipino',
            'MSU - IIT (candidate)'


          ]
        },

        {
          id: 'cubillan',
          name: 'Mr. Myron T. Cubillan',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'BS Ed in English',
            'SSCT (2008) Cum Laude','-',
            'MA Ed in English',
            'SSCT (2013)', '-',
            'Ph.D. in English',
            'MSU - IIT (on-going)'
          ]
        },

        {
          id: 'paz_p',
          name: 'Mr. Petervir A. Paz',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB in English/Philosophy',
            'St. Peter Seminary (1996)','-',
            'Master in Public Administration',
            'CSU (2004)', '-',
            'MA in English',
            'SPU (2013)','-',
            'Ph.D. in Developmental Communication',
            'UPLB (on-going)'
          ]
        },

        {
          id: 'trugillo',
          name: 'Ms. Rolyna S. Trugillo',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'BSEd English',
            'MSU - Main (2002) Cum Laude','-',
            'MA in English',
            'SPU (2010)', '-',
            'Ph.D. in Education Management',
            'St. Paul University Surigao (2016)'
          ]
        },

        {
          id: 'arnado',
          name: 'Ms. Marsha O. Arnado',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'BS Ed Filipino',
            'CCC (2016)','-',
            'MA in Filipino',
            'CTU Cebu (on-going)'
          ]
        },

        {
          id: 'cenabre',
          name: 'Ms. Maricel L. Cenabre',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'BS Ed Major in English',
            'MSU - Main (2006)','-',
            'MAEd English',
            'PNU (on-going)'
          ]
        },

        {
          id: 'dedoro',
          name: 'Ms. Regine I. Dedoro',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'BS Ed Major in English',
            '(2015)'
          ]
        },

        {
          id: 'ponio',
          name: 'Ms. Ana Liza S. Ponio',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'BS Ed in Filipino',
            'FSUU', '-',
            'MA in Filipino Literature',
            'PNU (CAR)'
          ]
        },

        {
          id: 'vergara_j',
          name: 'Ms. Jo Airen O. Vergara',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB in Filipino',
            'MSU - IIT (2014)'
          ]
        },

        {
          id: 'betito',
          name: 'Ms. Jessarie N. Betito',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB in Philippine Literature',
            'CSU (2015)'
          ]
        },

        {
          id: 'cabonce',
          name: 'Ms. Margeline C. Cabonce',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'BS Ed Filipino',
            'FSUU (1998)','-',
            'MA in Filipino Literature',
            'PNU - Agusan (2013)'
          ]
        },

        {
          id: 'legaspi',
          name: 'Mr. Gomer Jay S. Legaspi',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB English',
            'CMU (2013)','-',
            'MA in Teaching English',
            'FSUU (24 units)','-',
            'Certificate of Teaching Program',
            'Xavier Univerity CDO (on-going)'
          ]
        },

        {
          id: 'saspa',
          name: 'Ms. Flordelez U. Saspa',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB English',
            'BSU (1987)', '-',
            'CT Elementary Option',
            'CMU (2000)', '-',
            'MA in Language Education',
            'CMU (2000)'
          ]
        },

        {
          id: 'vergara_m',
          name: 'Mr. Mark Vincent G. Vergara',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'AB English',
            'MSU - Main (2016) Cum Laude'
          ]
        }

      ]
    }
  }

}
</script>
