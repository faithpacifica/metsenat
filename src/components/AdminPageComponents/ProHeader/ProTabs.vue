<template lang="">
    <div class="pro-tabs">
    <ul  class=" pro-tabs__list  w-[580px] flex h-[40px] rounded-[6px] font-['Rubik'] font-medium text-[12px]">
        <li  class="pro-tabs__item  w-[33.333%] py-[14px] text-[#85A3FF] px-[55px] active" >
          <!-- ACTIVE TODO:not working / border 2px muammosi-->
            <router-link class="flex align-center leading-[12px]  uppercase tracking-[1.13px]"  to="/dashboard/statistics">
              DASHBOARD
            </router-link>
        </li>
        <li  class=" pro-tabs__item  w-[33.333%] text-[#85A3FF]   py-[14px] px-[55px]">
            <router-link class="flex align-center text-center leading-[12px] uppercase tracking-[1.13px]" to="/sponsors">
              HOMIYLAR
            </router-link>
        </li>
        <li class="pro-tabs__item  w-[33.333%]  text-[#85A3FF]  py-[14px] px-[55px]">
            <router-link class=" flex align-center  leading-[12px] uppercase tracking-[1.13px]" to="/students">
             TALABALAR
            </router-link>
        </li>
  </ul>
    </div>


</template>
<script>

export default {
    data() {
        return {
           
        }
    },
    
}
</script>

<style >
    .active{
      background-color: #3366FF;
      color:#fff !important; /* TODO:bosganda qanday active qiladi, color:white bulmayapti, butun kvadratga bosganda tasir qilishi, sekin ishlavoti bosganda */
      border:#3366FF 1px solid;
    }

    .pro-tabs__item:nth-child(1){
      border-radius: 6px 0px 0px 6px;
      
    }
    .pro-tabs__item:nth-child(2){
      border-radius: 0px;
    }

    .pro-tabs__item:nth-child(3){
      border-radius: 0px 6px 6px 0px;
    }

    .pro-tabs__item {
      border: 2px solid #E0E7FF;
    }
</style>