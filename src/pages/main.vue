<template>
   <Header/>
  <main class="main">
    <div class="container">
      <div class="main__inner flex justify-between">    
        <FormSection/>
        <MessageSection />
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
</style>
