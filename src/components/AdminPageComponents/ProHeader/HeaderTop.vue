<template>
<div class="header-top fixed relative pt-[12px] pb-[12px] z-[20] ">
    <div class="container flex items-center justify-between flex-wrap">
        <router-link class="" to="/dashboard/statistics">
            <img class="proheader-logo xl:w-[100%] " src="@/static/img/pro-logo.svg" width="173" height="24" />
        </router-link>
        <div class="avatar flex">
            <router-link class="avatar-wrapper flex items-center bg-[#F1F1F3] p-[4px] pl-[20px] rounded-[6px] xl:mr-[43px] lg:mr-[30px] md:mr-[20px] " to="/dashboard/statistics">
                <span class=" font-'SF Pro Text' font-bold text-[13px] leading-[20px] ">Shohrux</span>
                <span class="avatar__name bg-[#00AE69] rounded-[4px] ml-[24px] pt-[8px] pb-[0px] px-[5px]">
                    <img class="avatar-img" src="@/static/img/avatar.svg" />
                </span>
            </router-link>
            <!-- LOGOUT BUTTON -->
            <button class="logout-wrapper cursor-pointer">
                <img src="@/static/img/logout.svg" width="32" height="32">
            </button>

        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>

<style>
.header-top {
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
}

/* RESPONSIVE */

@media only screen and (min-width: 370px) and (max-width: 767px) {
    .proheader-logo{
        max-width:70%;
    }

    .avatar-wrapper {
        padding: 0 0 0  10px;
    }

    .avatar__name{
      margin-left: 10px;

    }

    .logout-wrapper{
      margin-left: 15px;
    }


}
</style>
