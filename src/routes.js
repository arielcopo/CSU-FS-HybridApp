import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';

import PanelRightPage from './pages/panel-right.vue';

import DevCopo from './pages/dev.vue';//dev nga link ADD RAKAG ING ANI PARA MOGANA BITCH!

import Colleges from './pages/colleges.vue';

import CeitFs from './pages/ceit/ceitfs.vue';
import CeitF from './pages/ceit/ceitf.vue';
import CeitS from './pages/ceit/ceits.vue';
import CeitCategory from './pages/ceit/ceitcategory.vue';
import ComSci from './pages/ceit/cs.vue';
import InfoTech from './pages/ceit/it.vue';
import InfoSys from './pages/ceit/is.vue';
import MinEng from './pages/ceit/me.vue';
import GeoEng from './pages/ceit/ge.vue';
import ElecEng from './pages/ceit/ece.vue';
import AgEng from './pages/ceit/ae.vue';

import CasFs from './pages/cas/casfs.vue';
import CasF from './pages/cas/casf.vue';
import CasS from './pages/cas/cass.vue';
import CasCategory from './pages/cas/cascategory.vue';
import MathNi from './pages/cas/math.vue';
import NaturalSci from './pages/cas/nat.vue';
import BioNi from './pages/cas/bio.vue';
import SocSci from './pages/cas/soc.vue';
import HuMan from './pages/cas/hum.vue';

import CedFs from './pages/ced/cedfs.vue';
import CedF from './pages/ced/cedf.vue';
import CedS from './pages/ced/ceds.vue';
import CedCategory from './pages/ced/cedcategory.vue';
import ElemenTary from './pages/ced/elem.vue';
import SeconDary from './pages/ced/secondary.vue';
import PhyEd from './pages/ced/phyed.vue';

import CasnrFs from './pages/casnr/casnrfs.vue';
import CasnrF from './pages/casnr/casnrf.vue';
import CasnrS from './pages/casnr/casnrs.vue';
import CasnrCategory from './pages/casnr/casnrcategory.vue';
import AgriSci from './pages/casnr/agri.vue';
import NatSci from './pages/casnr/nat.vue';

import MisVis from './pages/misvis.vue';
import GenMan from './pages/gen.vue';
import CoreVal from './pages/coreval.vue';
import Csu from './pages/csu.vue';
import Hymn from './pages/hymn.vue';
import Grading from './pages/grading.vue';



export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/dev/',
    component: DevCopo,
  },
  {
    path: '/colleges/',
    component: Colleges,
  },



  {
    path: '/ceitfs/',
    component: CeitFs,
  },
  {
    path: '/ceitf/',
    component: CeitF,
  },
  {
    path: '/ceits/',
    component: CeitS,
  },
  {
    path: '/ceitcategory/',
    component: CeitCategory,
  },
  {
    path: '/cs/',
    component: ComSci,
  },
  {
    path: '/it/',
    component: InfoTech,
  },
  {
    path: '/is/',
    component: InfoSys,
  },
  {
    path: '/me/',
    component: MinEng,
  },
  {
    path: '/ge/',
    component: GeoEng,
  },
  {
    path: '/ece/',
    component: ElecEng,
  },
  {
    path: '/ae/',
    component: AgEng,
  },



  {
    path: '/cascategory/',
    component: CasCategory,
  },
  {
    path: '/casfs/',
    component: CasFs,
  },
  {
    path: '/casf/',
    component: CasF,
  },
  {
    path: '/cass/',
    component: CasS,
  },
  {
    path: '/math/',
    component: MathNi,
  },
  {
    path: '/nat/',
    component: NaturalSci,
  },
  {
    path: '/bio/',
    component: BioNi,
  },
  {
    path: '/soc/',
    component: SocSci,
  },
  {
    path: '/hum/',
    component: HuMan,
  },



  {
    path: '/cedfs/',
    component: CedFs,
  },
  {
    path: '/cedf/',
    component: CedF,
  },
  {
    path: '/ceds/',
    component: CedS,
  },
  {
    path: '/cedcategory/',
    component: CedCategory,
  },
  {
    path: '/elem/',
    component: ElemenTary,
  },
  {
    path: '/secondary/',
    component: SeconDary,
  },

  {
    path: '/phyed/',
    component: PhyEd,
  },










  {
    path: '/casnrfs/',
    component: CasnrFs,
  },
  {
    path: '/casnrf/',
    component: CasnrF,
  },
  {
    path: '/casnrstaff/',
    component: CasnrS,
  },
  {
    path: '/casnrcategory/',
    component: CasnrCategory,
  },
  {
    path: '/agri/',
    component: AgriSci,
  },
  {
    path: '/natsci/',
    component: NatSci,
  },







  {
    path: '/misvis/',
    component: MisVis,
  },
  {
    path: '/gen/',
    component: GenMan,
  },
  {
    path: '/core/',
    component: CoreVal,
  },
  {
    path: '/csu/',
    component: Csu,
  },
  {
    path: '/hymn/',
    component: Hymn,
  },
  {
    path: '/grading/',
    component: Grading,
  }

];
