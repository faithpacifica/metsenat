<template>
  <transition name="modal-fade">
    <div class="modal-backdrop z-[100] py-[50px]">
      <div
        class="modal single-sponsor-filter mt-[50px] w-[586px] p-[28px] rounded-[12px]"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header font-['SF Pro Display'] font-bold text-[24px] leading-[28px] text-[#28293D]"
          id="modalTitle"
        >
          <div class="header__inner mb-[28px]">
            <slot name="header"> Filter </slot>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              <img src="@/static/img/icon-x.svg" width="28" height="28" />
            </button>
          </div>
        </header>

        <section
          class="modal-body mt-[28px] flex flex-col"
          id="modalDescription"
        >
          <slot name="body">
            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >Ariza holati</label
            >

            <el-select
              class="select mb-[28px]"
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

            <label
              class="inline-block mb-[16px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >Homiylik Summasi</label
            >

            <div class="sponsors-payment-sum flex flex-wrap gap-[10px] mb-[28px]">
              
                <label for="all_prices" class="radio w-[124px]">
                  <div
                    class="click flex cursor-pointer justify-center items-center bg-[#E0E7FF] py-[16px]"
                  >
                    <span class="flex flex-nowrap justify-around items-center ">
                      <span
                        class="price font-medium text-[14px] leading-[20px]  text-[#2E384D]"
                        >Boshqa</span
                      >
                    </span>
                    <input
                      class="invisible"
                      id="all_prices"
                      name="sum"
                      value="0"
                      type="radio"
                    />
                  </div>
                </label>

              <div class="flex flex-wrap "  v-for="item in amountData" :key="item">

                <label for="all_prices" class="radio w-[124px]">
                  <div
                    class="click flex cursor-pointer justify-center items-center py-[16px]"
                  >
                    <span class="flex flex-nowrap justify-around items-center">
                      <span
                        class="price font-medium text-[14px] leading-[20px] text-[#2E384D] "
                        >{{item}}</span
                      >
                    </span>
                    <input
                      class="invisible"
                      id="all_prices"
                      name="sum"
                      value="0"
                      type="radio"
                    />
                  </div>
                </label>
              </div>
            </div>

            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >Sana</label
            >

            <el-input
              v-model="input3"
              class="input-date w-25 m-0 mb-[28px]"
              placeholder="kk.oo.yyyy - kk.oo.yyyy"
            >
              <template #suffix>
                <img
                  src="@/static/img/icon-calendar.svg"
                  width="22"
                  height="22"
                />
              </template>
            </el-input>
          </slot>
        </section>

        <footer class="modal-footer flex justify-between mt-[28px]">
          <el-button class="clear-button w-[149px]" type="button">
            <img
              class="mr-[4px]"
              src="@/static/img/icon-broom.svg"
              width="24"
              height="24"
            />Tozalash
          </el-button>
          <el-button
            class="watch-result-button w-[209px] bg-[#3366FF] rounded-[5px]"
            type="button"
          >
            <img
              class="mr-[10px]"
              src="@/static/img/icon-white-eye.svg"
              width="24"
              height="24"
            />Natijalarni ko‘rish
          </el-button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
   data() {
    return {
     amountData : ['1 000 000', '5 000 000', '7 000 000', '10 000 000', '30 000 000', '30 000 000'] 
        }     
 },

  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};

import { ref } from "vue";

const value = ref("");
const options = [
  {
    value: "Barchasi",
    label: "Barchasi",
  },
  {
    value: "Yangi",
    label: "Yangi",
  },
  {
    value: "Modernizatsiyada",
    label: "Modernizatsiyada",
  },
  {
    value: "Tasdiqlangan",
    label: "Tasdiqlangan",
  },
  {
    value: "Bekor qilingan",
    label: "Bekor qilingan",
  },
];
</script>

<style>
.single-sponsor-filter {
  margin: 100px auto;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 2px solid #f5f5f7;
  justify-content: space-between;
}

.modal-footer {
  flex-direction: row;
  justify-content: flex-end;
}
.clear-button {
  height: 42px;
  font-family: "SF Pro Text";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.35px;
  color: #b2b7c1;
}
.watch-result-button {
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  background: #3366ff;
  height: 42px;
  font-family: "SF Pro Text";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.35px;
  color: #ffffff;
}

.modal-body {
  position: relative;
  border-bottom: 2px solid #f5f5f7;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
}

.select::placeholder {
  font-family: "Rubik";
  font-size: 15px;
  line-height: 18px;
  color: #2e384d !important; /*TODO:rang tasir qilmayapti */
}

.el-input__inner {
  height: 42px;
  padding: 12px 16px;
  background-color: rgba(224, 231, 255, 0.2);
  border: 1px solid #e0e7ff;
  border-radius: 6px;
}
.input-date {
  width: 253px !important;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

/* Blue checked buttons */

.radio {
  width: 124px;
  /* margin-bottom: 16px; */
  background: #f9faff;
  /* border: 2px solid #2E5BFF; */
  border: 2px solid #e0e7ff;
  border-radius: 5px;
  position: relative;
}

.radio:after {
  content: "";
  /* TODO:not working */
  background-image: url("@/static/img/checkedIcon.svg");
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  z-index: 3;
}

.form__input {
  background: rgba(224, 231, 255, 0.2);
  border: 1px solid #e0e7ff;
}

.form__input::placeholder {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(46, 56, 77, 0.35);
}
</style>
