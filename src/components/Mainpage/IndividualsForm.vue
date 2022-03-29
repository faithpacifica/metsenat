<template>
  <!-- Form -->
  <div>
    <form
      v-if="sentSuccessfully === false"
      class="form individuals-form max-w-[586px] mt-[28px] w-[100%]"
      action="#"
      method="post"
      @submit.prevent="submitForm"
    >
      <div class="form-group font-['Rubik'] mb-[28px]">
        <label
          for="name"
          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
        >
          F.I.Sh. (Familiya Ism Sharifingiz)
        </label>
        {{ v$.name.$error }}
        <input
          id="name"
          v-model="name"
          name="name"
          class="form__input block max-w-[586px] w-[100%] py-[12px] px-[16px] rounded-[6px]"
          :class="{ 'has-error': v$.name.$error }"
          type="text"
          placeholder="Abdullayev Abdulla Abdulla o’g’li"
          maxlength="100"
          autocomplete="off"
        />
        <!-- error message TODO:error message chiqazish-->
        <div class="error-message text-[red]" v-if="v$.name.$model.$error">
          Ism-sharifingizni kiriting!
        </div>
      </div>

      <div class="font-['Rubik'] mb-[28px]">
        <label
          for="tel"
          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
          >Telefon raqamingiz</label
        >
        <!-- TODO:faqat digit kiritilsin -->
        <input
          id="tel"
          v-model="tel"
          :class="{ 'has-error': v$.tel.$error }"
          name="tel"
          class="form__input block max-w-[586px] w-[100%] py-[12px] px-[16px] rounded-[6px]"
          type="text"
          placeholder="+998 00 000-00-00"
          autocomplete="off"
        />
      </div>

      <label
        class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
        >To‘lov summasi</label
      >
      <div
        class="sponsors-payment-sum flex text-center gap-[15px] w-[100%] flex-wrap mb-[28px]"
      >
        <div
          class="flex justify-between flex-wrap"
          v-for="item in amountData"
          :key="item.id"
        >
          <label
            :for="'input' + item.id"
            class="radio w-[185px] border-[#2E5BFF] cursor-pointer"
          >
          <!-- TODO:yoki summani olsin yoki BOSHQA dagi summani => digit bulishi kere -->
            <input
              class="input-active"
              v-model="inputValue"
              :id="'input' + item.id"
              name="sum"
              type="radio"
              :value="'input' + item.id"
            />
            <div
              class="click flex justify-center items-center flex-wrap p-[19px]"
            >
              <span class="flex flex-nowrap justify-around items-center">
                <span
                  class="money font-medium text-[18px] leading-[21px] uppercase text-[#2E384D] mr-[4px]"
                  >{{ item.sum }}</span
                >
                <span
                  class="sum text-[12px] leading-[18px] uppercase text-[#2E5BFF]"
                  >UZS</span
                >
              </span>
            </div>
          </label>
        </div>
      </div>

      <transition>
        <!-- TODO:faqat son qabul qilishi kere -->
        <div class="font-['Rubik'] mb-[28px]" v-if="inputValue == 'input20'">
          <input
            name="sum"
            v-model="sum"
            :class="{ 'has-error': v$.sum.$error }"
            class="form__input block max-w-[586px] w-[100%] py-[12px] px-[16px] rounded-[6px]"
            type="text"
            placeholder=""
          />
        </div>
      </transition>

      <div class="send-button">
         <!-- @click="sentSuccessfully = true" -->
         <!-- TODO:Successful componentni qanday chaqirib olsa buladi? -->
        <button
          button="submit"
          class="btn-primary bg-[#2E5BFF] rounded-[6px] p-[14px] w-[100%] font-medium text-[15px] leading-[21px] text-center text-[#FFFFFF]"
        >
          Yuborish
        </button>
      </div>
    </form>

    <div v-else-if="sentSuccessfully === true">
      <Successful />
    </div>
  </div>
</template>

<script>
import Successful from "@/components/Mainpage/Successful.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  components: {
    Successful,
  },

  data() {
    return {
      inputValue: false,
      isHidden: false,
      sentSuccessfully: false,
      name: "",
      tel: "",
      sum: "",

      amountData: [
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
          id: 20,
          sum: "Boshqa",
        },
      ],
    };
  },
  // Doim data dan tashqarida buladi setup va validations
  setup: () => ({ v$: useVuelidate() }),

  validations() {
    return {
      name: { required },
      tel: { required },
      sum: { required },
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // sentSuccessfully = true
      }
    },
  },
};
</script>

<style>
.individuals-form .radio {
  width: 185px;
  border: 2px solid #e0e7ff;
  border-radius: 5px;
  position: relative;
}

.input-active {
  display: none;
}
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

.form__input {
  background: rgba(224, 231, 255, 0.2);
  border: 1px solid #e0e7ff;
}

.form__input[placeholder] {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(46, 56, 77, 0.35);
}

/* Validation styles */

.has-error {
  border: 1px solid red;
}
/* ************************************ */

.el-tabs__header {
  width: 100% !important;
  margin-bottom: 0 !important;
}

.el-tabs__item.is-top {
  border-radius: 6px;
  color: rgba(51, 102, 255, 0.6);
}
.el-tabs__active-bar {
  height: 0 !important;
  background: 0 !important;
  width: 0;
}
.tabs .el-tabs--top .el-tabs__item.is-top {
  width: 100%;
  border: 1px solid #e0e7ff;
}
.el-tabs__nav {
  width: 50% !important;
}
.individuals-form .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  width: 293px !important;
  border-radius: 6px 0 0 6px;
  text-align: center;
}

.individuals-form .el-tabs--top .el-tabs__item.is-top:last-child {
  width: 293px !important ;
  border-radius: 0 6px 6px 0;
  text-align: center;
}
</style>
