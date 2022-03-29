<template>
  <div class="pt-[28px] pb-[50px] bg-[#E5E5E5] h-screen h-[100%]">
    <div class="container">
      
      <!-- ADD STUDENT BUTTON -->
      <div class=" add-button-wrapper flex justify-end">
          <router-link to="/add-student"  class="flex mb-[28px]  py-[13px] pl-[36px] pr-[32px] bg-[#3366FF] rounded-[5px]">
            <img class="mr-[10px] block" src="@/static/img/plus.svg" width="24" height="24">
            <span class="font-['SF Pro Text']  block text-[#fff] font-medium text-[14px] leading-[24px] text-center">Talaba qo'shish</span> 
          </router-link>
      </div>
    <router-view></router-view>
  
      <div class="data-table font-['Rubik'] mb-[28px]">
        <table class="GeneratedTable data-table  mb-[28px]">
        <thead>
          <tr  class="data-table__heading flex justify-between whitespace-nowrap items-center mb-[12px] text-[#B1B1B8] font-medium text-[12px] px-[16px] leading-[14px] uppercase tracking-[1.13px]">
            <th class="w-[10px]">#</th>
            <th class="w-[220px]">f.i.sh.</th>
            <th class="w-[110px]">TALABALIK TURI</th>
            <th class="w-[200px]">DTM</th>
            <th class="w-[155px]">Ajratilgan summa</th>
            <th class="w-[155px]">Kontrakt miqdori</th>
            <th class="w-[64px]">Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="data-table__content flex justify-between items-center bg-[#fff] mb-[12px] py-[23px] pl-[16px] rounded-[8px]"
            v-for="item in tableData"
            :key="item.number"
          >
            <td class="w-[10px] font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]" >
              {{ item.number }}
            </td>

            <td class="w-[220px] font-medium text-[15px] leading-[18px] text-[#1D1D1F]">
              {{ item.name }}
            </td>

            <td class="w-[110px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">
              {{ item.degree }}
            </td>

            <td class="w-[200px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]">
              {{ item.facility }}
            </td>

            <td class="w-[155px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap" >
              {{ item.allocatedSum }}<span class="text-[#979797]">UZS</span>
            </td>

            <td class="w-[155px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap">
              {{ item.contractAmount }}<span class="text-[#979797]">UZS</span>
            </td>
           
            <td class="cursor-pointer w-[64px]">
              <router-link to="/single-student">
                <img src="@/static/img/eye.svg" width="24" height="10" />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>


         <!-- PAGINATION -->
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
   data() {
    return {
      tableData: [
        {
          number: 1,
          name: "Alimov Abror Xabibullayevich",
          degree: "Bakalavr",
          facility: "Toshkent shahridagi INHA Universiteti",
          allocatedSum: "30 000 000",
          contractAmount: "15 000 000",   
        },
        {
          number: 2,
          name: "Saimov Rustam Saimjonovich",
          degree: "Magistr",
          facility: "O’zbekiston milliy universiteti",
          allocatedSum: "20 000 000",
          contractAmount: "50 000 000",   
        },
        {
          number: 3,
          name: "Ibragimov Sohib Mirfayozovich",
          degree: "Bakalavr",
          facility: "Toshkent davlat texnika universiteti",
          allocatedSum: "0",
          contractAmount: "15 000 000",     
        },
      ],
    };
  },
};

</script>

<style>
table.GeneratedTable {
  width: 100%;
  border-collapse: collapse;
}

table.GeneratedTable thead {
  background-color: transparent;
}

</style>
