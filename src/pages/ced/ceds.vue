<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="CED Staff" back-link="Back">
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
          id: 'maputol',
          name: 'Ms. Karen Grace M. Maputol',
          position: ['Technical Staff'],
          descrip: [
            'BSIT',
            'CSU, Main','-',
            'Teacher Certificate Program (on-going)',
            'Saint Michael College of Caraga, Nasipit'
          ]
        },

        {
          id: 'tumada',
          name: 'Ms. Stephine Tumada-Alvizo',
          position: ['Office Staff'],
          descrip: [
            'BSIT',
            'CSU, Main','-',
            'Teacher Certificate Program (on-going)',
            'Saint Michael College of Caraga, Nasipit'
          ]
        },

        {
          id: 'enoja',
          name: 'Ms. Darlyn Jhane Enoja',
          position: ['Office Staff'],
          descrip: [
            'BEEd',
            'Bukidnon State University'
          ]
        },

        {
          id: 'dulhao',
          name: 'Mr. Ramil C. Dulhao',
          position: ['Office Staff'],
          descrip: [
            'BS - Criminology',
            'Agusan Institute of Technology, Butuan City'
          ]
        },

        {
          id: 'cloribel',
          name: 'Ms. Jocelyn B. Cloribel',
          position: ['College Aide'],
          descrip: [
            'Diploma in Agriculture and Technology',
            'CSU, Main'
          ]
        },

        {
          id: 'ancheta',
          name: 'Mr. Jonas L. Ancheta',
          position: ['College Aide']
        }


      ],
    }
  }

}
</script>
