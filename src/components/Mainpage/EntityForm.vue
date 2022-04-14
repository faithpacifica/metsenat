<template>
  <!-- Form -->
  <div>
    <form
      v-if="sentSuccessfully === false"
      class="form entity-form cursor-auto max-w-[586px] w-[100%] mt-[28px]"
      id="entityForm"
      @submit.prevent="submitForm"
      action="#"
      method="post"
    >
      <div class="form-group font-['Rubik'] mb-[28px] relative">
        <label
          for="name"
          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
        >
          F.I.Sh. (Familiya Ism Sharifingiz)
        </label>
        <input
          id="name"
          v-model="name"
          class="form__input block max-w-[586px] w-[100%] py-[12px] px-[16px] rounded-[6px]"
          :class="{ 'has-error': v$.name.$error }"
          type="text"
          placeholder="Abdullayev Abdulla Abdulla o’g’li"
          maxlength="50"
          autocomplete="off"
        />
        <!-- error message -->
        <div
          class="error-message text-[red] absolute top-[0px] right-[0px]"
          v-if="v$.name.$error"
        >
          Ism-sharifingizni kiriting
        </div>
      </div>

      <div class="font-['Rubik'] mb-[28px] relative">
        <label
          for="tel"
          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
          >Telefon raqamingiz</label
        >
        <input
          id="tel"
          v-model="tel"
          v-mask="'+998(##)-###-##-##'"
          :class="{ 'has-error': v$.tel.$error }"
          name="tel"
          class="form__input block max-w-[586px] w-[100%] py-[12px] px-[16px] rounded-[6px]"
          type="text"
          placeholder="+998 00 000-00-00"
          autocomplete="off"
        />

        <!-- error message -->
        <div
          class="error-message text-[rgb(255,0,0)] absolute top-[0px] right-[0px]"
          v-if="v$.tel.$error"
        >
          Telefon raqamingizni kiriting:
        </div>
      </div>

      <label
        class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
        >To‘lov summasi</label
      >
      <div
        class="sponsors-payment-sum flex justify-center text-center relative gap-[15px] w-[100%] flex-wrap mb-[28px]"
      >
        <div
          class="flex justify-between flex-wrap"
          v-for="item in amountData"
          :key="item.id"
        >
          <label
            :for="'input2' + item.id"
            class="radio cursor-pointer w-[185px] border-[#2E5BFF]"
          >
            <input
              class="input-active form__input"
              :class="{ 'has-error': v$.sum.$invalid }"
              v-model="sum"
              :id="'input2' + item.id"
              name="sum"
              type="radio"
              :value="'input2' + item.id"
            />
            <div
              class="click flex justify-center items-center flex-wrap p-[20px]"
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

        <div class="flex justify-between flex-wrap">
          <!-- TODO:bu  input double checked da ishlayapti  -->

          <label :for="input200" class="radio w-[185px] border-[#2E5BFF]">
            <input
              class="input-active form__input cursor-pointer"
              v-model="sum"
              :id="input200"
              name="sum"
              type="radio"
            />
            <div
              class="click flex justify-center items-center flex-wrap p-[20px]"
              @click="input = !input"
            >
              <span class="flex flex-nowrap justify-around items-center">
                <span
                  class="money font-medium text-[18px] leading-[21px] uppercase text-[#2E384D] mr-[4px]"
                  >Boshqa</span
                >
                <span
                  class="sum text-[12px] leading-[18px] uppercase text-[#2E5BFF]"
                  >UZS</span
                >
              </span>
            </div>
          </label>
        </div>

        <!-- Qo'shimcha SUMMA kiritish uchun -->
        <transition>
          <div class="font-['Rubik'] mb-[28px] mt-[28px] w-[100%]" v-if="input">
            <input
              name="sum"
              v-model="otherSum"
              class="form__input block max-w-[586px] w-[100%] py-[12px] px-[16px] rounded-[6px]"
              :class="v$.sum.$error"
              type="text"
              placeholder="1 000 000"
               v-mask="'### ### ### ###'"
            />
          </div>
        </transition>

        <!-- error message -->
        <div
          class="error-message text-[red] absolute top-[-40px] right-[0px]"
          v-if="v$.sum.$error"
        >
          Summani tanlang!
        </div>
      </div>

      <div class="font-['Rubik'] mb-[28px] relative">
        <label
          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
        >
          Tashkilot nomi
        </label>
        <input
          class="form__input block w-[100%] py-[12px] px-[16px] rounded-[6px]"
          type="text"
          v-model="company"
          placeholder="Orient Group"
          maxlength="100"
          :class="v$.company.$error"
        />

        <!-- error message -->
        <div
          class="error-message text-[red] absolute top-[0px] right-[0px]"
          v-if="v$.company.$error"
          placeholder="Orient Group"
        >
          Tashkilot nomini kiriting
        </div>
      </div>

      <div class="send-button">
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
import { required , minLength} from "@vuelidate/validators";

export default {
  components: {
    Successful,
  },

  data() {
    return {
      sentSuccessfully: false,
      name: "",
      tel: '+998',
      sum: null,
      input: false,
      company: "",
        otherSum:'',

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
      ],
    };
  },

  setup: () => ({
    v$: useVuelidate(),
  }),

  validations() {
    return {
      name: {
        required,
      },
      tel: {
        required,
        minLength: minLength(18)
      },

      sum: {
        required,
        minLength: minLength(4)
      },
      company: {
        required,
      },
    };
  },

  methods: {
    submitForm() {
      this.v$.$validate();

      if (!this.v$.$error && ((this.sum!= '' && this.sum != 'on') || this.otherSum != '')) {
        console.log("no error!");
        this.sentSuccessfully = true;
      }
    },
  },
};
</script>

<style scoped>
.form__input:focus {
  border: 1px solid #2e5bff;
 
}

.entity-form .radio {
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
   color:#000;;
}

/* Validation styles */

.has-error {
  outline: 1px solid red;
}
</style>

<style>
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

.entity-form .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  width: 293px !important;
  border-radius: 6px 0 0 6px;
  text-align: center;
}

.entity-form .el-tabs--top .el-tabs__item.is-top:last-child {
  width: 293px !important;
  border-radius: 0 6px 6px 0;
  text-align: center;
}

.el-tabs__nav {
  width: 50% !important;
}

/* RESPONSIVE */
@media only screen and (min-width: 768px) and (max-width: 1239px) {
    .individuals-form .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        width: inherit !important;
        border-radius: 6px 0 0 6px;
        text-align: center;
    }
}

@media only screen and (min-width: 768px) and (max-width: 1239px) {
    .individuals-form .el-tabs--top .el-tabs__item.is-top:last-child {
        width: inherit !important;
        border-radius: 0 6px 6px 0;
        text-align: center;
    }
}

@media (max-width:1239px) {
    .radio{
        width:160px;
    }

    .click{
        padding:10px;
    }
}
</style>
