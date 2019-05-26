<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="All CAS Faculty" back-link="Back">
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

      //end of MATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

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

        // end sa chemistryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

        {
          id: 'lazarte_j',
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
        },

         //end sa  physicssssssssssssssssssssss

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
          id: 'japitana_r',
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
        },

        //end of biologyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

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
        },

        {
          id: 'matala',
          name: 'Mr. Patrick A. Matala',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'Ph.D. in English',
            'University of San Jose Recoletos (on-going)', '-',
            'MA in Education Major in English Language Teaching',
            'CNU, Cebu City', '-',
            'BS in Education Major in English',
            'CNU, Cebu City'
          ]
        },

        {
          id: 'alingato',
          name: 'Ms. Shella M. Alingato',
          position: ['Languages & Literature Dept.'],
          descrip: [
            'MA in Filipino',
            'St. Paul University, Surigao City', '-',
            'Bachelor of Arts Major in Filipino and other Languages',
            'MSU - IIT, Iligan City'
          ]
        },

        // end sa Languages & Literatureeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

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
