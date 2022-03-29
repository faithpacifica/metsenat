<template>
  <HeaderTop />

  <div class="py-[30px] bg-[#fff] z-[10]">
    <div class="container flex justify-start flex-wrap">
      <router-link to="/sponsors" class="mr-[16px]">
        <!-- @click="$router.go(-1)" -->
        <img
          class="cursor-pointer"
          src="@/static/img/arrow-left.svg"
          width="28"
          height="28"
        />
      </router-link>
      <span
        class="mr-[12px] font-['SF Pro Display'] font-bold text-[24px] leading-[28px] text-[#28293D]"
        >Ishmuhammedov Aziz Ishqobilovich</span
      >
      <span
        class="block font-['Rubik'] text-[12x] leading-[14px] text-[#00CF83] py-[6px] px-[12px] bg-[#DDFFF2] rounded-[5px]"
        >Tasdiqlangan</span
      >
    </div>
  </div>

  <div class="single-sponsor-content pt-[40px] bg-[#E5E5E5] flex grow h-screen">
    <div class="container">
      <div
        class="about-sponsor mx-auto font-['Rubik'] w-[793px] bg-[#fff] py-[24px] px-[32px] rounded-[12px]"
      >
        <header class="flex justify-between items-center mb-[26px]">
          <h3
            class="m-0 font-['SF Pro Text'] font-medium text-[24px] leading-[28px] text-[#28293D]"
          >
            Homiy haqida
          </h3>

          <!-- EDIT SPONSOR BUTTON -->
          <button
            type="button"
            class="btn flex items-center inline-block bg-[#EDF1FD] rounded-[5px] py-[12.5px] pl-[36px] pr-[32px]"
            @click="dialogTableVisible = true"
          >
            <img
              class="mr-[17px]"
              src="@/static/img/edit.svg"
              width="24"
              height="24"
            /><span
              class="font-medium text-[14px] leading-[17px] text-[#3365FC]"
              >Tahrirlash
            </span>
          </button>
          <!-- TODO: -->
          <el-dialog
            v-model="dialogTableVisible"
            title="Tahrirlash"
            class="single-sponsor-edit-modal !w-[586px]"
          >
            <div class="">
              <div class="tabs mt-[28px]">
                <el-tabs
                  v-model="activeName"
                  class="demo-tabs edit-modal"
                  @tab-click="handleClick"
                >
                  <el-tab-pane
                    class="el-tabs__item edit-modal__item"
                    label="JISMONIY SHAXS"
                    name="individuals"
                  >
                    <!-- Form -->
                    <form class="form" action="#" method="post">
                      <div class="font-['Rubik'] mb-[28px] text-left">
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                        >
                          F.I.Sh. (Familiya Ism Sharifingiz)
                        </label>
                        <input
                          class="form__input block w-[100%] px-[16px] 
                    
                           rounded-[6px] w-[100%]"
                          type="text"
                          placeholder="Abdullayev Abdulla Abdulla o’g’li"
                        />
                              <!-- py-[12px] TODO:bazida ishlab ishlamiy qovotti -->
                      </div>
                      <div class="font-['Rubik'] mb-[28px] text-left">
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                          >Telefon raqam</label
                        >
                        <input
                          class="form__input block w-[100%] px-[16px] 
                         
                          rounded-[6px] w-[100%]"
                          type="text"
                          placeholder="+998 00 000-00-00"
                        />
                         <!-- py-[12px]  TODO:bazida ishlab ishlamiy qovotti-->
                      </div>
                      <div
                        class="font-['Rubik'] mb-[28px] text-left flex flex-col"
                      >
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                          >Holati</label
                        >
                        <!-- Select -->
                        <el-select
                          v-model="value"
                          disabled
                          placeholder="Tasdiqlangan"
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>
                      <div
                        class="font-['Rubik'] mb-[28px] text-left flex flex-col"
                      >
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                          >Homiylik summasi</label
                        >
                        <!-- Select -->
                        <el-select
                          v-model="value"
                          disabled
                          placeholder="30 000 000 UZS"
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>
                      <div
                        class="font-['Rubik'] mb-[28px] text-left flex flex-col"
                      >
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                          >To'lov turi</label
                        >
                        <!-- Select -->
                        <el-select
                          v-model="value"
                          disabled
                          placeholder="Pul o‘tkazmalari"
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>

                      <div
                        class="save-button flex items-center justify-end w-[100%] mt-[28px]"
                      >
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
                  </el-tab-pane>
                  <!-- ------------------------------------------------------------------------------ -->
                  <el-tab-pane
                    class="el-tabs__item edit-modal__item width-[530px]"
                    label="YURIDIK SHAXS"
                    name="entities"
                  >
                    <!-- Form -->
                    <form class="form text-left" action="#" method="post">
                      <div class="font-['Rubik'] mb-[28px]">
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                        >
                          F.I.Sh. (Familiya Ism Sharifingiz)
                        </label>
                        <input
                          class="form__input block w-[100%] px-[16px] rounded-[6px]"
                          type="text"
                          placeholder="Abdullayev Abdulla Abdulla o’g’li"
                          maxlength="100"
                        />
                      </div>
                      <div class="font-['Rubik'] mb-[28px]">
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                          >Telefon raqam</label
                        >
                        <input
                          class="form__input block w-[100%] px-[16px] rounded-[6px]"
                          type="text"
                          placeholder="+998 00 000-00-00"
                        />
                      </div>

                      <div
                        class="font-['Rubik'] mb-[28px] text-left flex flex-col"
                      >
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                          >Holati</label
                        >
                        <!-- Select -->
                        <el-select
                          class="w-[100%] max-w-[530px]"
                          v-model="value"
                          disabled
                          placeholder="Tasdiqlangan"
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>
                      <div
                        class="font-['Rubik'] mb-[28px] text-left flex flex-col"
                      >
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                          >Homiylik summasi</label
                        >
                        <!-- Select -->
                        <el-select
                          class="w-[100%] max-w-[530px]"
                          v-model="value"
                          disabled
                          placeholder="30 000 000 UZS"
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>
                      <div
                        class="font-['Rubik'] mb-[28px] text-left flex flex-col"
                      >
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                          >To'lov turi</label
                        >
                        <!-- Select -->
                        <el-select
                          class="w-[100%] max-w-[530px]"
                          v-model="value"
                          disabled
                          placeholder="Pul o‘tkazmalari"
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          />
                        </el-select>
                      </div>

                      <div class="font-['Rubik'] mb-[28px]">
                        <label
                          class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                        >
                          Tashkilot nomi
                        </label>
                        <input
                          class="form__input block w-[100%] max-w-[530px] px-[16px] rounded-[6px]"
                          type="text"
                          placeholder="Orient Group"
                          maxlength="100"
                        />
                      </div>
                      <div
                        class="save-button flex items-center justify-end w-[100%] mt-[28px]"
                      >
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
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-dialog>
        </header>

        <div class="flex mb-[24px]">
          <div
            class="avatar-wrapper rounded-[6px] py-[16px] px-[18px] mr-[20px]"
          >
            <img src="@/static/img/sponsor-avatar.png" />
          </div>
          <p
            class="w-[165px] m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[#212121]"
          >
            Ishmuhammedov Aziz Ishqobilovich
          </p>
        </div>
        <div class="flex flex-wrap">
          <div class="mr-[227px]">
            <p
              class="m-0 mb-[12px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase"
            >
              telefon raqam
            </p>
            <p
              class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]"
            >
              +998 99 973-72-60
            </p>
          </div>
          <div>
            <p
              class="m-0 mb-[12px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase"
            >
              Homiylik summasi
            </p>
            <p
              class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]"
            >
              30 000 000 UZS
            </p>
          </div>
        </div>
        <!--If Organizations -->
        <div class="mt-[24px] flex flex-col justify-start items-start">
          <p
            class="m-0 mb-[12px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase"
          >
            Tashkilot nomi
          </p>
          <p
            class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]"
          >
            Orient Group Corporation
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/components/AdminPageComponents/ProHeader/HeaderTop.vue";
import EditSponsorModal from "@/components/AdminPageComponents/EditSponsorModal.vue";

