<template>
  <transition name="modal-fade">
    <div class="edit-modal modal-backdrop z-[100]">
      <div
        class="modal edit-modal w-[586px] p-[28px] rounded-[12px]"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header font-['SF Pro Display'] font-bold text-[24px] leading-[28px] text-[#28293D]"
          id="modalTitle"
        >
          <div class="header__inner mb-[28px]">
            <slot name="header"> Tahrirlash </slot>
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

        <!-- Form -->
        <form class="form w-[530px] pt-[28px]" action="#" method="post">
          <div class="font-['Rubik'] mb-[28px] text-left">
            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
            >
              F.I.Sh. (Familiya Ism Sharifingiz)
            </label>
            <input
              class="form__input block w-[100%] px-[16px] py-[12px] rounded-[6px] w-[100%]"
              type="text"
              placeholder="Abdullayev Abdulla Abdulla o’g’li"
            />
          </div>

          <div class="font-['Rubik'] mb-[28px] text-left">
            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >Telefon raqam</label
            >
            <input
              class="form__input block w-[100%] px-[16px] py-[12px] rounded-[6px] w-[100%]"
              type="text"
              placeholder="+998 00 973-72-60"
            />
          </div>

          <div class="font-['Rubik'] mb-[28px] text-left flex flex-col">
            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >OTM</label
            >

            <el-select v-model="value" disabled placeholder="O’zbekiston Davlat Jahon Tillari Universiteti">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="font-['Rubik'] mb-[28px] text-left flex flex-col">
            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >Kontrakt miqdori</label
            >
            <input
              class="form__input block w-[100%] px-[16px] py-[12px] rounded-[6px] w-[100%]"
              type="text"
              placeholder="30 000 000 UZS"
            />
          </div>

          <div  class="save-button flex items-center justify-end w-[100%] mt-[28px]" >
            <button
              button="submit"
              class="btn-primary bg-[#2E5BFF] rounded-[6px] pl-[35px] pr-[32px] py-[9px] font-medium text-[15px] leading-[21px] text-center text-[#FFFFFF]"
            >
              <img
                class="mr-[13px] inline"
                src="@/static/img/save-logo.svg"
                width="18"
                height="18"
              />
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {},
  data() {
    return {
     
    };
  },
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
    handleClick(tab, event) {
      console.log(tab, event);
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

<style scoped>
.edit-modal {
}

.edit-modal.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
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
