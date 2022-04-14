<template>
   <Header/>
  <main class="main">
      <div class="container">
      <div class="main-inner grid justify-between xl:grid-cols-10 grid-cols-2">    
        <FormSection class="xl:col-span-6 col-span-1" />
        <MessageSection class="xl:col-span-4 col-span-1"/>
      </div>
      </div>
   
  </main>

</template>

<script>

import Header from "../components/Header/Header";
import FormSection from "../components/Mainpage/FormSection.vue"
import MessageSection from "@/components/Mainpage/MessageSection.vue";

export default {
  components: {
    
    Header,
    FormSection,
    MessageSection,
  },
};
</script>

<style>
.main {
  background-image: url("@/static/img/hatAndRocket.png"),
    linear-gradient(90deg, #fff, #fff 55%, #f5f5f7 0, #f5f5f7);
  background-repeat: no-repeat;
  background-position: bottom 0 right 0;
  background-size: cover 100%;
}


/* RESPONSIVE */

@media only screen and (min-width: 768px) and (max-width: 1239px) {
 .main {
  background-size: 40%, 100%;
}
}
@media  (max-width: 767px) {
  .main-inner{
   grid-template-columns: none;
   display:flex;
   flex-direction:column-reverse;
  } 

  .main{
    background-image:none;
  }

}
</style>