export default {
  components: {
    HeaderTop,
    EditSponsorModal,
  },
  data() {
    return {
      isModalVisible: false,
      dialogTableVisible: false,
      activeName: "individuals",
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.single-sponsor-content {
  background-image: url("@/static/img/single-rocket-hat.png");
  padding-bottom: 900px;
  text-align: center;
  background-repeat: no-repeat;
  background-position: bottom 0 center;
}
.about-sponsor {
  border: 1px solid #ebeefc;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
}
.avatar-wrapper {
  background: linear-gradient(0deg, #eaecf0, #eaecf0);
  border: 1px solid #e0e7ff;
}
</style>

<style>
.el-dialog__body {
  border-top: 2px solid #f5f5f7;
  padding: 0;
}

.single-sponsor-content .tabs .el-tabs--top .el-tabs__item.is-top:last-child {
  max-width: 265px;
  width: 100%;
}
.single-sponsor-content .tabs .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
  max-width: 265px;
  width: 100%;
}

.single-sponsor-edit-modal.el-tabs__item {
  min-width: 530px !important;
  width: 100%;
}

#pane-individuals,
#pane-entities {
  max-width: 530px !important;
  width: 100%;
}

.single-sponsor-content .el-dialog {
  width: 586px !important;
  border-radius: 12px;
  padding: 28px 32px;
}

.el-dialog__header {
  padding: 0;
  text-align: left;
  padding-bottom: 28px;
}

.el-dialog__title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #28293d;
}

.el-dialog__headerbtn .el-dialog__close {
  top: 15px;
  right: 30px;
}

.el-dialog__close svg {
  height: 22px;
  width: 22px;
  font-size: 14px;
  color: #b2b7c1;
}
</style>
