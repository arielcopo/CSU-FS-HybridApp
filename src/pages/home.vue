<template >
  <f7-page>
    <div id="load" ><img class="loading_screen" src="../images/fssmall.png"/>
      <div class="loading-page">
        <div class="counter">
          <hr/>
        </div>
      </div>
    </div>


    <div id="contents" class="bgintro">

      <f7-nav-right>
        <f7-link icon-f7="menu" panel-open="right" style="opacity:-1;"></f7-link>
      </f7-nav-right>

      <audio controls style="opacity: -1;">
        <source src="../audio/csu.mp3" type="audio/mp3">
      </audio>


      <img src="../images/fs.png" class="fsfront"/>
      <f7-link href="/colleges/" class="proceed">
        <p>START</p>
      </f7-link>

      <div class="centertop">
        <p v-show="notshow" >All information is based on http://carsu.edu.ph/</p>
      </div>
    </div>
  </f7-page>
</template>

<style scoped>

body {
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: Roboto;
}

.loading-page {
  background: #fff;
  width: 100vw;
  height: 100vh;
  margin-top: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.loading-page .counter {
  text-align: center;
}


.loading-page .counter hr {
  background: #009245;
  border: none;
  height: 3px;
  border-radius: 5px
}
.loading-page .counter {
  position: relative;
  width: 200px;
}
.loading-page .counter .color {
  width: 0px;
  overflow: hidden;
  color: #009245;
}

</style>



<script>

$(document).ready(function() {

  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
    $(".loading-page .counter hr").css("width", c + "%");
    counter++;
    c++;

    if(counter == 101) {
      clearInterval(i);
    }
  }, 40);
});


document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
    setTimeout(function(){
      document.getElementById('interactive');
      document.getElementById('load').style.visibility="hidden";
      document.getElementById('contents').style.visibility="visible";
    },5000);

  }
}

export default {
  data () {
    return {
      notshow: false,
    }
  }

}

</script>



