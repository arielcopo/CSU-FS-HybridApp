<template>
  <f7-page id="bg">
    <div>
    <f7-navbar id="navtrans" title="CED" back-link="Back">
        <f7-nav-right>
          <f7-link icon-f7="menu" panel-open="right"></f7-link>
        </f7-nav-right>
    </f7-navbar>
        <f7-block>

            <f7-link href="/cedf/" class="category">
                <p>All Faculty</p>
                <p class="gamay"></p>
            </f7-link>

            <f7-link href="/elem/" class="category">
                <p>Elementary Education</p>
                <p class="gamay"></p>
            </f7-link>

            <f7-link href="/secondary/" class="category">
                <p>Secondary Education</p>
                <p class="gamay"></p>
            </f7-link>

            <f7-link href="/phyed/" class="category">
                <p>Physical Education</p>
                <p class="gamay"></p>
            </f7-link>


        </f7-block>
    </div>
  </f7-page>
</template>

<script>
export default {}
</script>
