<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Right Panel -->
    <f7-panel right cover theme-white>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>

    <app-body v-bind:employee="employee" v-bind:eduback="eduback" v-show="notshow"></app-body>
    <div v-show="notshow" class="render_intro"></div>
    <div v-show="notshow" class="render_blur"></div>
    <div v-show="notshow" class="render_fssmall"></div>
    <div v-show="notshow" class="render_fs"></div>
    <div v-show="notshow" class="render_csu"></div>
    <div v-show="notshow" class="render_mylogo"></div>
  </div>
</template>

<style scoped>

.render_intro {background: url(images/cleanbgfinal.jpg);}
.render_blur {background: url(images/blurbgfinal.jpg);}
.render_fssmall {background: url(images/fssmall.png);}
.render_fs {background: url(images/fs.png);}
.render_csu {background: url(images/csu.png);}
.render_mylogo {background: url(images/white.png);}

</style>



<script>
import Body from './pages/scrolling.vue';


export default {

  components: {
    'app-body': Body
  },
  data () {
    return {
      notshow: false,
      eduback: 'EDUCATIONAL BACKGROUND',
      employee: [
        /* CEIT FACULTY */
        {
          id: 'santillan',
          name: 'Engr. Meriam M. Santillan'

        },

        {
          id: 'santiago',
          name: 'Engr. Rebecca A. Santiago'

        },

        {
          id: 'demetillo_a',
          name: 'Engr. Alexander T. Demetillo'

        },

        {
          id: 'dellosa',
          name: 'Engr. Jeffrey T. Dellosa'

        },

        {
          id: 'capilitan',
          name: 'Engr. Jobelle J. Capilitan'

        },

        {
          id: 'pondog',
          name: 'Engr. Anamarie J. Pondog'

        },

        {
          id: 'japitana',
          name: 'Engr. Michelle V. Japitana'

        },

        {
          id: 'asube',
          name: 'Engr. Lorie Cris S. Asube'

        },

        {
          id: 'cabilitasan',
          name: 'Engr. John I. Cabilitasan'

        },

        {
          id: 'tabada',
          name: 'Dr. Luisito I. Tabada'

        },

        {
          id: 'jayoma',
          name: 'Mr. Jaymer M. Jayoma'

        },

        {
          id: 'timosan',
          name: 'Ms. Jesterlyn Q. Timosan'

        },

        {
          id: 'ortuyo',
          name: 'Ms. Maria Besa Joy M. Ortuyo'

        },

        {
          id: 'pacot',
          name: 'Mr. Mark Phil D. Pacot'

        },

        {
          id: 'matias',
          name: 'Mr. Junrie B. Matias'

        },

        {
          id: 'plender',
          name: 'Ms. Jenie L. Plender'

        },

        {
          id: 'cher_tabada',
          name: 'Prof. Cherry I. Tabada'

        },

        {
          id: 'bonotan',
          name: 'Mr. Melbert R. Bonotan'

        },

        {
          id: 'sabugaa',
          name: 'Ms. Jennifer E. Sabugaa'

        },

        {
          id: 'daguil',
          name: 'Dr. Rolyn C. Daguil'

        },

        {
          id: 'dalaorao',
          name: 'Mr. Gleen A. Dalaorao'

        },

        {
          id: 'presbitero',
          name: 'Prof. James V. Presbitero'

        },

        {
          id: 'pitogo',
          name: 'Mr. Vicente Pitogo'

        },

        {
          id: 'walters',
          name: 'Mr. Billy Jack P. Walters'

        },

        {
          id: 'bacabis',
          name: 'Ms. Regein D. Bacabis'

        },

        {
          id: 'nakazato',
          name: 'Mr. Takeyasu V. Nakazato'

        },

        /* CEIT STAFF  */
        {
          id: 'lazarte',
          name: 'Ms. Rezalyn M. Lazarte'
        },

        {
          id: 'demetillo',
          name: 'Ms. Lovela T. Demetillo'
        },

        {
          id: 'mahilom',
          name: 'Mr. Jimbery Clyde B. Mahilom'
        },

        {
          id: 'micarandayo',
          name: 'Ms. Malyn T. Micarandayo'
        },

        {
          id: 'cerillo',
          name: 'Mr. Dearman C. Cerillo'
        },

        {
          id: 'madrid',
          name: 'Mr. Herbert O. Madrid'
        },

        {
          id: 'heria',
          name: 'Emr. Daniel B. Heria'
        },

        /* CAS FACULTY ....................................................................................*/
        {
          id: 'paluga',
          name: 'Dr. Esamel M. Paluga'
        },

        {
          id: 'manigo',
          name: 'Ms. Lilibeth L. Manigo'

        },

        {
          id: 'bugaay',
          name: 'Ms. Gretchen Mae C. Bugaay'

        },

        {
          id: 'agua',
          name: 'Mr. Breix Michael G. Agua'


        },

        {
          id: 'burdeos',
          name: 'Ms. Karen B. Burdeos'


        },

        {
          id: 'ilagan',
          name: 'Mr. Krystoffer Adonis R. Ilagan'


        },

        {
          id: 'madronero',
          name: 'Mr. Jonathan A. Madronero'
        },

        {
          id: 'pajaron',
          name: 'Ms. Kaye Y. Pajaron'
        },

        {
          id: 'rendeza',
          name: 'Mr. Jeriel S. Rendeza'
        },

        {
          id: 'albia',
          name: 'Mr. Jake A. Albia'
        },

        {
          id: 'cuaresma',
          name: 'Mr. Edilberto C. Cuaresma Jr.'
        },

        {
          id: 'latayada_m',
          name: 'Ms. Mary Joy R. Latayada'
        },

        {
          id: 'mentuda',
          name: 'Ms. Cheryl Q. Mentuda'
        },

        {
          id: 'paluga_r',
          name: 'Dr. Rolando N. Paluga'
        },

        {
          id: 'alerta',
          name: 'Mr. Gilbert Alerta'
        },

        {
          id: 'dangate',
          name: 'Ms. Abigael J. Dangate'
        },

        {
          id: 'libao',
          name: 'Ms. Merliza F. Libao'
        },

        {
          id: 'nepa',
          name: 'Ms. Marilou T. Nepa'
        },

        {
          id: 'arcede',
          name: 'Dr. Jayrold P. Arcede'
        },

        {
          id: 'domingo',
          name: 'Dr. Job H. Domingo'
        },

        {
          id: 'lingo',
          name: 'Mr. Junar T. Lingo'
        },

        {
          id: 'ocarez',
          name: 'Dr. Felix R. Ocarez'
        },

        {
          id: 'pelemeniano',
          name: 'Ms. Airish P. Pelemeniano'
        },

        {
          id: 'arlan',
          name: 'Mr. Erwin N. Arlan'
        },

        {
          id: 'herrera_f',
          name: 'Dr. Fernando T. Herrera'
        },

        {
          id: 'macalalag',
          name: 'Mr. Jay Michael R. Macalalag'
        },

        {
          id: 'padecio',
          name: 'Ms. Angela Fel A. Padecio'
        },

        {
          id: 'permanes',
          name: 'Ms. Sheila Rae E. Permanes'
        },

        {
          id: 'gaquing',
          name: 'Dr. Napoleon A. Gaquing Jr.'
        },

        {
          id: 'baje',
          name: 'Mr. Cheto A. Baje'
        },

        {
          id: 'coquilla',
          name: 'Mr. Carlo M. Coquilla'
        },

      //end of MATHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

        {
          id: 'loquere',
          name: 'Ms. Christina Y. Loquere'
        },

        {
          id: 'barquilla',
          name: 'Mr. Michael Dave P. Barquilla'
        },

        {
          id: 'capangpangan',
          name: 'Dr. Rey Y. Capangpangan'
        },

        {
          id: 'galleros',
          name: 'Mr. Raul B. Galleros'
        },

        {
          id: 'mapatac',
          name: 'Dr. Levitah C. Mapatac'
        },

        {
          id: 'pagapong',
          name: 'Ms. Nen Kenneth D. Pagapong'
        },

        {
          id: 'basnig',
          name: 'Ms. Deomila A. Basnig'
        },

        {
          id: 'ciudad',
          name: 'Mr. Kenneth L. Ciudad'
        },

        {
          id: 'latayada_f',
          name: 'Mr. Felmer S. Latayada'
        },

        {
          id: 'montero',
          name: 'Ms. Myra Joy B. Montero'
        },

        {
          id: 'pearson',
          name: 'Mr. Kyle Bryan N. Pearson'
        },

        {
          id: 'caadan',
          name: 'Mr. Margarito G. Caadan'
        },

        {
          id: 'dejarme',
          name: 'Mr. Henson M. Dejarme'
        },

        {
          id: 'lavapiez',
          name: 'Mr. Mark Anthony Lavapiez'
        },

        {
          id: 'orog',
          name: 'Ms. Brigette Y. Orog'
        },

        {
          id: 'vales',
          name: 'Mr. Temmy P. Vales'
        },

        // end sa chemistryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

        {
          id: 'lazarte_j',
          name: 'Ms. Jessa Mae T. Lazarte'
        },

        {
          id: 'apas',
          name: 'Mr. Ruel S. Apas'
        },

        {
          id: 'budlayan',
          name: 'Mr. Marco Laurence M. Budlayan'
        },

        {
          id: 'manigo_j',
          name: 'Mr. Jonathan P. Manigo'
        },

        {
          id: 'pantohan',
          name: 'Mr. Edmar G. Pantohan'
        },

        {
          id: 'edilo',
          name: 'Ms. Gladys G. Edilo'
        },

        {
          id: 'mozo',
          name: 'Mr. Melecio F. Mozo'
        },

        {
          id: 'vergara',
          name: 'Mr. Joey Arles O. Vergara'
        },

         //end sa  physicssssssssssssssssssssss

        {
          id: 'ombat',
          name: 'Dr. Leila A. Ombat'
        },

        {
          id: 'almadin',
          name: 'Mr. Florence Jhun F. Almadin'
        },

        {
          id: 'dela-cruz',
          name: 'Mr. Ian Niel B. Dela Cruz'
        },

        {
          id: 'gamalinda',
          name: 'Dr. Eve F. Gamalinda'
        },

        {
          id: 'jumawan',
          name: 'Mr. Jess H. Jumawan'
        },

        {
          id: 'rosal',
          name: 'Mr. Jashin J. Rosal'
        },

        {
          id: 'boyles',
          name: 'Dr. Lilia Z. Boyles'
        },

        {
          id: 'demerillo',
          name: 'Mr. Meljan T. Demerillo'
        },

        {
          id: 'galolo',
          name: 'Dr. Adam Roy V. Galolo'
        },

        {
          id: 'leones',
          name: 'Mr. Julius Anthony M. Leones'
        },

        {
          id: 'salanatin',
          name: 'Mr. Clyde A. Salanatin'
        },

        {
          id: 'buenaflor',
          name: 'Mr. Exur M. Buenaflor'
        },

        {
          id: 'estano',
          name: 'Mr. Leonardo A. Estano'
        },

        {
          id: 'hernando',
          name: 'Mr. Brent Joy H. Hernando'
        },

        {
          id: 'magdugo',
          name: 'Mr. Rexie P. Magdugo'
        },

        {
          id: 'solania',
          name: 'Ms. Chenniel L. Solania'
        },

        {
          id: 'calagui',
          name: 'Mr. Laurence B. Calagui'
        },

        {
          id: 'fajardo',
          name: 'Ms. Dawn Rosarie M. Fajardo'
        },

        {
          id: 'japitana_r',
          name: 'Ms. Rowena A. Japitana'
        },

        {
          id: 'paylangco',
          name: 'Mr. Jesiel Cris C. Paylangco'
        },

        {
          id: 'tiempo',
          name: 'Ms. Cherry Mar T. Tiempo'
        },

        {
          id: 'calub',
          name: 'Ms. Aiza Mae B. Calub'
        },

        {
          id: 'gallego',
          name: 'Ms. Rovelyn P. Gallego'
        },

        {
          id: 'jumawan_j',
          name: 'Dr. Joycelyn C. Jumawan'
        },

        {
          id: 'raganas',
          name: 'Ms. Cinderella D. Raganas'
        },

        {
          id: 'won',
          name: 'Ms. Maria Elma Q. Won'
        },

        {
          id: 'demetillo_m',
          name: 'Mr. Meljan T. Demetillo'
        },

        {
          id: 'paz',
          name: 'Ms. Sherryll L. Paz'
        },

        {
          id: 'dagani',
          name: 'Ms. Cinderella D. Dagani'
        },

        //end of biologyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

        {
          id: 'torralba',
          name: 'Ms. Shella A. Torralba'
        },

        {
          id: 'acabo',
          name: 'Ms. Meldy A. Acabo'
        },

        {
          id: 'bohol',
          name: 'Mr. Jan Grenechaux V. Bohol'
        },

        {
          id: 'castro',
          name: 'Ms. Dolly Loves S. Castro'
        },

        {
          id: 'lopez',
          name: 'Ms. Liezl T. Lopez'
        },

        {
          id: 'taragua',
          name: 'Mr. Enrique F. Taragua'
        },

        {
          id: 'brown',
          name: 'Ms. Didith P. Brown'
        },

        {
          id: 'cubillan',
          name: 'Mr. Myron T. Cubillan'
        },

        {
          id: 'paz_p',
          name: 'Mr. Petervir A. Paz'
        },

        {
          id: 'trugillo',
          name: 'Ms. Rolyna S. Trugillo'
        },

        {
          id: 'arnado',
          name: 'Ms. Marsha O. Arnado'
        },

        {
          id: 'cenabre',
          name: 'Ms. Maricel L. Cenabre'
        },

        {
          id: 'dedoro',
          name: 'Ms. Regine I. Dedoro'
        },

        {
          id: 'ponio',
          name: 'Ms. Ana Liza S. Ponio'
        },

        {
          id: 'vergara_j',
          name: 'Ms. Jo Airen O. Vergara'
        },

        {
          id: 'betito',
          name: 'Ms. Jessarie N. Betito'
        },

        {
          id: 'cabonce',
          name: 'Ms. Margeline C. Cabonce'
        },

        {
          id: 'legaspi',
          name: 'Mr. Gomer Jay S. Legaspi'
        },

        {
          id: 'saspa',
          name: 'Ms. Flordelez U. Saspa'
        },

        {
          id: 'vergara_m',
          name: 'Mr. Mark Vincent G. Vergara'
        },

        {
          id: 'matala',
          name: 'Mr. Patrick A. Matala'
        },

        {
          id: 'alingato',
          name: 'Ms. Shella M. Alingato'
        },

        // end sa Languages & Literatureeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

        {
          id: 'badiang',
          name: 'Ms. Shiela S. Badiang'
        },

        {
          id: 'alan',
          name: 'Mr. Erico G. Alan'
        },

        {
          id: 'bolongaita',
          name: 'Mr. Johnny P. Bolongaita'
        },

        {
          id: 'maglente_n',
          name: 'Mr. Norry P. Maglente'
        },

        {
          id: 'masing',
          name: 'Ms. Anna Lyn A. Masing'
        },

        {
          id: 'sanchez',
          name: 'Ms. Ruth E. Sanchez'
        },

        {
          id: 'yting',
          name: 'Ms. Ana Ma.Belinda R. Yting'
        },

        {
          id: 'alesna',
          name: 'Mr. Cedrix Von T. Alesna'
        },

        {
          id: 'catle',
          name: 'Ms. Jewry S. Catle'
        },

        {
          id: 'miranda',
          name: 'Ms. Connie Fern B. Miranda'
        },

        {
          id: 'tabugon',
          name: 'Mr. Garry B. Tabugon'
        },

        {
          id: 'makinano',
          name: 'Mr. Rex B. Makinano'
        },

        {
          id: 'maglente',
          name: 'Ms. Ordem K. Maglente'
        },

        {
          id: 'martinez',
          name: 'Mr. Paolo Alberto A. Martinez'
        },

        {
          id: 'ortega',
          name: 'Ms. Gracyl Mae U. Ortega'
        },

        {
          id: 'tortola',
          name: 'Mr. Master George M. Tortola'
        },

        /*CAS STAFF...........................................................*/

        {
          id: 'bas',
          name: 'Ms. Sherlyn A. Bas'
        },

        {
          id: 'villanueva',
          name: 'Mr. Hyx A. Villanueva'
        },

        {
          id: 'dela-cruz_j',
          name: 'Ms. Jasmin A. Dela Cruz'
        },

        {
          id: 'amplayo',
          name: 'Mr. Wilfredo Amplayo'
        },

        {
          id: 'namoc',
          name: 'Mr. Antonio G. Namoc'
        },

        {
          id: 'makiling',
          name: 'Mr. Carlos Makiling'
        },

        {
          id: 'manansala',
          name: 'Ms. Ritchelle Manansala'
        },

        /*CED FACULTY ...............................................................................*/

        {
          id: 'herrera',
          name: 'Dr. Miraluna L. Herrera'
        },

        {
          id: 'cubillas_a',
          name: 'Dr. Ariel U. Cubillas'
        },

        {
          id: 'tulang',
          name: 'Ms. Marichu D. Tulang'
        },

        {
          id: 'bago',
          name: 'Ms. Lourdes B. Bago'
        },

        {
          id: 'bolivia',
          name: 'Ms. Lita A. Bolivia'
        },

        {
          id: 'canda',
          name: 'Dr. Remedios L. Canda'
        },

        //end sa elementaryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

        {
          id: 'arnado_a',
          name: 'Dr. Alvic A. Arnado'
        },

        {
          id: 'alegre',
          name: 'Dr. Emybel M. Alegre'
        },

        {
          id: 'bulay',
          name: 'Ms. Minie L. Bulay'
        },

        {
          id: 'cubillas_c',
          name: 'Ms. Cristina A. Cubillas'
        },

        {
          id: 'delacruz',
          name: 'Ms. Fe M. Dela Cruz'
        },

        {
          id: 'flores',
          name: 'Ms. Grace T. Flores'
        },

        {
          id: 'lagura',
          name: 'Ms. Gladys L. Lagura'
        },

        {
          id: 'lasco',
          name: 'Ms. Maris T. Lasco'
        },

        {
          id: 'low',
          name: 'Dr. Sonia R. Low'
        },

        {
          id: 'mamaoag',
          name: 'Dr. Natividad R. Mamaoag'
        },

        {
          id: 'mercado_m',
          name: 'Ms. Rissa T. Mercado'
        },

        {
          id: 'raganas_r',
          name: 'Dr. Nelia S. Raganas'
        },

        {
          id: 'garay',
          name: 'Dr. Lorline N. Garay'
        },

        //end sa secondaryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

        {
          id: 'rodriguez',
          name: 'Dr. Charito C. Rodriguez'
        },

        {
          id: 'cajenta',
          name: 'Ms. Sitti Obaida J. Cajenta'
        },

        {
          id: 'cacho',
          name: 'Mr. Jonel F. Cacho'
        },

        {
          id: 'credo',
          name: 'Mr. Marc Joy A. Credo'
        },

        {
          id: 'itliong',
          name: 'Mr. Niño P. Itliong'
        },

        {
          id: 'odtojan',
          name: 'Ms. Geryll M. Odtojan'
        },

        /*CED STAFF .......................................... */
        {
          id: 'maputol',
          name: 'Ms. Karen Grace M. Maputol'
        },

        {
          id: 'tumada',
          name: 'Ms. Stephine Tumada-Alvizo'
        },

        {
          id: 'enoja',
          name: 'Ms. Darlyn Jhane Enoja'
        },

        {
          id: 'dulhao',
          name: 'Mr. Ramil C. Dulhao'
        },

        {
          id: 'cloribel',
          name: 'Ms. Jocelyn B. Cloribel'
        },

        {
          id: 'ancheta',
          name: 'Mr. Jonas L. Ancheta'
        },


        /*CASNR FACULTY .........................................*/
        {
          id: 'atega',
          name: 'Dr. Teresita A. Atega'
        },

        {
          id: 'garcia',
          name: 'Prof. Glenn Arthur A. Garcia'
        },

        {
          id: 'rollon',
          name: 'Mr. Reuben James C. Rollon'
        },

        {
          id: 'montilla',
          name: 'Prof. Susana B. Montilla'
        },

        {
          id: 'gaas',
          name: 'Dr. Danilo A. Ga-as'
        },

        {
          id: 'balanay',
          name: 'Dr. Raquel M. Balanay'
        },

        {
          id: 'parac',
          name: 'Prof. Elizabeth P. Parac'
        },

        {
          id: 'olaybar',
          name: 'Ms. Benecar B. Olaybar'
        },

        {
          id: 'nabio',
          name: 'Ms. Carla Mari B. Nabio'
        },

        {
          id: 'varela',
          name: 'Dr. Rowena P. Varela'
        },

        {
          id: 'austral',
          name: 'Dr. Tomas M. Austral, Jr.'
        },

        {
          id: 'cabillo',
          name: 'Mr. Crishelo M. Cabillo'
        },

        {
          id: 'sagarino',
          name: 'Ms. Rezel M. Sagarino'
        },

        {
          id: 'fetalsana',
          name: 'Ms. Rennielynn S. Fetalsana'
        },

        {
          id: 'dargantes',
          name: 'Dr. Joseph Rizalyndo P. Dargantes'
        },

        {
          id: 'arayan',
          name: 'Prof. Marino S. Arayan, Jr.'
        },

        {
          id: 'sagocsoc',
          name: 'Prof. Rosalina A. Sagocsoc'
        },

        {
          id: 'andig',
          name: 'Dr. Felomino B. Andig'
        },

        {
          id: 'nono_m',
          name: 'Prof. Miriam D. Nono'
        },

        {
          id: 'alcantara',
          name: 'Ms. Egie-Dayan D. Alcantara'
        },

        {
          id: 'muga',
          name: 'Ms. Normalin G. Muga'
        },

        {
          id: 'nono_e',
          name: 'Dr. Emmanuel F. Nono'
        },

        {
          id: 'salvador',
          name: 'Dr. Romulo C. Salvador, Sr.'
        },

        {
          id: 'villasica',
          name: 'Mr. Leo Jude D. Villasica'
        },

        {
          id: 'ramada',
          name: 'Mr. John Mark S. Ramada'
        },

        {
          id: 'salvador_a',
          name: 'Mr. Argen G. Salvador'
        },

        {
          id: 'ebarsabal',
          name: 'Ms. Kimberly A. Ebarsabal'
        },

        //end sa ag. sci.............................................

        {
          id: 'kitchie',
          name: 'Dr. Gerardo O. Kitche'
        },

        {
          id: 'cossid',
          name: 'For. Rey N. Cossid'
        },

        {
          id: 'sarmiento',
          name: 'For. Roger T. Sarmient'
        },

        {
          id: 'corbita',
          name: 'For. Victor L. Corbita'
        },

        {
          id: 'mercado',
          name: 'For. Joel A. Mercado'
        },

        {
          id: 'casilac',
          name: 'For. Cornelio S. Casilac, Jr.'
        },

        {
          id: 'pasion',
          name: 'Mr. Rodel G. Pasion'
        },

        {
          id: 'campos',
          name: 'For. Fely Rose N. Campos'
        },

        {
          id: 'dalion',
          name: 'For. Shiella Lynn D. Dali-On'
        },

        {
          id: 'tereng',
          name: 'For. Rece Ruby G. Tereng'
        },

        {
          id: 'jandug',
          name: 'For. Catherine Mhae B. Jandug'
        },

        {
          id: 'garcia_c',
          name: 'Ms. Chime M. Garcia'
        },

        {
          id: 'lador',
          name: 'Mr. Richie P. Lador'
        },

        {
          id: 'calomot',
          name: 'Dr. Nilo H. Calomot'
        },

        {
          id: 'anino',
          name: 'For. Emelio O. Anino'
        },

        {
          id: 'dulawan',
          name: 'For. John Michael A. Dulawan'
        },

        {
          id: 'seronay',
          name: 'Dr. Romell A. Seronay'
        },

        {
          id: 'apdohan',
          name: 'Ms. Julie Rose D. Apdohan'
        },

        {
          id: 'amarille',
          name: 'Ms. Meycel C. Amarille'
        },

        {
          id: 'lina',
          name: 'For. Roselyn S. Lina'
        },

        {
          id: 'perodes',
          name: 'For. Mark Angelo P. Perodes'
        },

        //CASNR staff...........................................................

        {
          id: 'ruda',
          name: 'Ms. Jerah Mae M. Ruda'
        },

        {
          id: 'batausa',
          name: 'Ms. Sharine B. Batausa'
        },

        {
          id: 'geolagon',
          name: 'Mr. Welmer B. Geolagon'
        },

        {
          id: 'ruda_r',
          name: 'Mr. Ruben A. Ruda'
        },

        {
          id: 'casol',
          name: 'Mr. Jose Y. Casol'
        }

      ]

    }
  }
}
</script>
