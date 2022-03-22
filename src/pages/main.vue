<template>
   <Header/>
  <main class="main">
    <div class="container">
      <div class="main__inner flex justify-between">
        <div class="form-application bg-[#fff] w-[55%] pt-[76px] pb-[122px]">
          <div class="form-application__wrapper max-w-[586px]  w-[100%]">
            <h2
              class="form-application__title w-[80%] font-['Poppins'] m-0 mb-[40px] font-bold text-[40px] leading-[56px] text-[ #1D1D1F]"
            >
              Homiy sifatida ariza topshirish
            </h2>
            <Tabs />
          </div>
        </div>
        <MessageSection />
      </div>
    </div>
  </main>

  <!-- HOZIRCHA SUCCESSFUL component shu yerda -->
  <!-- <Successful /> -->
</template>

<script>
// import Successful from "../components/Mainpage/Successful.vue";
import Header from "../components/Header/Header";
import Tabs from "../components/Mainpage/Tabs.vue";
import MessageSection from "../components/Mainpage/MessageSection.vue";

export default {
  components: {
    // Successful,
    Header,
    Tabs,
    MessageSection,
  },
};
</script>

<style>
.main {
  background-image: url("@/static/img/hatAndRocket.png"),
    linear-gradient(90deg, #fff, #fff 55%, #f5f5f7 0, #f5f5f7);
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover 100%;
}
</style>
