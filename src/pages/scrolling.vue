<template>
  <!--List faculty-->
  <div v-cloak class="list media-list">
    <div id="nag-gunit-sa-searching">

      <div class="inline no-hairlines-md">
        <ul>
          <li class="item-content item-input">
            <div class="item-media">
              <i class="material-icons md-only color-icon">person</i>
            </div>
            <div class="item-inner">
              <div class="item-input-wrap">
                <input type="text" placeholder="Search Name" v-model="query">
              </div>
            </div>
          </li>
        </ul>
      </div>


      <transition-group name="staggered-fade" tag="ul" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">

      <!--List faculty-->
        <li v-for="(list, index) in computedList"  v-bind:key="list.name" v-bind:data-index="index" >
          <a href="#" v-bind:data-popup="'#'+list.id" class="item-link item-content popup-open">
            <div class="item-media"><img v-bind:src="getPic(list.id)" class="small-img"/></div>
            <div class="item-inner">
            <div class="item-title-row">
              <div  class="item-title" style="font-size: 0.80em; font-weight: lighter;color: #ddd;">
                {{ list.name }}
              </div>
            </div>
              <div class="position" v-for="pos in list.position" v-bind:key="pos.id">
                {{ pos }}
              </div>
            </div>
          </a>
        </li>


      </transition-group>

    </div>


    <!--Pop Up -->
    <f7-popup v-for="list in employee" v-bind:key="list.id" v-bind:id="list.id">
      <f7-view>
        <f7-page id="bgblur">
          <div>
            <f7-navbar title="About" id="navtrans">
              <f7-nav-right>
                <f7-link popup-close><f7-icon material="clear"></f7-icon></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>
              <div class="content-center card">
                <div class="image-container">
                  <div><img class="big-img" v-bind:src="getPic(list.id)" /> </div>
                  <span style="font-weight: bold;"> {{ list.name }} </span>
                  <div class="card-content " >
                    <div class="position center" v-for="pos in list.position" v-bind:key="pos.id"> {{ pos }} </div>
                  </div>
                </div>

                <div class="descrip-container">
                  <div style="font-weight: bold;margin-bottom:5px;"> {{ eduback }} </div>
                  <div v-for="des in list.descrip" :key="des.id"> {{ des }} </div>
                </div>
              </div>
            </f7-block>
          </div>
        </f7-page>
      </f7-view>
    </f7-popup>

  </div> <!--END list media-list-->
</template>

<script>
import Velocity from 'velocity-animate';



export default {

  data () {
    return {
      query: '',
      el: '#nag-gunit-sa-searching'
    }
  },
  props: {
    employee: {
      type: Array,
      required: true
    },
    eduback: {
      type: String,
      required: true
    }
  },

  methods: {
    getPic(name) {
    var images = require.context('../images/', false, /\.png$/);
    return images('./' + name + ".png")
    },

    //for searching area
    beforeEnter: function (el) {
    el.style.opacity = 0
    el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 1
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '100%' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 50
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  },
  computed: {
    computedList: function () {
      var vm = this
      return this.employee.filter(function (item) {
        return item.name.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1

      })
    }
  }



}
</script>
