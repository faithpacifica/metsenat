<template>
  <div class="pt-[48px] pb-[50px] bg-[#E5E5E5] h-screen h-[100%]">
    <div class="container">
      <!-- SPONSORS DATA TABLE -->
      <div class="data-table font-['Rubik'] mb-[28px]">
        <ul class="data-table__heading flex  justify-between whitespace-nowrap mb-[12px] text-[#B1B1B8] font-medium text-[12px] pl-[16px]  pr-[24px]  leading-[14px]  uppercase tracking-[1.13px]">
         <!-- TODO: -->
          <li  class="mr-[32px]">#</li>
          <li  class="w-[222px]">f.i.sh.</li>
          <li class="w-[124px]">Tel.Raqami</li>
          <li class="w-[112px] mr-[32px]" > Homiylik summasi</li>
          <li  class="w-[112px] mr-[53px]">Sarflangan summa</li>
          <li  class="w-[75px]">Sana</li>
          <li  class="w-[40px]">Holati</li>
          <li  class="">Amallar</li>
        </ul>
        <!-- TODO:Object qilish -->
        <ul class="data-table__content flex justify-between  items-center bg-[#fff]  mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class=" font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]">1</li>
          <li class="w-[222px] font-medium text-[15px] leading-[18px] text-[#1D1D1F]" >Alimov Abror Xabibullayevich</li>
          <li class="w-[124px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">+99899 973-72-60</li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">30 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">0 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[75px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">15.01.2021</li>
          <li class="w-[104px] font-normal text-[15px] leading-[22px] text-center text-[#5BABF2]">Yangi</li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex justify-between  items-center bg-[#fff] mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class=" font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]">2</li>
          <li class="w-[222px] font-medium text-[15px] leading-[18px]  text-[#1D1D1F]" >Saimov Rustam Saimjonovich</li>
          <li class="w-[124px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">+99899 973-72-60</li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">1 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">0 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[75px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">02.02.2021</li>
          <li class="w-[104px] font-normal text-[15px] leading-[22px] text-center text-[#FFA445]">Moderatsiyada</li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex justify-between  items-center bg-[#fff] mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class=" font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]">3</li>
          <li class="w-[222px] font-medium text-[15px] leading-[18px]  text-[#1D1D1F]">Sanginov Otabek Muratovich</li>
          <li class="w-[124px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">+99899 973-72-60</li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">5 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">5 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[75px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">20.04.2021</li>
          <li class="w-[104px] font-normal text-[15px] leading-[22px] text-center text-[#00CF83]">Tasdiqlangan</li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex justify-between  items-center bg-[#fff] mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class=" font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]">4</li>
          <li class="w-[222px] font-medium text-[15px] leading-[18px]  text-[#1D1D1F]">Nazarov Sanjar Olimovich</li>
          <li class="w-[124px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">+99899 973-72-60</li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">7 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">7 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[75px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">03.05.2021</li>
          <li class="w-[104px] font-normal text-[15px] leading-[22px] text-center text-[#979797]">Bekor qilingan</li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex justify-between  items-center bg-[#fff] mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class=" font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]">5</li>
          <li class="w-[222px] font-medium text-[15px] leading-[18px] text-[#1D1D1F]">Ibragimov Sohib Mirfayozovich</li>
          <li class="w-[124px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">+99899 973-72-60</li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">10 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">0 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[75px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">10.05.2021</li>
          <li class="w-[104px] font-normal text-[15px] leading-[22px] text-center text-[#FFA445]">Moderatsiyada</li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex justify-between  items-center  bg-[#fff] mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class=" font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]">6</li>
          <li class="w-[222px] font-medium text-[15px] leading-[18px] text-[#1D1D1F]">Ishmuhammedov Aziz Ishqobilovich</li>
          <li class="w-[124px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">+99899 973-72-60</li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">30 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">1 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[75px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">17.06.2021</li>
          <li class="w-[104px] font-normal text-[15px] leading-[22px] text-center text-[#979797]">Bekor qilingan</li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex justify-between items-center bg-[#fff] mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class=" font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]">7</li>
          <li class="w-[222px] font-medium text-[15px] leading-[18px] text-[#1D1D1F]">Qosimov Furqat Xabibullayevich</li>
          <li class="w-[124px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">+99899 973-72-60</li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">50 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">0 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[75px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">21.06.2021</li>
          <li class="w-[104px] font-normal text-[15px] leading-[22px] text-center text-[#5BABF2]">Yangi</li>
          <li class="cursor-pointer"><img src="@/static/img/eye.svg"  width="24" height="10"/></li>
        </ul>

        <ul class="data-table__content flex justify-between  items-center bg-[#fff] mb-[12px] py-[23px] pr-[48px] pl-[16px] rounded-[8px]">
          <li class=" font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]">8</li>
          <li class="w-[222px] font-medium text-[15px] leading-[18px] text-[#1D1D1F]">Rustamov Oybek  Tajiddinovich</li>
          <li class="w-[124px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">+99899 973-72-60</li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">50 000 000 <span class="text-[#979797]">UZS</span></li>
          <li class="w-[112px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">2 000 000 UZS <span class="text-[#979797]">UZS</span></li>
          <li class="w-[75px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">15.07.2021</li>
          <li class="w-[104px] font-normal text-[15px] leading-[22px] text-center text-[#00CF83]">Tasdiqlangan</li>
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
import Pagination from '@/components/AdminPageComponents/Pagination.vue'


// TODO: Umidadan surash

// data(){
//     return {
//      tableData = [
//         {
//             date: '2016-05-03',
//             name: 'Tom',
//             state: 'California',
//             city: 'Los Angeles',
//             address: 'No. 189, Grove St, Los Angeles',
//             zip: 'CA 90036',
//         },
//         {
//             date: '2016-05-02',
//             name: 'Tom',
//             state: 'California',
//             city: 'Los Angeles',
//             address: 'No. 189, Grove St, Los Angeles',
//             zip: 'CA 90036',
//         },
//         {
//             date: '2016-05-04',
//             name: 'Tom',
//             state: 'California',
//             city: 'Los Angeles',
//             address: 'No. 189, Grove St, Los Angeles',
//             zip: 'CA 90036',
//         },
//         {
//             date: '2016-05-01',
//             name: 'Tom',
//             state: 'California',
//             city: 'Los Angeles',
//             address: 'No. 189, Grove St, Los Angeles',
//             zip: 'CA 90036',
//         },
//         {
//             date: '2016-05-08',
//             name: 'Tom',
//             state: 'California',
//             city: 'Los Angeles',
//             address: 'No. 189, Grove St, Los Angeles',
//             zip: 'CA 90036',
//         },
//         {
//             date: '2016-05-06',
//             name: 'Tom',
//             state: 'California',
//             city: 'Los Angeles',
//             address: 'No. 189, Grove St, Los Angeles',
//             zip: 'CA 90036',
//         },
//         {
//             date: '2016-05-07',
//             name: 'Tom',
//             state: 'California',
//             city: 'Los Angeles',
//             address: 'No. 189, Grove St, Los Angeles',
//             zip: 'CA 90036',
//         },
//         ]
//  }
// }
export default {

     components:{
        Pagination
  }
};
</script>

<style>
.data-table__content {
  border: 1px solid rgba(46, 91, 255, 0.08);
}
</style>
