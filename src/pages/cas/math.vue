<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Mathematics" back-link="Back">
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
          id: 'paluga',
          name: 'Dr. Esamel M. Paluga',
          position: ['Dean','Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (1993)','-',
            'Ph.D. in Mathematics',
            'MSU - IIT (2005)', '-',
            'MS in Mathematics',
            'MSU - IIT (1997)'
          ]
        },

        {
          id: 'bugaay',
          name: 'Ms. Gretchen Mae C. Bugaay',
          position: ['Chairperson','Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2008)', '-',
            'MS in Mathematics',
            'ADMU (2014)', '-',
          ]
        },

        {
          id: 'agua',
          name: 'Mr. Breix Michael G. Agua',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'CSU (2012)','-',
            'MS in Mathematics,',
            'CSU (2016)'

          ]
        },

        {
          id: 'burdeos',
          name: 'Ms. Karen B. Burdeos',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'CSU (2011)','-',
            'MS in Mathematics,',
            'UPLB (2014)'

          ]
        },

        {
          id: 'ilagan',
          name: 'Mr. Krystoffer Adonis R. Ilagan',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - IIT (2012)','-',
            'MS in Statistics,',
            'MSU - IIT (on-going)'

          ]
        },

        {
          id: 'madronero',
          name: 'Mr. Jonathan A. Madronero',
          position: ['Math Dept.'],
          descrip: [
            'BS in Statistics',
            'MSU - IIT (2008)','-',
            'MS in Statistics,',
            'MSU - IIT (2013)'

          ]
        },

        {
          id: 'pajaron',
          name: 'Ms. Kaye Y. Pajaron',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - IIT (2016)','-',
            'MS in Mathematics,',
            'CSU (on-going)'

          ]
        },

        {
          id: 'rendeza',
          name: 'Mr. Jeriel S. Rendeza',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2014)','-',
            'MS in Mathematics,',
            'CSU (on-going)'

          ]
        },

        {
          id: 'albia',
          name: 'Mr. Jake A. Albia',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - IIT (2003) Cum Laude', '-',
            'MS in Mathematics',
            'MSU - IIT (2006)', '-',
            'Ph.D. in Mathematics',
            'ADMU (CAR)'
          ]
        },

        {
          id: 'cuaresma',
          name: 'Mr. Edilberto C. Cuaresma Jr.',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2007)', '-',
            'MS in Mathematics',
            'CSU (2014)', '-',
            'Ph.D. in Mathematics',
            'ADMU (on-going)'
          ]
        },

        {
          id: 'latayada_m',
          name: 'Ms. Mary Joy R. Latayada',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2000) ', '-',
            'MS in Statistics',
            'MSU - IIT (2014)', '-',
            'Ph.D. in Mathematics',
            'MSU - IIT (on-going)'
          ]
        },

        {
          id: 'mentuda',
          name: 'Ms. Cheryl Q. Mentuda',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2010) ', '-',
            'MS in Mathematics',
            'MSU - Main (2015)'
          ]
        },

        {
          id: 'paluga_r',
          name: 'Dr. Rolando N. Paluga',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - IIT (1987)', '-',
            'MS in Mathematics',
            'MSU - IIT (1996)', '-',
            'Ph.D. in Mathematics',
            'MSU - IIT (2002)'
          ]
        },

        {
          id: 'alerta',
          name: 'Mr. Gilbert Alerta',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics Applied Stat.',
            'CSU (2012) Magna Cum Laude', '-',
            'MS in Statistics',
            'UP Los Banos (CAR)'
          ]
        },

        {
          id: 'dangate',
          name: 'Ms. Abigael J. Dangate',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2004)', '-',
            'MS in Mathematics',
            'CSU (2016)'
          ]
        },

        {
          id: 'libao',
          name: 'Ms. Merliza F. Libao',
          position: ['Math Dept.'],
          descrip: [
            'BS in Electrical Engineering',
            'DMMMU (1998)', '-',
            'BSE - Mathematics',
            '(NORMISIST, 24 units)','-',
            'MA in Teaching Mathematics',
            '(NORMISIST)','-',
            'MS in Mathematics',
            'UP Baguio','-',
            'Ph.D. in Math Sci-Applied Mathematical Science',
            'MUST (on-going)'
          ]
        },

        {
          id: 'nepa',
          name: 'Ms. Marilou T. Nepa',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2000)','-',
            'MS in Applied Mathematical Science',
            'MUST (CAR) ', '-',
            'MS in Mathematics',
            'CSU (2016) '
          ]
        },

        // PALUGA ESAMEL M

        {
          id: 'arcede',
          name: 'Dr. Jayrold P. Arcede',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - IIT (2001)', '-',
            'MS in Mathematics',
            'MSU - IIT (2004)', '-',
            'Ph.D. in Mathematics',
            'ADMU (2010)'
          ]
        },

        {
          id: 'domingo',
          name: 'Dr. Job H. Domingo',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (1990)','-',
            'MS in Mathematics',
            'DLSU (1997)', '-',
            'Ph.D. in Mathematics',
            'MSU - IIT (2013)'
          ]
        },

        {
          id: 'lingo',
          name: 'Mr. Junar T. Lingo',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics Applied Stat',
            'CSU (2013)','-',
            'MS in Mathematics',
            'CSU (on-going)'
          ]
        },

        {
          id: 'ocarez',
          name: 'Dr. Felix R. Ocarez',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU Marawi (1989)', '-',
            'MS in Mathematics',
            'MSU - IIT (2002)', '-',
            'Ph.D. in Mathematics',
            'ADMU (Units Earned)', '-',
            'Doctor of Educational Management & Supervision',
            'CSU (2013)'
          ]
        },

        {
          id: 'pelemeniano',
          name: 'Ms. Airish P. Pelemeniano',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'CSU (2010)', '-',
            'MS in Mathematics',
            'CSU (2016)'
          ]
        },

        {
          id: 'arlan',
          name: 'Mr. Erwin N. Arlan',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2010) Cum Laude', '-',
            'MS in Mathematics',
            'MSU - Main (2015)'
          ]
        },

        {
          id: 'herrera_f',
          name: 'Dr. Fernando T. Herrera',
          position: ['Math Dept.'],
          descrip: [
            'BS in Civil Engineering',
            'MSU - Main (1992)', '-',
            'MST in Mathematics',
            'MUST (2003)', '-',
            'Ph.D. in Mathematical Sciences',
            'MUST (2007)'
          ]
        },

        {
          id: 'macalalag',
          name: 'Mr. Jay Michael R. Macalalag',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics Applied Stat',
            'CSU (2012) Magna Cum Laude', '-',
            'MS in Mathematics',
            'CSU (2013)', '-',
            'Ph.D. in Mathematics',
            'ADMU (on-going)'
          ]
        },

        {
          id: 'padecio',
          name: 'Ms. Angela Fel A. Padecio',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'MSU - Main (2011)', '-',
            'MS in Statistics',
            'MSU - IIT (2013)', '-',
            'Ph.D. in Statistics',
            'UPLB (on-going)'
          ]
        },

        {
          id: 'permanes',
          name: 'Ms. Sheila Rae E. Permanes',
          position: ['Math Dept.'],
          descrip: [
            'BS in Mathematics',
            'CSU (2011)', '-',
            'MS in Mathematics',
            'CSU (2016)'
          ]
        },

        {
          id: 'gaquing',
          name: 'Dr. Napoleon A. Gaquing Jr.',
          position: ['Math Dept.'],
          descrip: [
            'Ph.D. in Mathematics',
            'MSU - IIT, Iligan City', '-',
            'MS in Mathematics',
            'MSU - IIT, Iligan City', '-',
            'BS in Mathematics',
            'MSU, Marawi City'
          ]
        },

        {
          id: 'baje',
          name: 'Mr. Cheto A. Baje',
          position: ['Math Dept.'],
          descrip: [
            'MS in Mathematics (On Going)',
            'CSU, Butuan City ', '-',
            'BS in Statistics',
            'MSU - IIT, Iligan City',
          ]
        },

        {
          id: 'coquilla',
          name: 'Mr. Carlo M. Coquilla',
          position: ['Math Dept.'],
          descrip: [
            'MS in Mathematics (on-going)',
            'CSU, Butuan City', '-',
            'BS in Mathematics',
            'CSU, Butuan City'
          ]
        },

      ]
    }
  }

}
</script>
