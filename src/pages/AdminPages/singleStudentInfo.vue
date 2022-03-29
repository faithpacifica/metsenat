<template>
  <HeaderTop />

  <div class="py-[30px] bg-[#fff] z-[10]">
    <div class="container flex items-center justify-between flex-wrap">
      <div class="flex">
        <router-link to="/students" class="mr-[16px]">
          <!-- @click="$router.go(-1)" -->
          <img
            class="cursor-pointer"
            src="@/static/img/arrow-left.svg"
            width="28"
            height="28"
          />
        </router-link>
        <span
          class="mr-[12px] font-['SF Pro Display'] font-bold text-[24px] leading-[28px] text-[#28293D] text-left"
          >Soliyeva Charos Ahmadovna
        </span>
      </div>

      <div class="add-button-wrapper flex justify-end">
        <button
          class="flex py-[9px] pl-[36px] pr-[32px] bg-[#EDF1FD] rounded-[5px]"
          @click="sponsorAddModal = true"
        >
          <img
            class="mr-[14px] block"
            src="@/static/img/plus-blue.svg"
            width="24"
            height="24"
          />
          <span
            class="font-['SF Pro Text'] block text-[#3365FC] font-medium text-[14px] leading-[24px] text-center"
            >Homiy qo'shish</span
          >
        </button>
      </div>
    </div>
  </div>

  <div
    class="single-student-content pt-[40px] bg-[#E5E5E5] flex flex-col h-screen"
  >
    <!-- x -->
    <div class="container mb-[40px]">
      <div
        class="about-student mx-auto font-['Rubik'] w-[793px] bg-[#fff] py-[24px] px-[32px] rounded-[12px]"
      >
        <header class="flex justify-between items-center mb-[26px]">
          <h3
            class="m-0 font-['SF Pro Text'] font-medium text-[24px] leading-[28px] text-[#28293D]"
          >
            Talaba haqida
          </h3>

          <!-- EDIT BUTTON -->
          <button
            type="button"
            class="btn flex items-center inline-block bg-[#EDF1FD] rounded-[5px] py-[12.5px] pl-[36px] pr-[32px]"
            @click="showModal"
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

          <EditStudentModal v-show="isModalVisible" @close="closeModal" />
        </header>

        <div class="relative z-[5]">
          <button
            class="block mb-[26.5px] py-[2px] px-[11px] bg-[#E5EBFF] font-['Rubik'] font-medium text-[12px] leading-[14px] uppercase tracking-[1.125px] text-[#3366FF]"
          >
            Asosiy ma'lumotlar
          </button>
          <hr
            class="bg-[ #E4E8F0] height-[1px] w-[100%] absolute top-[9px] z-[-1]"
          />
        </div>

        <div class="flex mb-[24px]">
          <div
            class="avatar-wrapper rounded-[6px] py-[16px] px-[18px] mr-[20px]"
          >
            <img src="@/static/img/sponsor-avatar.png" />
          </div>
          <p
            class="w-[165px] m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[#212121]"
          >
            Soliyeva Charos Ahmadovna
          </p>
        </div>

        <div class="mb-[34.5px] text-left">
          <p
            class="m-0 mb-[8px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase"
          >
            telefon raqam
          </p>
          <p
            class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]"
          >
            +998 99 973-72-60
          </p>
        </div>

        <div class="relative z-[5]">
          <button
            class="block mb-[26.5px] py-[2px] px-[11px] bg-[#E5EBFF] font-['Rubik'] font-medium text-[12px] leading-[14px] uppercase tracking-[1.125px] text-[#3366FF]"
          >
            O‘qish joyi haqida ma’lumot
          </button>
          <hr
            class="bg-[ #E4E8F0] height-[1px] w-[100%] absolute top-[9px] z-[-1]"
          />
        </div>
        <div class="flex flex-wrap mb-[24px]">
          <div class="flex flex-wrap flex-col text-left mr-[28px] w-[350px]">
            <p
              class="mb-[8px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase"
            >
              OTM
            </p>
            <p
              class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]"
            >
              O’zbekiston davlat jahon tillari universiteti
            </p>
          </div>

          <div class="flex flex-col justify-start items-start">
            <p
              class="m-0 mb-[8px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase"
            >
              Talabalik turi
            </p>
            <p
              class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]"
            >
              Bakalavr
            </p>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="flex flex-wrap flex-col text-left mr-[28px] w-[350px]">
            <p
              class="mb-[8px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase"
            >
              Ajratilingan summa
            </p>
            <p
              class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]"
            >
              14 000 000 UZS
            </p>
          </div>

          <div class="flex flex-col justify-start items-start">
            <p
              class="m-0 mb-[8px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase"
            >
              Kontrakt miqdori
            </p>
            <p
              class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]"
            >
              30 000 000 UZS
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TALABAGA HOMIYLAR -->
    <div class="container">
      <div
        class="about-student mx-auto font-['Rubik'] w-[793px] bg-[#fff] py-[24px] px-[32px] rounded-[12px]"
      >
        <header class="flex justify-between items-center mb-[26px]">
          <h3
            class="m-0 font-['SF Pro Text'] font-medium text-[24px] leading-[28px] text-[#28293D]"
          >
            Talabaga homiylar
          </h3>

          <div class="add-button-wrapper flex justify-end">
            <button
              class="flex py-[9px] pl-[36px] pr-[32px] bg-[#EDF1FD] rounded-[5px]"
              @click="sponsorAddModal = true"
            >
              <img
                class="mr-[14px] block"
                src="@/static/img/plus-blue.svg"
                width="24"
                height="24"
              />
              <span
                class="font-['SF Pro Text'] block text-[#3365FC] font-medium text-[14px] leading-[24px] text-center"
                >Homiy qo'shish</span
              >
            </button>
            <!-- ADD SPONSOR MODAL -->
            <el-dialog
              v-model="sponsorAddModal"
              title="Homiylarni qo'shish"
              class="sponsor-add-modal w-[586px] bordered-[12px] font-bold text-[24px] leading-[28px] text-[#28293D]"
            >
              <el-form :model="form">
                <hr class="height-[1px] bg-[#F5F5F7] my-[28px]" />

                <el-form-item
                  label="F.I.Sh. (Familiya Ism Sharifingiz)"
                  placeholder=""
                >
                  <el-select placeholder="Homiyni tanlang">
                    <el-option label="" value="" />
                    <el-option label="" value="" />
                  </el-select>
                </el-form-item>
                <el-form-item
                  label="Ajratilingan summa"
                  :label-width="formLabelWidth"
                  placeholder="12 000 000 UZS"
                >
                  <el-input autocomplete="off" />
                </el-form-item>
              </el-form>

              <hr class="height-[1px] bg-[#F5F5F7] my-[28px]" />
              <div
                class="save-button flex items-center justify-end w-[100%] mt-[28px]"
              >
                <button
                  button="submit"
                  class="btn-primary bg-[#2E5BFF] rounded-[6px] pl-[35px] pr-[32px] pt-[11px] pb-[10px] font-medium text-[15px] leading-[21px] text-center text-[#FFFFFF]"
                >
                  <img
                    class="mr-[13px] inline"
                    src="@/static/img/plus.svg"
                    width="24"
                    height="24"
                  />
                  Saqlash
                </button>
              </div>
            </el-dialog>
          </div>
        </header>

        <!-- TABLE OF SPONSORS -->
        <table
          class="sponsors-table GeneratedTable data-table font-['Rubik'] mb-[28px]"
        >
          <thead>
            <tr
              class="sponsor-data-table__heading flex justify-between whitespace-nowrap text-left items-left mb-[12px] text-[#B1B1B8] font-medium text-[12px] px-[16px] leading-[14px] uppercase tracking-[1.13px]"
            >
              <th class="w-[10px]">#</th>
              <th class="sponsor-name w-[230px]">f.i.sh.</th>
              <th class="w-[130px]">Ajratilgan summa</th>
              <th class="w-[64px]">Amallar</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="sponsor-data-table__content flex justify-between items-left bg-[#fff] mb-[12px] py-[14px] pl-[16px] rounded-[8px]"
              v-for="item in tableData"
              :key="item.number"
            >
              <td
                class="w-[10px] font-normal text-[15px] leading-[22px] text-left text-[#1D1D1F]"
              >
                {{ item.number }}
              </td>
              <td
                class="w-[230px] font-medium text-[15px] leading-[18px] text-[#1D1D1F] text-left"
              >
                {{ item.name }}
              </td>

              <td
                class="w-[132px] font-medium text-[14px] leading-[22px] text-left text-[#2E384D] whitespace-nowrap mr-[5px]"
              >
                {{ item.allocatedSum }}<span class="text-[#979797]">UZS</span>
              </td>

              <td class="cursor-pointer w-[64px]">
                <button @click="sponsorEditModal = true">
                  <img src="@/static/img/edit.svg" width="24" height="10" />
                </button>

                <!-- SPONSOR EDIT MODAL  -->
                <el-dialog
                  v-model="sponsorEditModal"
                  title="Homiylarni tahrirlash"
                  class="sponsor-edit-modal w-[586px] bordered-[12px] font-bold text-[24px] leading-[28px] text-[#28293D]"
                >
                  <el-form :model="form">
                    <hr class="height-[1px] bg-[#F5F5F7] my-[28px]" />

                    <el-form-item
                      label="F.I.Sh. (Familiya Ism Sharifingiz)"
                      placeholder=""
                    >
                      <el-select placeholder="Ishmuhammedov Aziz Ishqobilovich">
                        <el-option label="" value="" />
                        <el-option label="" value="" />
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="Ajratilingan summa"
                      :label-width="formLabelWidth"
                      placeholder="12 000 000 UZS"
                    >
                      <el-input autocomplete="off" />
                    </el-form-item>
                    <div
                      class="buttons-wrapper flex items-center justify-end w-[100%] mt-[28px] pt-[28px]"
                    >
                      <button
                        class="delete-button flex py-[9px] pl-[37px] pr-[32px] bg-[#FFECEB] rounded-[5px] mr-[16px]"
                      >
                        <img
                          class="mr-[14px] block"
                          src="@/static/img/icon-trash.svg"
                          width="24"
                          height="24"
                        />
                        <span
                          class="font-['SF Pro Text'] block text-[#FF4945] font-medium text-[14px] leading-[24px] text-center"
                          >Homiyni o‘chirish</span
                        >
                      </button>

                      <button
                        button="submit"
                        class="btn-primary bg-[#2E5BFF] rounded-[6px] pl-[35px] pr-[32px] pt-[11px] pb-[10px] font-medium text-[15px] leading-[21px] text-center text-[#FFFFFF]"
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
                  </el-form>
                </el-dialog>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "@/components/AdminPageComponents/ProHeader/HeaderTop.vue";
