<template>
  <f7-page id="bgblur">
    <div class="sidebar-style">
      <f7-navbar id="navtrans" title="Grading System" back-link="Back">
        <f7-nav-right>
          <f7-link icon-f7="menu" panel-open="right"></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-block>
      
<table>
  <thead>
    <tr>
      <th>Numerical Value</th>  
      <th>% Equivalent</th>
      <th>Letter Equivalent</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1.00</td>
      <td>99 - 100</td>
      <td>A</td>
      <td>Excellent</td>
    </tr>

    <tr>
      <td>1.25</td>
      <td>96 - 98</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td>1.50</td>
      <td>93 - 95</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td>1.75</td>
      <td>90 - 92</td>
      <td>A-</td>
      <td>Very Good</td>
    </tr>

    <tr>
      <td>2.00</td>
      <td>87 - 89</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td>2.25</td>
      <td>84 - 86</td>
      <td>B</td>
      <td>Above Average</td>
    </tr>

    <tr>
      <td>2.50</td>
      <td>81 - 83</td>
      <td></td>
      <td></td>
    </tr>

    <tr>
      <td>2.75</td>
      <td>78 - 80</td>
      <td>B-</td>
      <td>Average</td>
    </tr>

    <tr>
      <td>3.00</td>
      <td>75 - 77</td>
      <td>C</td>
      <td>Passing</td>
    </tr>

    <tr>
      <td>4.00</td>
      <td>75 & below</td>
      <td>-</td>
      <td>Conditional</td>
    </tr>

    <tr>
      <td>5.00</td>
      <td>-</td>
      <td>-</td>
      <td>Failing</td>
    </tr>

    <tr>
      <td>INC</td>
      <td>-</td>
      <td>-</td>
      <td>Incomplete</td>
    </tr>
  </tbody>
</table>

              
      
        











      </f7-block>
    </div>
  </f7-page>
</template>

<style scoped>


* {
  box-sizing: border-box;
}
html {
  font-family: helvetica;
}

html, body {
  max-width: 100vw;
}

table {
 margin: auto;
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  width: fit-content;
  max-width: 100%;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, .4);
}

td, th {
  border: solid #ddd 1px;
  padding: .5rem;
  
}

th {
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: #ddd solid 5px;
  text-align: center;
}

td {
  white-space: nowrap;
  border-bottom: 1;
  color: #fff;
  text-align: center;
}

td:first-of-type, th:first-of-type {
  border-left: none;
}

td:last-of-type, th:last-of-type {
  border-right: none;
}



</style>


<script>



</script>