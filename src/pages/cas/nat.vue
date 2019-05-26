<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Natural Sciences" back-link="Back">
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
          id: 'loquere',
          name: 'Ms. Christina Y. Loquere',
          position: ['Chairperson','Chemistry Coordinator','Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemical Engineering',
            'Cebu Institute of Tech. University (2005)', '-',
            'MS in Chemistry',
            'MSU - IIT (2013)'
          ]
        },

        {
          id: 'barquilla',
          name: 'Mr. Michael Dave P. Barquilla',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (2010) Cum Laude', '-',
            'MS in Chemistry',
            'MSU - IIT (2014)'
          ]
        },

        {
          id: 'capangpangan',
          name: 'Dr. Rey Y. Capangpangan',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (2001)', '-',
            'MS in Chemistry',
            'UP Diliman (2008)','-',
            'Ph.D. in Chemistry',
            'National TsingHua University Taiwan (2016)'
          ]
        },

        {
          id: 'galleros',
          name: 'Mr. Raul B. Galleros',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'Chemical Eng\'g Technology',
            'MSU - IIT', '-',
            'BS in Chemical Eng\'g',
            'COC, Cagayan de Oro','-',
            'MS in Mathematics Education',
            'PUP Manila (units earned)'
          ]
        },

        {
          id: 'mapatac',
          name: 'Dr. Levitah C. Mapatac',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemical Engineering',
            'COC, Cagayan de Oro (1988)','-',
            'MS in Teaching Physical Science',
            'MUST, Cagayan de Oro (1998)', '-',
            'Ph.D. Sci. Ed. Chemistry',
            'MUST, Cagayan de Oro (2016)'

          ]
        },

        {
          id: 'pagapong',
          name: 'Ms. Nen Kenneth D. Pagapong',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'UP Visayas (2002)','-',
            'MS in Chemistry',
            'MSU - IIT (2008)'
          ]
        },

        {
          id: 'basnig',
          name: 'Ms. Deomila A. Basnig',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (2002)','-',
            'MS in Chemistry',
            'ADMU, Quezon City'

          ]
        },

        {
          id: 'ciudad',
          name: 'Mr. Kenneth L. Ciudad',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (2005)',
            'MS in Chemistry',
            'UPLB, Laguna (2010)'

          ]
        },

        {
          id: 'latayada_f',
          name: 'Mr. Felmer S. Latayada',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (1999) ','-',
            'MS in Chemistry',
            'MSU - IIT (2010)', '-',
            'Ph.D. in Chemistry',
            'MSU - IIT (on-going)'
          ]
        },

        {
          id: 'montero',
          name: 'Ms. Myra Joy B. Montero',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (2015)'
          ]
        },

        {
          id: 'pearson',
          name: 'Mr. Kyle Bryan N. Pearson',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Environmental Science',
            'CSU (2013)'
          ]
        },

        {
          id: 'caadan',
          name: 'Mr. Margarito G. Caadan',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'CSU (2002)', '-',
            'MS in Chemistry',
            'UPLB (on-going)'
          ]
        },

        {
          id: 'dejarme',
          name: 'Mr. Henson M. Dejarme',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (1997)', '-',
            'MS in Chemistry',
            'ADMU','-',
            'Ph.D. in Chemistry',
            'MSU -IIT (on-going)'
          ]
        },

        {
          id: 'lavapiez',
          name: 'Mr. Mark Anthony Lavapiez',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (2010) Magna Cum Laude', '-',
            'MS in Chemistry',
            'MSU - IIT (CAR)'
          ]
        },

        {
          id: 'orog',
          name: 'Ms. Brigette Y. Orog',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (2003)', '-',
            'MS in Chemistry',
            'UPLB (on-going)'
          ]
        },

        {
          id: 'vales',
          name: 'Mr. Temmy P. Vales',
          position: ['Natural Sciences Dept.','Chemistry Instructor'],
          descrip: [
            'BS in Chemistry',
            'MSU - IIT (2011) Cum Laude', '-',
            'MS in Chemistry',
            'MSU - IIT (2014)'
          ]
        },

        {
          id: 'lazarte',
          name: 'Ms. Jessa Mae T. Lazarte',
          position: ['Physics Coordinator','Natural Sciences Dept.'],
          descrip: [
            'BS in Physics',
            'MSU - Main (2010)', '-',
            'MS in Physics',
            'MSU - IIT (2015)'
          ]
        },

        {
          id: 'apas',
          name: 'Mr. Ruel S. Apas',
          position: ['Natural Sciences Dept.','Physics Instructor'],
          descrip: [
            'BS in Physics',
            'MSU - Main (2007)', '-',
            'MS in Physics',
            'ADMU, Quezon City (2014)'
          ]
        },

        {
          id: 'budlayan',
          name: 'Mr. Marco Laurence M. Budlayan',
          position: ['Natural Sciences Dept.','Physics Instructor'],
          descrip: [
            'BS in Physics',
            'CSU (2016) Magna Cum Laude'
          ]
        },

        {
          id: 'manigo_j',
          name: 'Mr. Jonathan P. Manigo',
          position: ['Natural Sciences Dept.','Physics Instructor'],
          descrip: [
            'BS in Physics',
            'MSU - IIT (2004) Magna Cum Laude','-',
            'MS in Physics',
            'MSU - IIT (2008)','-',
            'Ph.D. in Physics',
            'ADMU (2016)',
          ]
        },

        {
          id: 'pantohan',
          name: 'Mr. Edmar G. Pantohan',
          position: ['Natural Sciences Dept.','Physics Instructor'],
          descrip: [
            'BS in Physics',
            'CSU (2006) Cum Laude','-',
            'MS in Physics',
            'MSU - IIT (2011)'
          ]
        },

        {
          id: 'edilo',
          name: 'Ms. Gladys G. Edilo',
          position: ['Natural Sciences Dept.','Physics Instructor'],
          descrip: [
            'BS in Physics',
            'CSU (2016) Magna Cum Laude'
          ]
        },

        {
          id: 'mozo',
          name: 'Mr. Melecio F. Mozo',
          position: ['Natural Sciences Dept.','Physics Instructor'],
          descrip: [
            'BS in Physics',
            'MSU - Main (1986)','-',
            'MS in Physics',
            'ADMU (1999)'

          ]
        },

        {
          id: 'vergara',
          name: 'Mr. Joey Arles O. Vergara',
          position: ['Natural Sciences Dept.','Physics Instructor'],
          descrip: [
            'BS in Physics',
            'MSU - IIT (2004)', '-',
            'MS in Physics',
            'ADMU, Quezon City'
          ]
        }

      ]
    }
  }

}
</script>
