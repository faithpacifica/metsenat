<template>
<HeaderTop />

<div class="py-[30px] bg-[#fff] z-[10]">
    <div class="container flex justify-start flex-wrap">
        <router-link to="/sponsors" class="mr-[16px]">
            <!-- @click="$router.go(-1)" -->
            <img class="cursor-pointer" src="@/static/img/arrow-left.svg" width="28" height="28" />
        </router-link>
        <span class="mr-[12px] font-['SF Pro Display'] font-bold text-[24px] leading-[28px] text-[#28293D]">Ishmuhammedov Aziz Ishqobilovich</span>
        <span class="block font-['Rubik'] text-[12x] leading-[14px] text-[#00CF83] py-[6px] px-[12px] bg-[#DDFFF2] rounded-[5px]">Tasdiqlangan</span>
    </div>
</div>

<div class="single-sponsor-content pt-[40px] bg-[#E5E5E5] flex grow h-auto">
    <div class="container">
        <div class="about-sponsor mx-auto font-['Rubik'] max-w-[793px] w-[100%] bg-[#fff] py-[24px] px-[32px] rounded-[12px]">
            <header class="flex justify-between items-center mb-[26px]">
                <h3 class="m-0 font-['SF Pro Text'] font-medium text-[24px] leading-[28px] text-[#28293D]">
                    Homiy haqida
                </h3>

                <!-- EDIT SPONSOR BUTTON -->
                <button type="button" class="btn flex items-center bg-[#EDF1FD] rounded-[5px] py-[12.5px] pl-[36px] pr-[32px]" @click="dialogTableVisible = true">
                    <img class="mr-[17px]" src="@/static/img/edit.svg" width="24" height="24" /><span class="font-medium text-[14px] leading-[17px] text-[#3365FC]">Tahrirlash
                    </span>
                </button>
                <!-- TODO: -->
                <el-dialog v-model="dialogTableVisible" title="Tahrirlash" custom-class='custom-dialog' class="single-sponsor-edit-modal  max-w-[586px] w-[100%] rounded-[12px]">
                    <div class="">
                        <div class="single-sponsor-edit__tabs mt-[28px]">
                            <el-tabs v-model="activeName" class="demo-tabs edit-modal" @tab-click="handleClick">
                                <el-tab-pane class="lg:w-[265px] sm:w-[50%] edit-modal__item" label="JISMONIY SHAXS" name="individuals">
                                    <!-- Form -->
                                    <div class="form-div">
                                        <form class="single-sponsor-edit__form" action="#" method="post">
                                        <div class="edit__form__input-wrapper font-['Rubik'] mb-[28px] text-left">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">
                                                F.I.Sh. (Familiya Ism Sharifingiz)
                                            </label>
                                            <input class="form__input block w-[100%] px-[16px] rounded-[6px]" type="text" placeholder="Abdullayev Abdulla Abdulla o’g’li" />
                                            <!-- py-[12px] TODO:bazida ishlab ishlamiy qovotti -->
                                        </div>
                                        <div class="edit__form__input-wrapper font-['Rubik'] mb-[28px] text-left">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">Telefon raqam</label>
                                            <input class="form__input block w-[100%] px-[16px] rounded-[6px]" type="text" placeholder="+998 00 000-00-00" />
                                            <!-- py-[12px]  TODO:bazida ishlab ishlamiy qovotti-->
                                        </div>
                                        <div class="edit__form__input-wrapper font-['Rubik'] mb-[28px] text-left flex flex-col">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">Holati</label>
                                            <!-- Select -->
                                            <el-select v-model="value" placeholder="Tasdiqlangan">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                                            </el-select>
                                        </div>
                                        <div class="edit__form__input-wrapper font-['Rubik'] mb-[28px] text-left flex flex-col">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">Homiylik summasi</label>
                                            <!-- Select -->
                                            <el-select v-model="value" placeholder="30 000 000 UZS">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                                            </el-select>
                                        </div>
                                        <div class="edit__form__input-wrapper font-['Rubik'] mb-[28px] text-left flex flex-col">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">To'lov turi</label>
                                            <!-- Select -->
                                            <el-select v-model="value" placeholder="Pul o‘tkazmalari">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                                            </el-select>
                                        </div>

                                        <div class="single-sponsor-edit-modal flex items-center justify-end w-[100%] mt-[28px]">
                                            <button button="submit" class="btn-primary bg-[#2E5BFF] rounded-[6px] pl-[35px] pr-[32px] py-[9px] font-medium text-[15px] leading-[21px] text-center text-[#FFFFFF]">
                                                <img class="mr-[13px] inline" src="@/static/img/save-logo.svg" width="18" height="18" />
                                                Saqlash
                                            </button>
                                        </div>
                                    </form>
                                    </div>
                                    
                                </el-tab-pane>
                                <!-- ------------------------------------------------------------------------------ -->
                                <el-tab-pane class=" edit-modal__item max-w-[530px]" label="YURIDIK SHAXS" name="entities">
                                    <div class="form-div">
                                          <!-- Form -->
                                    <form class="single-sponsor-edit__form text-left" action="#" method="post">
                                        <div class="font-['Rubik'] mb-[28px]">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">
                                                F.I.Sh. (Familiya Ism Sharifingiz)
                                            </label>
                                            <input class="form__input block w-[100%] px-[16px] rounded-[6px]" type="text" placeholder="Abdullayev Abdulla Abdulla o’g’li" maxlength="100" />
                                        </div>
                                        <div class="font-['Rubik'] mb-[28px]">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">Telefon raqam</label>
                                            <input class="form__input block w-[100%] px-[16px] rounded-[6px]" type="text" placeholder="+998 00 000-00-00" />
                                        </div>

                                        <div class="font-['Rubik'] mb-[28px] text-left flex flex-col">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">Holati</label>
                                            <!-- Select -->
                                            <el-select class="w-[100%] max-w-[530px]" v-model="value" placeholder="Tasdiqlangan">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                                            </el-select>
                                        </div>
                                        <div class="font-['Rubik'] mb-[28px] text-left flex flex-col">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">Homiylik summasi</label>
                                            <!-- Select -->
                                            <el-select class="w-[100%] max-w-[530px]" v-model="value" placeholder="30 000 000 UZS">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                                            </el-select>
                                        </div>
                                        <div class="font-['Rubik'] mb-[28px] text-left flex flex-col">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">To'lov turi</label>
                                            <!-- Select -->
                                            <el-select class="w-[100%] max-w-[530px]" v-model="value" placeholder="Pul o‘tkazmalari">
                                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                                            </el-select>
                                        </div>

                                        <div class="font-['Rubik'] mb-[28px]">
                                            <label class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]">
                                                Tashkilot nomi
                                            </label>
                                            <input class="form__input block w-[100%] max-w-[530px] px-[16px] rounded-[6px]" type="text" placeholder="Orient Group" maxlength="100" />
                                        </div>
                                        <div class="single-sponsor-edit-modal flex items-center justify-end w-[100%] mt-[28px]">
                                            <button button="submit" class="btn-primary bg-[#2E5BFF] rounded-[6px] pl-[35px] pr-[32px] py-[9px] font-medium text-[15px] leading-[21px] text-center text-[#FFFFFF]">
                                                <img class="mr-[13px] inline" src="@/static/img/save-logo.svg" width="18" height="18" />
                                                Saqlash
                                            </button>
                                        </div>
                                    </form> 
                                    </div>
                                 
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </el-dialog>
            </header>

            <div class="flex mb-[24px]">
                <div class="avatar-wrapper rounded-[6px] py-[16px] px-[18px] mr-[20px]">
                    <img src="@/static/img/sponsor-avatar.png" />
                </div>
                <p class="w-[165px] m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[#212121]">
                    Ishmuhammedov Aziz Ishqobilovich
                </p>
            </div>
            <div class="flex flex-wrap">
                <div class="mr-[227px]">
                    <p class="m-0 mb-[12px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase">
                        telefon raqam
                    </p>
                    <p class="m-0 font-medium whitespace-nowrap font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]">
                        +998 99 973-72-60
                    </p>
                </div>
                <div>
                    <p class="m-0 mb-[12px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase">
                        Homiylik summasi
                    </p>
                    <p class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]">
                        30 000 000 UZS
                    </p>
                </div>
            </div>
            <!--If Organizations -->
            <div class="mt-[24px] flex flex-col justify-start items-start">
                <p class="m-0 mb-[12px] font-medium font-['Rubik'] text-[12px] leading-[14px] text-[#B5B5C3] tracking-[1.125px] uppercase">
                    Tashkilot nomi
                </p>
                <p class="m-0 font-medium font-['Rubik'] text-[16px] leading-[21px] text-[ #212121] tracking-[-0.01em]">
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
    props: {
        tableData: {
            type: Array,
            required: true,
        },
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
    padding-bottom: 400px;
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

.about-sponsor .form__input {
    background: rgba(224, 231, 255, 0.2);
    border: 1px solid #e0e7ff;
    box-sizing: border-box;
    border-radius: 6px;
}
</style>

<style >
.edit-modal .el-tabs__item {
    width:265px !important;
    height: 100%;
}
.edit-modal .el-tabs__nav-scroll {
      border: 2px solid #E0E7FF !important;
      border-radius:6px;
      margin-bottom: 28px;
}

.edit-modal .el-tabs__nav{
    margin:0 !important;
}
.edit-modal .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    border:12px 0 0 12px;
    width: 50%;
    
}

