<template>
  <div class="pt-[48px] pb-[50px] bg-[#E5E5E5] h-screen h-[100%]">
    <div class="container">
      <router-view></router-view>

      <table class="GeneratedTable data-table font-['Rubik'] mb-[28px]">
        <thead>
          <tr
            class="data-table__heading flex justify-between whitespace-nowrap items-center mb-[12px] text-[#B1B1B8] font-medium text-[12px] px-[16px] leading-[14px] uppercase tracking-[1.13px]"
          >
            <th class="w-[10px]">#</th>
            <th class="w-[200px]">f.i.sh.</th>
            <th class="w-[130px]">Tel.Raqami</th>
            <th class="w-[132px]">Homiylik summasi</th>
            <th class="w-[144px]">Sarflangan summa</th>
            <th class="w-[68px]">Sana</th>
            <th class="w-[105px]">Holati</th>
            <th class="w-[64px]">Amallar</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="data-table__content flex justify-between items-center bg-[#fff] mb-[12px] py-[23px] pl-[16px] rounded-[8px]"
            v-for="item in tableData"
            :key="item.number"
          >
            <td
              class="w-[10px] font-normal text-[15px] leading-[22px] text-center text-[#1D1D1F]"
            >
              {{ item.number }}
            </td>
            <td
              class="w-[220px] font-medium text-[15px] leading-[18px] text-[#1D1D1F]"
            >
              {{ item.name }}
            </td>
            <td
              class="w-[130px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]"
            >
              {{ item.tel }}
            </td>
            <td
              class="w-[132px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap"
            >
              {{ item.total }}<span class="text-[#979797]">UZS</span>
            </td>
            <td
              class="w-[144px] font-medium text-[14px] leading-[22px] text-center text-[#2E384D] whitespace-nowrap"
            >
              {{ item.expended }}<span class="text-[#979797]">UZS</span>
            </td>
            <td
              class="w-[68px] font-normal text-[14px] leading-[22px] text-center text-[#1D1D1F]"
            >
              {{ item.date }}
            </td>
            <td
              v-if="item.status === 'Yangi'"
              class="w-[105px] font-normal text-[15px] leading-[22px] text-center text-[#5BABF2]"
            >
              {{ item.status }}
            </td>
            <div
              v-if="item.status === 'Tasdiqlangan'"
              class="font-normal text-[15px] leading-[22px] text-center text-[#00CF83]"
            >
              {{ item.status }}
            </div>
            <div
              v-if="item.status === 'Moderatsiyada'"
              class="font-normal text-[15px] leading-[22px] text-center text-[#FFA445]"
            >
              {{ item.status }}
            </div>
            <div
              v-if="item.status === 'Bekor qilingan'"
              class="font-normal text-[15px] leading-[22px] text-center text-[#979797]"
            >
              {{ item.status }}
            </div>
            <td class="cursor-pointer w-[64px]">
              <router-link to="/single-sponsor">
                <img src="@/static/img/eye.svg" width="24" height="10" />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- PAGINATION -->
      <Pagination />
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
          tel: "+99899 973-72-60",
          total: "30 000 000",
          expended: "5 000 000",
          date: "15.01.2021",
          status: "Tasdiqlangan",
        },
        {
          number: 2,
          name: "Saimov Rustam Saimjonovich",
          tel: "+99899 973-72-60",
          total: "30 000 000",
          expended: "15 000 000",
          date: "15.01.2021",
          status: "Yangi",
        },
        {
          number: 3,
          name: "Ibragimov Sohib Mirfayozovich",
          tel: "+99899 973-72-60",
          total: "30 000 000",
          expended: "0",
          date: "15.01.2021",
          status: "Moderatsiyada",
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
