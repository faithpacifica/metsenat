<template>
  <header class="header py-[28px] z-1000 fixed relative">
    <div class="">
      <div class="container header__inner flex items-center justify-between flex-wrap  ">
        <router-link class=''  to="/">
          <img class="site-logo block xl:max-w-[100%]  "  src="@/static/img/logo.svg" width="295" height="91" />
        </router-link>

        <div class="navbar-button-wrapper flex items-center justify-center flex-wrap">
        <Navbar />
        <RegisterButton />
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "./subcomponents/Navbar";
import RegisterButton from "./subcomponents/RegisterButton";


export default {
  
  components: {
    Navbar,
    RegisterButton,
  },
};
</script>

<style scoped>
.header {
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
  z-index:1000;
}



@media only screen and (min-width: 719px) and (max-width: 1023px) {
  .navbar-button-wrapper{
    margin-top:15px;
  }
.header__inner {
  justify-content: center;
}
   
}

@media  (max-width: 767px) {
  .site-logo{
    margin-bottom:15px;
  } 
  .header__inner {
  justify-content: center;
}
}


@media  (max-width: 546px) {
  .navbar-button-wrapper{
    margin-top:15px;
  }
  
}
</style>