.edit-modal .el-tabs--top .el-tabs__item.is-top:last-child {
    border:0 12px 12px 0;
    width: 50%;
} 

.custom-dialog {
    min-width: 320px;
    border-radius: 12px;
    max-width: 586px;
}

.form-div {
    border:1px solid red;
}



@media screen and (max-width:640px){

}
/* .el-dialog__body {
    padding: 0;
} */
/* 
.single-sponsor-content .el-tabs--top .el-tabs__item.is-top:last-child {
    max-width: 265px;
    width: 100%;
}

.single-sponsor-content .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    max-width: 265px;
    width: 100%;
}

.single-sponsor-edit-modal .el-tabs__item {
    border: 2px solid #e0e7ff !important;
}

.single-sponsor-edit-modal {
    min-width: 320px !important;
    border-radius: 12px !important;
}

.single-sponsor-edit-modal #pane-individuals,
#pane-entities {
    max-width: 530px !important;
    width: 100%;
}

.single-sponsor-content .el-dialog {
    width: 100% !important;
    max-width: 586px !important;
    border-radius: 12px;
    padding: 28px 32px;
}

.el-dialog__header {
    padding: 0;
    text-align: left;
    padding-bottom: 28px;
}

.single-sponsor-edit-modal .el-dialog {
    min-width: 320px !important;
    border-radius: 12px !important;
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
} */
</style>
