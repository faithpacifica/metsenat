<template>
<div class="form-application bg-[#fff] pt-[76px] lg:pt-[40px] md:pt-[40px] sm:pt-[40px]  pb-[214px]">
    <div class="form-application__wrapper max-w-[586px]  w-[100%]">
        <h2 class="form-application__title w-[80%] font-['Poppins'] m-0 mb-[40px] font-bold xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[30px]  xl:leading-[56px] lg:leading-[40px] md:leading-[35px] sm:leading-[30px] text-[#1D1D1F]">
            Homiy sifatida ariza topshirish
        </h2>
        <Tabs />
    </div>
</div>
</template>

<script>
import Tabs from "@/components/Mainpage/Tabs.vue";

export default {
    components: {
        Tabs,

    }
}
</script>

<style >
@media  (max-width: 640px) {
  .form-application__title{
    line-height:30px;
    font-size:30px;
  } 

}
</style>
