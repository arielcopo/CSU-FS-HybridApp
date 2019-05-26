<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Biology" back-link="Back">
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
          id: 'ombat',
          name: 'Dr. Leila A. Ombat',
          position: ['Chairperson','Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - Main (1988)','-',
            'MS in Biology',
            'MSU - IIT (1997)', '-',
            'Ph.D. in Biology',
            'MSU - IIT (2016)'
          ]
        },

        {
          id: 'almadin',
          name: 'Mr. Florence Jhun F. Almadin',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - Main (2011)','-',
            'MS in Biology',
            'CSU (on-going)'
          ]
        },

        {
          id: 'dela-cruz',
          name: 'Mr. Ian Niel B. Dela Cruz',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - IIT (2012)','-',
            'MS in Biology',
            'MSU - IIT (2016)'
          ]
        },

        {
          id: 'gamalinda',
          name: 'Dr. Eve F. Gamalinda',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Zoology',
            'MSU - IIT (2001)','-',
            'MS in Biology',
            'MSU - IIT (2006)','-',
            'Ph.D. in Zoology',
            'Nanjing University, China (2016)'
          ]
        },

        {
          id: 'jumawan',
          name: 'Mr. Jess H. Jumawan',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - Main (2000)','-',
            'MS in Biology',
            'CMU, Bukidnon (2006)', '-',
            'Ph.D. in Biology',
            'UPLB (on-going)'

          ]
        },

        {
          id: 'rosal',
          name: 'Mr. Jashin J. Rosal',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Zoology',
            'MSU - Main (2012)','-',
            'MS in Zoology',
            'UPLB (on-going)'
          ]
        },

        {
          id: 'boyles',
          name: 'Dr. Lilia Z. Boyles',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CMU, Bukidnon (1991)','-',
            'MS in Biology',
            'CMU , Bukidnon (1996)', '-',
            'Ph.D. in Biology',
            'CMU, Bukidnon (2004)'
          ]
        },

        {
          id: 'demerillo',
          name: 'Mr. Meljan T. Demerillo',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CMU, Bukidnon (1999)','-',
            'MS in Biology',
            'MSU - IIT (2006)', '-',
            'Ph.D. in Biology',
            'MSU - IIT (on-going)'
          ]
        },

        {
          id: 'galolo',
          name: 'Dr. Adam Roy V. Galolo',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - Main (1995) Cum Laude',
            'MS in Biology',
            'MSU - IIT (1996)', '-',
            'Ph.D. in Biology',
            'MSU - IIT (2016)'
          ]
        },

        {
          id: 'leones',
          name: 'Mr. Julius Anthony M. Leones',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CSU (2014)'
          ]
        },

        {
          id: 'salanatin',
          name: 'Mr. Clyde A. Salanatin',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'San Pedro College, Davao (1997)','-',
            'MA in Education',
            'CSU (Formerly NORMISIST 2003) '

          ]
        },

        {
          id: 'buenaflor',
          name: 'Mr. Exur M. Buenaflor',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Marine Biology',
            'MSU Naawan (2013)','-',
            'MA Environmental Management',
            'CSU (on-going)'

          ]
        },

        {
          id: 'estano',
          name: 'Mr. Leonardo A. Estano',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CSU Main (2015)'

          ]
        },

        {
          id: 'hernando',
          name: 'Mr. Brent Joy H. Hernando',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - IIT (2012)','-',
            'MS in Biology',
            'MSU - IIT (2015)'

          ]
        },

        {
          id: 'magdugo',
          name: 'Mr. Rexie P. Magdugo',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - Naawan (2004)','-',
            'MS in Fisheries Biology',
            'UP - Visayas Miagao Iloilo (2010)'

          ]
        },

        {
          id: 'solania',
          name: 'Ms. Chenniel L. Solania',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CSU (2013)','-',
            'MS in Biology',
            'CSU (on-going)'
          ]
        },

        {
          id: 'calagui',
          name: 'Mr. Laurence B. Calagui',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Marine Biology',
            'MSU Naawan (2010)','-',
            'MS in Marine Biology',
            'MSU Naawan (2015)'
          ]
        },

        {
          id: 'fajardo',
          name: 'Ms. Dawn Rosarie M. Fajardo',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CSU (2012)','-',
            'MS in Biology',
            'CSU (on-going)'
          ]
        },

        {
          id: 'japitana',
          name: 'Ms. Rowena A. Japitana',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CSU (2012)','-',
            'MS in Botany',
            'UPLB (on-going)'
          ]
        },

        {
          id: 'paylangco',
          name: 'Mr. Jesiel Cris C. Paylangco',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CSU (2011)','-',
            'MS in Biology',
            'CSU (units earned)'
          ]
        },

        {
          id: 'tiempo',
          name: 'Ms. Cherry Mar T. Tiempo',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CSU (2016)'
          ]
        },

        {
          id: 'calub',
          name: 'Ms. Aiza Mae B. Calub',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CSU (2012)', '-',
            'MS in Biology',
            'MSU - IIT (on-going)'
          ]
        },

        {
          id: 'gallego',
          name: 'Ms. Rovelyn P. Gallego',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Nursing',
            'MSU - IIT (2011)', '-',
            'MS in Biology',
            'MSU - IIT (2015)'
          ]
        },

        {
          id: 'jumawan_j',
          name: 'Dr. Joycelyn C. Jumawan',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'CMU, Bukidnon (2002) Cum Laude',
            'MS in Biology',
            'MSU - IIT (2006)', '-',
            'Ph.D. in Biology',
            'UP Diliman (2011)'
          ]
        },

        {
          id: 'raganas',
          name: 'Ms. Cinderella D. Raganas',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - IIT (2012)', '-',
            'MS in Biology',
            'MSU - Main (units earned)'
          ]
        },

        {
          id: 'won',
          name: 'Ms. Maria Elma Q. Won',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU - IIT (1999)', '-',
            'MS in Biology',
            'MSU - IIT (2005)','-',
            'Ph.D. in Biology',
            'MSU - IIT (on-going)'
          ]
        },

        {
          id: 'seronay',
          name: 'Dr. Romella A. Seronay',
          position: ['Biology Dept.'],
          descrip: [
            'Ph.D. in Marine Science',
            'UP-Diliman, Quezon City', '-',
            'MS in Marine Biology',
            'MSU - Naawan', '-',
            'BS in Biology',
            'Ateneo de Cagayan, Cagayan de Oro City'
          ]
        },

        {
          id: 'demetillo_m',
          name: 'Mr. Meljan T. Demetillo',
          position: ['Biology Dept.'],
          descrip: [
            'Ph.D. in Biology(unit earner)',
            'CMU, Bukidnon', '-',
            'MS in Biology',
            'CMU, Bukidnon', '-',
            'BS in Biology',
            'CMU, Bukidnon'
          ]
        },

        {
          id: 'paz',
          name: 'Ms. Sherryll L. Paz',
          position: ['Biology Dept.'],
          descrip: [
            'Master of Environmental Management',
            'CSU, Butuan City', '-',
            'MS in Biology (on-going)',
            'MSU - IIT, Iligan City', '-',
            'BS in Biology' ,
            'University of San Carlos'
          ]
        },

        {
          id: 'dagani',
          name: 'Ms. Cinderella D. Dagani',
          position: ['Biology Dept.'],
          descrip: [
            'BS in Biology',
            'MSU, Marawi City'
          ]
        }


      ]
    }
  }

}
</script>
