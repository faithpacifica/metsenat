<template>
  <HeaderTop />

  <div class="py-[30px] bg-[#fff] z-[10]">
    <div class="container flex justify-start flex-wrap">
      <router-link to="/students" class="mr-[16px]">
        <img
          class="cursor-pointer"
          src="@/static/img/arrow-left.svg"
          width="28"
          height="28"
        />
      </router-link>
      <span
        class="mr-[12px] font-['SF Pro Display'] font-bold text-[24px] leading-[28px] text-[#28293D]"
        >Talaba qo‘shish</span
      >
    </div>
  </div>

  <div class="add-student pt-[40px] bg-[#E5E5E5] flex grow h-screen">
    <div class="container">
      <div
        class="mx-auto font-['Rubik'] w-[790px] bg-[#fff] p-[28px] rounded-[12px]"
      >
        <form class="form w-[734px]" action="#" method="post">
          <div class="selects-wrapper flex justify-between w-[100%]">
            <div class="font-['Rubik'] mb-[28px] text-left w-[49%]">
              <label
                class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >
                F.I.Sh. (Familiya Ism Sharifingiz)
              </label>
              <input
                class="form__input block  px-[16px] py-[12px] rounded-[6px] w-[100%]"
                type="text"
                placeholder="Abdullayev Abdulla Abdulla o’g’li"
              />
            </div>
            <div class="font-['Rubik'] mb-[28px] text-left w-[49%]">
              <label
                class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                >Telefon raqam</label
              >
              <input
                class="form__input block px-[16px] py-[12px] rounded-[6px] w-[100%]"
                type="text"
                placeholder="+998 00 000-00-00"
              />
            </div>
          </div>
          <div class="font-['Rubik'] mb-[28px] text-left flex flex-col">
            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >OTM</label
            >

            <el-select
              class="w-[100%]"
              v-model="value"
              disabled
              placeholder="OTM ni tanlang"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div class="selects-wrapper flex justify-between">
            <div class="font-['Rubik'] mb-[28px] text-left flex flex-col  w-[49%]">
              <label
                class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                >Talabalik turi</label
              >
              <el-select
                v-model="value"
                disabled
                placeholder="Barchasi"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div class="font-['Rubik'] mb-[28px] text-left flex flex-col  w-[49%]">
              <label
                class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                >Kontrakt summa</label
              >
              <el-select
                v-model="value"
                disabled
                placeholder="Summani kiriting"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
    <hr class="divider"/>

          <div class="add-button-wrapper flex justify-end mt-[28px]">
            <button
              class="flex  py-[13px] pl-[36px] pr-[32px] bg-[#3366FF] rounded-[5px]"
            >
              <img
                class="mr-[10px] block"
                src="@/static/img/plus.svg"
                width="24"
                height="24"
              />
              <span
                class="font-['SF Pro Text'] block text-[#fff] font-medium text-[14px] leading-[24px] text-center"
                >Qo'shish</span
              >
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/components/AdminPageComponents/ProHeader/HeaderTop.vue";
export default {
  components: {
    HeaderTop,
  },
};
</script>

<style>
.divider{
  border: 1px solid #F5F5F7;

}
</style>
