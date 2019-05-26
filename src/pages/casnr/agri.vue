<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Agricultural Sciences" back-link="Back">
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
      employee: [

        {
          id: 'atega',
          name: 'Dr. Teresita A. Atega',
          position: ['Dean'],
          descrip: [
            'BS in Chemistry',
            'Siliman University','-',
            'MS of Animal Science',
            'U.P. Los Baños', '-',
            'Ph.D. in Animal Science',
            'U.P. Los Baños'

          ]
        },

       {
          id: 'garcia',
          name: 'Prof. Glenn Arthur A. Garcia',
          position: ['Associate Dean/Secretary','Center Chief (CARAGA-CARE)'],
          descrip: [
            'BS in Agriculture',
            'Visayas State University','-',
            'MS of Physical Land Resources',
            'Ghent University, Belgium'

          ]
        },

        {
          id: 'rollon',
          name: 'Mr. Reuben James C. Rollon',
          position: ['Agricultural Sciences Dept.','Chairman (Department of Agricultural Sciences)'],
          descrip: [
            'BS in Agriculture',
            'Visayas State University','-',
            'MS of Soil Science',
            'Visayas State University'

          ]
        },

        {
          id: 'montilla',
          name: 'Prof. Susana B. Montilla',
          position: ['Agricultural Sciences Dept.','Program Coordinator (BSA)'],
          descrip: [
            'BS in Agriculture',
            'Central Luzon State University','-',
            'MS of Entomology (earned units)',
            'U.P. Los Baños'

          ]
        },

        {
          id: 'gaas',
          name: 'Dr. Danilo A. Ga-as',
          position: ['Agricultural Sciences Dept.','Special Assistant (CSU Eco-Park Development)'],
          descrip: [
            'BS in Agricultural Education',
            'Caraga State University','-',
            'MS of Agricultural Education',
            'Central Mindanao University, Bukidnon', '-',
            'Ph.D. Horticulture',
            'Central Mindanao University, Bukidnon'
          ]
        },

        {
          id: 'balanay',
          name: 'Dr. Raquel M. Balanay',
          position: ['Agricultural Sciences Dept.','Director (CCAARRD)'],
          descrip: [
            'BS in Agriculture',
            'Central Mindanao University','-',
            'MS of Agricultural Economics',
            'Central Mindanao University', '-',
            'Ph.D. in Agricultural Economics',
            'UP, Los Baños'
          ]
        },

        {
          id: 'parac',
          name: 'Prof. Elizabeth P. Parac',
          position: ['Agricultural Sciences Dept.'],
          descrip: [
            'BS in Agriculture',
            'Visayas State University','-',
            'MS of Plant Pathology',
            'Visayas State University', '-',
            'Ph.D. Plant Pathology (on-going)',
            'UP, Los Baños'

          ]
        },

        {
          id: 'olaybar',
          name: 'Ms. Benecar B. Olaybar',
          position: ['Agricultural Sciences Dept.','Project In-Charge (Poultry Production)'],
          descrip: [
            'BS in Agriculture',
            'Central Mindanao University','-',
            'MS of Animal Science',
            'Central Mindanao University'

          ]
        },

        {
          id: 'nabio',
          name: 'Ms. Carla Mari B. Nabio',
          position: ['Agricultural Sciences Dept.'],
          descrip: [
            'BS in Agriculture',
            'Caraga State University'
          ]
        },

        {
          id: 'varela',
          name: 'Dr. Rowena P. Varela',
          position: ['Agricultural Sciences Dept.','VP for Research and Extension'],
          descrip: [
            'BS Agriculture',
            'Visayas State University','-',
            'MS of Entomology',
            'Visayas State University', '-',
            'Ph.D. in Entomology',
            'U.P. Los Baños'
          ]
        },

        {
          id: 'austral',
          name: 'Dr. Tomas M. Austral, Jr.',
          position: ['Agricultural Sciences Dept.','Director (Office of Planning & Development)'],
          descrip: [
            'BS in Agriculture',
            'Central Mindanao University','-',
            'MS of Animal Science',
            'Central Mindanao University', '-',
            'Ph.D. in Animal Science',
            'Visayas State University'
          ]
        },

        {
          id: 'cabillo',
          name: 'Mr. Crishelo M. Cabillo',
          position: ['Agricultural Sciences Dept.','In-Charge (Tissue Culture Laboratory)'],
          descrip: [
            'BS in Agriculture',
            'Visayas State University','-',
            'MS of Horticulture',
            'Visayas State University'
          ]
        },

        {
          id: 'sagarino',
          name: 'Ms. Rezel M. Sagarino',
          position: ['Agricultural Sciences Dept.'],
          descrip: [
            'BS in Agriculture',
            'Visayas State University','-',
            'MS of Plant Pathology',
            'U.P. Los Baños'
          ]
        },

        {
          id: 'fetalsana',
          name: 'Ms. Rennielynn S. Fetalsana',
          position: ['Agricultural Sciences Dept.'],
          descrip: [
            'BS in Agriculture',
            'Central Mindanao University','-',
            'MS of Entomology (on-going)',
            'Central Mindanao University'
          ]
        },

        {
          id: 'dargantes',
          name: 'Dr. Joseph Rizalyndo P. Dargantes',
          position: ['Agricultural Sciences Dept.'],
          descrip: [
            'Doctor of Veterinary Medicine',
            'Central Mindanao University'
          ]
        },

        {
          id: 'arayan',
          name: 'Prof. Marino S. Arayan, Jr.',
          position: ['Agricultural Sciences Dept.','Program Coordinator (BAT)'],
          descrip: [
            'BS in Agriculture',
            'SNCAT','-',
            'MS in Agricultural Technology Education',
            'Central Mindanao University'
          ]
        },

        {
          id: 'sagocsoc',
          name: 'Prof. Rosalina A. Sagocsoc',
          position: ['Agricultural Sciences Dept.'],
          descrip: [
            'BS in Agri-Business Mng\'t',
            'Central Mindanao University','-',
            'MS of Agricultural Technology Mng\'t',
            'Mindanao University in Science and Technology'
          ]
        },

        {
          id: 'andig',
          name: 'Dr. Felomino B. Andig',
          position: ['Agricultural Sciences Dept.','Project In-Charge (NGP Clonal Nursery)'],
          descrip: [
            'Bachelor of Agricultural Technology',
            'Caraga State University','-',
            'MS of Crop Science',
            'Caraga State University','-',
            'Ph.D. Horticulture',
            'Central Mindanao University'
          ]
        },

        {
          id: 'nono_m',
          name: 'Prof. Miriam D. Nono',
          position: ['Agricultural Sciences Dept.','Project In-Charge (Dairy Products Processing)'],
          descrip: [
            'BS in Education Major in Home Economics',
            'Mindanao State University','-',
            'MS of Agricultural Technology Education',
            'Central Mindanao University'
          ]
        },

        {
          id: 'alcantara',
          name: 'Ms. Egie-Dayan D. Alcantara',
          position: ['Agricultural Sciences Dept.'],
          descrip: [
            'BS in Agribusiness Management',
            'Central Mindanao University','-',
            'MS of Business Administration (on-going)',
            'FSUU, Butuan City'
          ]
        },

        {
          id: 'muga',
          name: 'Ms. Normalin G. Muga',
          position: ['Agricultural Sciences Dept.'],
          descrip: [
            'BS in Agriculture',
            'Caraga State University'
          ]
        },

        {
          id: 'nono_e',
          name: 'Dr. Emmanuel F. Nono',
          position: ['Agricultural Sciences Dept.','Director (Office for Resource Generation & Management Services)'],
          descrip: [
            'Doctor of Veterinary Medicine',
            'De Lasalle Araneta University', '-',
            'Masters in Agricultural Technology Education ',
            'Central Mindanao University'
          ]
        },

        {
          id: 'salvador',
          name: 'Dr. Romulo C. Salvador, Sr.',
          position: ['Agricultural Sciences Dept.','Manager (FITS CENTER)'],
          descrip: [
            'Bachelor of Agricultural Technology',
            'Caraga State University','-',
            'MS of Crop Science',
            'Caraga State University','-',
            'Ph.D. in Agronomy',
            'Central Mindanao University'
          ]
        },

        {
          id: 'villasica',
          name: 'Mr. Leo Jude D. Villasica',
          position: ['Agricultural Sciences Dept.','Graduate Coordinator (MS Crop Science)','Technical Services Specialist (FITS CENTER)'],
          descrip: [
            'BS in Agriculture',
            'Visayas State University','-',
            'MS of Soil Science',
            'Visayas State University'
          ]
        },

        {
          id: 'ramada',
          name: 'Mr. John Mark S. Ramada',
          position: ['Agricultural Sciences Dept.','Project In-Charge (Swine Production)'],
          descrip: [
            'BS in Agriculture',
            'Caraga State University','-',
            'MS of Animal Science',
            'Central Mindanao University'
          ]
        },

        {
          id: 'salvador_a',
          name: 'Mr. Argen G. Salvador',
          position: ['Agricultural Sciences Dept.','Project In-Charge (Vegetable Production)'],
          descrip: [
            'BS in Agriculture',
            'Caraga State University','-',
            'MS of Crop Science',
            'Caraga State University'
          ]
        },

        {
          id: 'ebarsabal',
          name: 'Ms. Kimberly A. Ebarsabal',
          position: ['Agricultural Sciences Dept.','Agriculture Faculty Adviser (Senior High School)'],
          descrip: [
            'BS in Agriculture',
            'Caraga State University'
          ]
        }

      ],
      eduback: 'EDUCATIONAL BACKGROUND'
    }
  }

}
</script>
