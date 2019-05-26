<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="CAS Staff" back-link="Back">
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
      eduback: '',
      employee: [
        {
          id: 'bas',
          name: 'Ms. Sherlyn A. Bas',
          position: ['CAS Office Staff'],
          descrip: [
            'BEED in Mathematics',
            'CSU (2001)','-',
            'MSsiEd Mathematics',
            'CSU (CAR)'

          ]
        },

        {
          id: 'villanueva',
          name: 'Mr. Hyx A. Villanueva',
          position: ['CAS Office Staff'],
          descrip: [
            'BS in Computer Science',
            'SJIT (2006)'

          ]
        },

        {
          id: 'dela-cruz_j',
          name: 'Ms. Jasmin A. Dela Cruz',
          position: ['CAS Office Staff'],
          descrip: [
            'AB in Philippine Literature',
            'CSU (2016)'

          ]
        },

        {
          id: 'amplayo',
          name: 'Mr. Wilfredo Amplayo',
          position: ['CAS Office Staff'],
          descrip: [
            'BS in Biology',
            'CSU (2010)'

          ]
        },

        {
          id: 'namoc',
          name: 'Mr. Antonio G. Namoc',
          position: ['College Aide CAS Building'],
          descrip: [
            'Engineering Technology',
            'MSU - IIT, Iligan'
          ]
        },

        {
          id: 'makiling',
          name: 'Mr. Carlos Makiling',
          position: ['College Aide S&T Building'],
          descrip: [
            'General Radio',
            'Communication Operator (1991)'
          ]
        },

        {
          id: 'manansala',
          name: 'Ms. Ritchelle Manansala',
          position: ['Lab Technician Nat. Sci. Stockroom'],
          descrip: [
            'BS in Biology',
            'CSU (2008)'
          ]
        }
      ]
    }
  }

}
</script>