import EditStudentModal from "@/components/AdminPageComponents/EditStudentModal.vue";
export default {
  components: {
    HeaderTop,
    EditStudentModal,
  },
  data() {
    return {
      isModalVisible: false,
      sponsorAddModal: false,
      sponsorEditModal: false,

      tableData: [
        {
          number: 1,
          name: "Alimov Abror Xabibullayevich",
          allocatedSum: "30 000 000",
        },
        {
          number: 2,
          name: "Nodirov Bahodir Qobilovich",
          allocatedSum: "15 000 000",
        },
        {
          number: 3,
          name: "Ibragimov Sohib Mirfayozovich",
          allocatedSum: "30 000 000",
        },
      ],
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

<style>
.single-student-content {
  background-image: url("@/static/img/single-rocket-hat.png");
  padding-bottom: 1350px;
  text-align: center;
  background-repeat: no-repeat;
  background-position: bottom 0 center;
}
.about-student {
  border: 1px solid #ebeefc;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
}
.avatar-wrapper {
  background: linear-gradient(0deg, #eaecf0, #eaecf0);
  border: 1px solid #e0e7ff;
}

table.GeneratedTable {
  width: 100%;
  border-collapse: collapse;
}

table.GeneratedTable thead {
  background-color: transparent;
}

.sponsor-data-table__content {
  background-color: #fbfbfc;
  border: 1px solid rgba(46, 91, 255, 0.08);
  border-radius: 8px;
}
.sponsor-data-table__heading .sponsor-name {
  width: 230px !important;
}

.buttons-wrapper {
  border-top: 2px solid #f5f5f7;
}
/* ********************************************** */
.el-dialog {
  width: 586px;
  border-radius: 12px;
  padding: 28px;
}
.sponsor-add-modal.el-dialog__headerbtn {
  display: block !important;
  top: 20px !important;
  right: 10px !important;
}

.sponsor-edit-modal.el-dialog__headerbtn {
  display: none !important;
}

.el-dialog__header {
  padding: 0;
  text-align: left;
}
.el-dialog__title {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #28293d;
}

.el-dialog__body {
  padding: 0;
}

.el-select {
  width: 100%;
}

.el-form-item--default {
  flex-direction: column;
}
.el-form-item__label {
  text-align: left;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1.125px;
  text-transform: uppercase;
  color: #1d1d1f;
}
</style>
