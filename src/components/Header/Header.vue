<template>
  <header class="header py-[28px] z-1000 fixed relative">
    <div class="header__inner">
      <div class="container flex items-center flex-wrap">
        <router-link class=''  to="/">
          <img src="@/static/img/logo.svg" width="295" height="91" />
        </router-link>
        <Navbar />
        
        <RegisterButton />
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

<style scope>
.header {
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
  /**TODO:box-shadow kurinmayapti */ 
  z-index:1000;
}
</style>
