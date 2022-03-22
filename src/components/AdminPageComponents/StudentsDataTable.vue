<template>
  <div class="pt-[28px] pb-[50px] bg-[#E5E5E5] h-screen h-[100%]">
    <div class="container">
      <div class=" add-button-wrapper flex justify-end">
          <button class="flex mb-[28px]  py-[13px] pl-[36px] pr-[32px] bg-[#3366FF] rounded-[5px]">
            <img class="mr-[10px] block" src="@/static/img/plus.svg" width="24" height="24">
            <span class="font-['SF Pro Text']  block text-[#fff] font-medium text-[14px] leading-[24px] text-center">Talaba qo'shish</span> 
          </button>
      </div>

    <!-- SPONSORS DATA TABLE -->
      <div class="data-table font-['Rubik'] mb-[28px]">
        <ul class="data-table__heading flex whitespace-nowrap mb-[12px] text-[#B1B1B8] font-medium text-[12px] pl-[16px]  pr-[24px]  leading-[14px]  uppercase tracking-[1.13px]">
         <!-- TODO: -->
          <li  class="mr-[33px] ">#</li>
          <li  class="w-[222px] mr-[150px]">f.i.sh.</li>
          <li  class="w-[110px] mr-[133px]">TALABALIK TURI</li>
          <li class="w-[200px] mr-[130px]">DTM</li>
          <li class="w-[155px]  mr-[46px]" >AJRATILGAN SUMMA</li>
          <li  class="w-[132px] text-center mr-[47px]">KONTRAKT MIQDORI</li>
          <li  class="">Amallar</li>
        </ul>
        <!-- TODO:Object qilish -->
        <ul class="data-table__content flex items-center bg-[#fff]  mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class="font-normal text-[15px] leading-[22px] mr-[33px] text-[#1D1D1F]">1</li>
          <li class="w-[222px] font-medium text-[15px] mr-[46px] leading-[18px] text-[#1D1D1F]" >Alimov Abror Xabibullayevich</li>
          <li class="w-[110px]  text-[14px] leading-[22px] mr-[73px] text-center text-[#1D1D1F]">Bakalavr</li>
          <li class="w-[200px] text-[14px] leading-[22px] mr-[70px] text-center text-[#1D1D1F] ">Toshkent shahridagi INHA Universiteti</li>
          <li class="w-[155px] font-medium text-[14px] leading-[22px] mr-[70px] text-center text-[#2E384D] whitespace-nowrap">14 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[132px] font-medium text-[14px] leading-[22px]  mr-[77px] text-center text-[#2E384D] whitespace-nowrap">30 000 000  <span class="text-[#979797]">UZS</span></li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex items-center bg-[#fff]  mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class="font-normal text-[15px] leading-[22px] mr-[33px] text-[#1D1D1F]">2</li>
          <li class="w-[222px] font-medium text-[15px] mr-[46px] leading-[18px] text-[#1D1D1F]" >Saimov Rustam Saimjonovich</li>
          <li class="w-[110px]  text-[14px] leading-[22px] mr-[73px] text-center text-[#1D1D1F]">Magistr</li>
          <li class="w-[200px] text-[14px] leading-[22px] mr-[70px] text-center text-[#1D1D1F] ">O’zbekiston milliy universiteti</li>
          <li class="w-[155px] font-medium text-[14px] leading-[22px] mr-[70px] text-center text-[#2E384D] whitespace-nowrap">28 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[132px] font-medium text-[14px] leading-[22px]  mr-[77px] text-center text-[#2E384D] whitespace-nowrap">28 000 000  <span class="text-[#979797]">UZS</span></li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex items-center bg-[#fff]  mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class="font-normal text-[15px] leading-[22px] mr-[33px] text-[#1D1D1F]">3</li>
          <li class="w-[222px] font-medium text-[15px] mr-[46px] leading-[18px] text-[#1D1D1F]" >Sanginov Otabek Muratovich</li>
          <li class="w-[110px]  text-[14px] leading-[22px] mr-[73px] text-center text-[#1D1D1F]">Magistr</li>
          <li class="w-[200px] text-[14px] leading-[22px] mr-[70px] text-center text-[#1D1D1F] ">Toshkent davlat texnika universiteti</li>
          <li class="w-[155px] font-medium text-[14px] leading-[22px] mr-[70px] text-center text-[#2E384D] whitespace-nowrap">0 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[132px] font-medium text-[14px] leading-[22px]  mr-[77px] text-center text-[#2E384D] whitespace-nowrap">24 000 000  <span class="text-[#979797]">UZS</span></li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex items-center bg-[#fff]  mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class="font-normal text-[15px] leading-[22px] mr-[33px] text-[#1D1D1F]">4</li>
          <li class="w-[222px] font-medium text-[15px] mr-[46px] leading-[18px] text-[#1D1D1F]" >Nazarov Sanjar Olimovich</li>
          <li class="w-[110px]  text-[14px] leading-[22px] mr-[73px] text-center text-[#1D1D1F]">Bakalavr</li>
          <li class="w-[200px] text-[14px] leading-[22px] mr-[70px] text-center text-[#1D1D1F] ">Toshkent davlat iqtisodiyot universiteti</li>
          <li class="w-[155px] font-medium text-[14px] leading-[22px] mr-[70px] text-center text-[#2E384D] whitespace-nowrap">20 000 000  <span class="text-[#979797]">UZS</span></li>
          <li class="w-[132px] font-medium text-[14px] leading-[22px]  mr-[77px] text-center text-[#2E384D] whitespace-nowrap">25 000 000  <span class="text-[#979797]">UZS</span></li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>
      </div>

  <!-- PAGINATION -->
      <div class="flex justify-between  items-center  font-['Rubik] text-[15px] leading-[22px] text-[#1D1D1F]">
        <div>59 tadan  1-10 ko‘rsatilmoqda</div>
          <Pagination/>
      </div>

    </div>
  </div>
</template>

<script>
import Pagination from "@/components/AdminPageComponents/Pagination.vue";
export default {
  components: {
    Pagination,
  },
};

</script>
