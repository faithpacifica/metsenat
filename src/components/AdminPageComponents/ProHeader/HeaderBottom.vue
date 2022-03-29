<template lang="">
    <div class=" py-[24px] bg-[#fff] z-[10]">
        <div class="container flex justify-between ">
            <ProTabs/>
            
            <div class="flex">
                <span class="input-search-wrapper relative z-[1]">
                    <svg  width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="#B1B1B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.5 17.5L12.5 12.5" stroke="#B1B1B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <input class="header-bottom__search relative mr-[20px] w-[284px] bg-[#E8E8E8] rounded-[5px] py-[11px] px-[38px]" type="search" placeholder="Izlash">

                </span>
                
                <!-- FILTER BUTTON-->
                <button  type="button" class="btn flex items-center inline-block bg-[#EDF1FD] rounded-[5px] px-[33px]"
                  @click="showModal"
                >
                    <img class="mr-[11px]" src="@/static/img/filter.svg" width="13" height="13">
                    <span class="font-['SF Pro Text'] font-medium text-[14px] leading-[24px] text-[#3365FC]">Filter</span>   
                </button>
                <SingleSponsorModal 
                     v-show="isModalVisible"
                     @close="closeModal"
                />         
            </div>
        </div>
    </div>
</template>

<script>
import ProTabs from "@/components/AdminPageComponents/ProHeader/ProTabs.vue"
import SingleSponsorModal from '@/components/AdminPageComponents/SingleSponsorModal.vue';

export default {
    components:{
        ProTabs,
        SingleSponsorModal
    },
     data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
};
</script>

<style scoped>
.input-search-wrapper svg {
        position:absolute;
        width:20px;
        height:20px;
        top: 11px;
        left:12.5px;
        z-index: 500;
}

    .header-bottom__search::placeholder{
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #B1B1B8;
    }
</style>