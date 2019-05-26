<template>
  <f7-page id="bgblur">
    <div>
      <f7-navbar id="navtrans" title="Natural Resources" back-link="Back">
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
          id: 'kitchie',
          name: 'Dr. Gerardo O. Kitche',
          position: ['Natural Resources Dept.','Chairman (Department of Natural Resources)'],
          descrip: [
            'BS in Forestry',
            'Mindanao State University','-',
            'MS of Public Administration',
            'Mindanao State University','-',
            'Doctor in Public Administration',
            'Cebu Normal University'
          ]
        },

        {
          id: 'cossid',
          name: 'For. Rey N. Cossid',
          position: ['Natural Resources Dept.','Program Coordinator (BSF)'],
          descrip: [
            'BS in Forestry',
            'Mindanao State University','-',
            'MS of Forestry',
            'Central Mindanao University'
          ]
        },

        {
          id: 'sarmiento',
          name: 'For. Roger T. Sarmient',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Mindanao State University','-',
            'MS of Forestry',
            'Central Mindanao University', '-',
            'Ph.D. Forestry (on-going)',
            'U.P. Los Baños'
          ]
        },

        {
          id: 'corbita',
          name: 'For. Victor L. Corbita',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University'
          ]
        },

        {
          id: 'mercado',
          name: 'For. Joel A. Mercado',
          position: ['Natural Resources Dept.','Information Services Specialist (FITS CENTER)'],
          descrip: [
            'BS in Forestry',
            'Central Mindanao University','-',
            'MS of Forestry (on-going)',
            'Central Mindanao University'
          ]
        },

        {
          id: 'casilac',
          name: 'For. Cornelio S. Casilac, Jr.',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University','-',
            'MS of Forestry (on-going)',
            'Central Mindanao University'
          ]
        },

        {
          id: 'pasion',
          name: 'Mr. Rodel G. Pasion',
          position: ['Natural Resources Dept.','Program Coordinator (BSAF, PMA (FITS) Focal Person)'],
          descrip: [
            'BS in AgroForestry',
            'Don Mariano Marcos Memorial State University','-',
            'MS of AgroForestry',
            'Don Mariano Marcos Memorial State University'
          ]
        },

        {
          id: 'campos',
          name: 'For. Fely Rose N. Campos',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University','-',
            'MS of Forestry (on-going)',
            'Central Mindanao University'
          ]
        },

        {
          id: 'dalion',
          name: 'For. Shiella Lynn D. Dali-On',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University','-',
            'MS of Forestry (on-going)',
            'Central Mindanao University'
          ]
        },

        {
          id: 'tereng',
          name: 'For. Rece Ruby G. Tereng',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University','-',
            'MS of Forestry (on-going)',
            'University of Southeastern Philippines'
          ]
        },

        {
          id: 'jandug',
          name: 'For. Catherine Mhae B. Jandug',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University','-',
            'MS of Forestry (on-going)',
            'University of Southeastern Philippines'
          ]
        },

        {
          id: 'garcia_c',
          name: 'Ms. Chime M. Garcia',
          position: ['Natural Resources Dept.','Program Coordinator (BSES)'],
          descrip: [
            'BS in Biology',
            'Visayas State University','-',
            'MS of Environmental Sanitation',
            'GU(Belgium)'
          ]
        },

        {
          id: 'lador',
          name: 'Mr. Richie P. Lador',
          position: ['Natural Resources Dept.','Graduate Program Coordinator (MSEM)'],
          descrip: [
            'BS in Environmental Management',
            'Caraga State University','-',
            'MS of Environmental Management',
            'Caraga State University'
          ]
        },

        {
          id: 'calomot',
          name: 'Dr. Nilo H. Calomot',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Agricultural Engineering',
            'Visayas State University','-',
            'MS of Environmental Risk Management for Tropical Ecosystems',
            'CMU(Thailand)','-',
            'Ph.D. in Educational Management',
            'SPU'
          ]
        },

        {
          id: 'anino',
          name: 'For. Emelio O. Anino',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Mindanao State University','-',
            'MS of Foresty ',
            'UP Los Baños'
          ]
        },

        {
          id: 'dulawan',
          name: 'For. John Michael A. Dulawan',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University'
          ]
        },

        {
          id: 'seronay',
          name: 'Dr. Romell A. Seronay',
          position: ['Natural Resources Dept.','Center Chief (CRÈME)'],
          descrip: [
            'BS in Biology',
            'Xavier University','-',
            'MS of Marine Biology',
            'Mindanao State University','-',
            'Ph.D. in Marine Science',
            'UP-MSI'
          ]
        },

        {
          id: 'apdohan',
          name: 'Ms. Julie Rose D. Apdohan',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Environmental Science',
            'Caraga State University','-',
            'MS of Environmental Science',
            'UP Los Baños'
          ]
        },

        {
          id: 'amarille',
          name: 'Ms. Meycel C. Amarille',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Environmental Science',
            'Central Mindanao University','-',
            'MS of Environmental Science',
            'UP Los Baños'
          ]
        },

        {
          id: 'lina',
          name: 'For. Roselyn S. Lina',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University','-',
            'MS of Forestry (on-going)',
            'University of Southeastern Philippines'
          ]
        },

        {
          id: 'perodes',
          name: 'For. Mark Angelo P. Perodes',
          position: ['Natural Resources Dept.'],
          descrip: [
            'BS in Forestry',
            'Caraga State University'
          ]
        }

      ],
      eduback: 'EDUCATIONAL BACKGROUND'
    }
  }

}
</script>
