<template>
  <transition name="modal-fade">
    <div class="modal-backdrop z-[100] pt-[50px]">
        <!-- TODO:shadow ga bosganda modalka yo'qolsin funksiya yozish -->
      <div
        class="modal single-sponsor-filter mt-[50px] max-w-[586px] w-[100%] p-[28px] rounded-[12px]"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header font-['SF Pro Display'] font-bold text-[24px] leading-[28px] text-[#28293D]"
          id="modalTitle"
        >
          <div class="modal-header__inner mb-[28px]">
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
              v-model="statusValue"
              placeholder="Barchasi"
            >
              <el-option
                v-for="item in status"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>

            <label
              class="inline-block mb-[16px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >Homiylik Summasi</label
            >

            <!-- <div
              class="sponsors-payment-sum flex justify-center flex-wrap gap-[10px] mb-[28px] relative"
            >
              <label for="all_prices" class="radio w-[124px]">
                <div
                  class="click flex cursor-pointer justify-center items-center bg-[#E0E7FF] py-[16px]"
                >
                  <span class="flex flex-nowrap justify-around items-center">
                    <span
                      class="price font-medium text-[14px] leading-[20px] text-[#2E384D]"
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

              <div
                class="flex flex-wrap"
                v-for="item in amountData"
                :key="item"
              >
                <label for="all_prices" class="radio w-[124px]">
                  <div
                    class="click flex cursor-pointer justify-center items-center py-[16px]"
                  >
                    <span class="flex flex-nowrap justify-around items-center">
                      <span
                        class="price font-medium text-[14px] leading-[20px] text-[#2E384D]"
                        >{{ item }}</span
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
            </div> -->
<!-- --------------------------------------------------- -->
    <div
        class="sponsors-payment-sum flex justify-flex-start text-center gap-[10px] w-[100%] flex-wrap mb-[28px] relative"
      >
             <div class="flex justify-between flex-wrap">
          <!-- TODO:bu  input checked stili doublecheck da ishlayapti -->

          <label :for="input200" class="radio w-[124px] border-[#2E5BFF] bg-[#E0E7FF]">
            <input
              class="input-active cursor-pointer"
              v-model="sum"
              :id="input200"
              name="sum"
              type="radio"
            />
            <div
              class="click flex justify-center items-center flex-wrap  py-[16px]"
              @click="openInput"
            >
              <span class="flex flex-nowrap justify-around items-center">
                <span
                  class="price font-medium text-[14px] leading-[20px]  text-[#2E384D] mr-[4px]"
                  >Barchasi</span
                >
              </span>
            </div>
          </label>
        </div>

        <!-- {{ sum }} -->

   
        <!-- <transition>
          <div class="font-['Rubik'] mb-[28px] w-[100%]" v-if="sum == 'on'">
            <input
              name="sum"
              v-model="otherSum"
              class="form__input block max-w-[586px] w-[100%] py-[12px] px-[16px] rounded-[6px]"
              :class="v$.sum.$error"
              type="text"
              maxLength="10"
              placeholder="Summani kiriting"
            />
          </div>
        </transition> -->

        <div
          class="flex justify-between flex-wrap"
          v-for="item in amountData"
          :key="item.id"
        >
          <label
            :for="'input' + item.id"
            class="radio cursor-pointer w-[124px] border-[#2E5BFF]"
          >
            <input
              class="form__input input-active"
              :class="{ 'has-error': v$.sum.$invalid }"
              v-model="sum"
              :id="'input' + item.id"
              name="sum"
              type="radio"
              :value="'input' + item.id"
            />
            <div
              class="click flex justify-center items-center flex-wrap py-[16px]"
            >
              <span class="flex flex-nowrap justify-around items-center">
                <span
                  class="price font-medium text-[14px] leading-[20px] text-[#2E384D] mr-[4px]"
                  >{{ item.sum}}</span
                >
                <span
                  class="sum text-[12px] leading-[18px] uppercase text-[#2E5BFF]"
                  >UZS</span
                >
              </span>
            </div>
          </label>
        </div>

 

        <!--TODO: error message uchmayapti -->
        <div
          class="error-message text-[red] absolute top-[-40px] right-[0px]"
          v-if="v$.sum.$error"
        >
          Summani tanlang!
        </div>
    </div>
            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >Sana</label
            >

            <el-date-picker
              v-model="selectedDate"
              type="date"
              class="input-date w-25 m-0 mb-[28px]"
              placeholder="kk.oo.yyyy - kk.oo.yyyy"
            ></el-date-picker>
          </slot>
        </section>

        <footer class="modal-footer flex justify-between mt-[28px]">
          <el-button
            class="clear-button w-[149px]"
            @click="clearData"
            type="reset"
          >
            <img
              class="mr-[4px]"
              src="@/static/img/icon-broom.svg"
              width="24"
              height="24"
            />Tozalash
          </el-button>
          <el-button
            class="watch-result-button w-[209px] bg-[#3366FF] rounded-[5px]"
            @click="showResult"
            @submit.prevent="submitForm"
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

import { useVuelidate } from "@vuelidate/core";
import { required, minLength} from "@vuelidate/validators";

export default {
  data() {
    return {
      name: "Modal",
      statusValue: null,
      selectedDate: "",
      resultArray: [],
      inputValue: false,
      sum: "",
      input: false,
      otherSum: null,

     amountData: [
        // {
        //   id: 0,
        //   sum: "Barchasi",
        // },
        {
          id: 1,
          sum: "1 000 000",
        },
        {
          id: 2,
          sum: "5 000 000",
        },
        {
          id: 3,
          sum: "7 000 000",
        },
        {
          id: 4,
          sum: "10 000 000",
        },

        {
          id: 5,
          sum: "30 000 000",
        },
        {
          id: 6,
          sum: "50 000 000",
        },
      ],
      status: [
        {
          number: 1,
          label: "Barchasi",
          value: "Barchasi",
        },

        {
          number: 2,
          label: "Tasdiqlangan",
          value: "Tasdiqlangan",
        },
        {
          number: 3,
          label: "Yangi",
          value: "Yangi",
        },
        {
          number: 4,
          label: "Moderatsiyada",
          value: "Moderatsiyada",
        },

        {
          number: 5,
          label: "Bekor qilingan",
          value: "Bekor qilingan",
        },
      ],
    };
  },
  setup: () => ({
    v$: useVuelidate(),
  }),

  validations() {
    return {

      sum: {
        required,
        minLength: minLength(4),
      },
      otherSum: {
        required,
        minLength: minLength(4),

      },
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },

     submitForm() {
      this.v$.$validate();

      if (
        !this.v$.$error &&
        ((this.sum != "" && this.sum != "on") || this.otherSum != "")
      ) {
        console.log("no error!");
        this.sentSuccessfully = true;
      }
    },

    showResult() {
      console.log(this.statusValue);
      console.log(this.selectedDate);
      console.log(this.sum);
    },
    clearData() {
      console.log((this.statusValue = ""), "data cleared");
      console.log((this.selectedDate = ""), "data cleared");
      console.log((this.sum = ""), "data cleared");
    },
  },
};
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
  max-height:100vh;
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
  color: #2e384d !important;
  /*TODO:rang tasir qilmayapti */
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

.radio .input-active:checked + .click:after {
  display: block;
}

.click {
  border: 2px solid transparent;
}

.radio .input-active:checked + .click {
  border: 2px solid #2e5bff;
  border-radius: 5px;
}

.click:after {
  content: "";
  background-image: url("@/static/img/checkedIcon.svg");
  position: absolute;
  width: 20px;
  height: 20px;
  background-size: 20px;
  z-index: 3;
  top: -8px;
  right: -8px;
  display: none;
}

.input-active {
  display: none;
}

.form__input {
  background: rgba(224, 231, 255, 0.2);
  border: 1px solid #e0e7ff;
}

.form__input::placeholder {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
 color: #000;
}

/* RESPONSIVE */
@media only screen and (min-width: 357px) and (max-width: 600px) {
 .sponsors-payment-sum{
     justify-content:center;
 }
}
</style>
