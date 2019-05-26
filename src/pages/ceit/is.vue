<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Information System" back-link="Back">
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
        }



      ]

    }
  }

}
</script>
