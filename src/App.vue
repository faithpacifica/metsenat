<template>
   <!-- <Header /> -->
  <router-view />
</template>

<script>
// import Header from './components/Header/Header';

export default {

  data(){
    return {
      myTable:[
        {
          
        }
      ]
    }
  },
  name: "App",
  components: {
    // Header,

  },
}

</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Rubik:wght@400;500&display=swap');


/* Global styles */

html {
    box-sizing:border-box;
    height: 100%;
    scroll-behavior: smooth;
}

* , *::before, *::after{
    box-sizing: inherit;
}

a {
    text-decoration: none;
}

input {
  outline:none;
}
body {
    font-family: 'Rubik', Arial, sans-serif;
    margin: 0;
    padding: 0;
    font-size: 12px;
    line-height: 14.22px;
    color:  #1D1D1F;
    background-color: #fff;
}

/* CONTAINER */
.container {
    width: 100%;
    max-width: 1240px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
}

/* TAB STYLES CHANGE TODO:still uzgartirish qanchalik tugri */
.el-tabs__content {
     overflow: visible !important;
}

.el-tabs__nav{
   float:none;
   margin-bottom: 28px;
}

.el-tabs__item{
  padding: 0 !important;
}

.el-tabs__nav-wrap::after {
  display:none;
}

.el-tabs__item.is-active {
  background: #3366FF !important;
  color:#fff !important;
  border:1px solid #3366FF;
}
.el-tabs__nav-wrap.is-scrollable{
  padding: 0 !important;
}
.el-tabs__header {
  width: 100% !important;
  margin-bottom: 0 !important;
}

.el-tabs__item.is-top{
  border-radius: 6px;
  color: rgba(51, 102, 255, 0.6);
}
.el-tabs__active-bar{
  height: 0 !important;
  background: 0 !important;
  width: 0;
}
 .tabs .el-tabs--top .el-tabs__item.is-top{
   width: 50%;
   border: 1px solid #E0E7FF;
 }

.tabs .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  width:293px !important;
  border-radius:6px 0 0 6px;
  text-align:center;
}

.tabs .el-tabs--top .el-tabs__item.is-top:last-child {
  width:293px !important ;
  border-radius:0 6px 6px 0;
   text-align:center;
}

</style>
