<template lang="">
<div class="pro-tabs">
    <ul class=" pro-tabs__list  max-w-[580px] flex h-[40px] rounded-[6px] font-['Rubik'] font-medium text-[12px]">
        <li class="pro-tabs__item  max-w-[33.333%]  text-[#85A3FF] ">
            <!-- ACTIVE TODO:not working -->
            <router-link class="pro-tabs__link flex align-center leading-[12px] py-[12px] xl:px-[55px] lg:px-[30px] md:px-[20px] sm:px-[20px] uppercase tracking-[1.13px] " to="/dashboard/statistics">
                DASHBOARD
            </router-link>
        </li>
        <li class=" pro-tabs__item  max-w-[33.333%] text-[#85A3FF] ">
            <router-link class="pro-tabs__link flex align-center text-center   py-[12px]  xl:px-[55px] lg:px-[30px] md:px-[20px] sm:px-[20px] leading-[12px] uppercase tracking-[1.13px]" to="/sponsors">
                HOMIYLAR
            </router-link>
        </li>
        <li class="pro-tabs__item  max-w-[33.333%]  text-[#85A3FF] ">
            <router-link class="pro-tabs__link flex align-center  leading-[12px] uppercase  py-[12px]  xl:px-[55px] lg:px-[30px] md:px-[20px] sm:px-[20px] tracking-[1.13px]" to="/students">
                TALABALAR
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

}
</script>

<style scoped>
.pro-tabs__item .router-link-exact-active {
    background-color: #3366FF;
    color: #fff !important;
    border: #3366FF 1px solid;
}

/* TODO: active bulganda border ni tugirlash */
.pro-tabs__item:nth-child(1) {
    border-radius: 6px 0px 0px 6px;
}

.pro-tabs__item:nth-child(1) .router-link-exact-active {
    border-radius: 6px 0px 0px 6px;
}

.pro-tabs__item:nth-child(2) {
    border-radius: 0px;
}
.pro-tabs__item:nth-child(2) .router-link-exact-active{
    border-radius: 0px;
}

.pro-tabs__item:nth-child(3) {
    border-radius: 0px 6px 6px 0px;
}
.pro-tabs__item:nth-child(3) .router-link-exact-active {
    border-radius: 0px 6px 6px 0px;
}

.pro-tabs__item {
    border: 1px solid #E0E7FF;
}

/* RESPONSIVE */
@media  (max-width: 767px) {
        .pro-tabs__list {
        margin-bottom: 10px;
    }
}

@media only screen and (min-width: 370px) and (max-width: 640px) {
    .pro-tabs__list {
        margin-bottom: 10px;
    }

    .pro-tabs__link {
        padding-left: 20px;
        padding-right: 20px;
    }
}
</style>
