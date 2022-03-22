<template>
  <div class="header-top fixed relative pt-[12px] pb-[12px] z-[20] ">
    <div class="container flex items-center justify-between flex-wrap">
        <router-link class="" to="/dashboard">
          <img src="@/static/img/pro-logo.svg" width="173" height="24" />
        </router-link>
        <div class="flex">
          <router-link
            class="flex items-center bg-[#F1F1F3] p-[4px] pl-[20px] rounded-[6px] mr-[43px]"
            to="/dashboard"
          >
            <span
              class="mr-[24px] font-'SF Pro Text' font-bold text-[13px] leading-[20px] text-[]"
              >Shohrux</span
            >
            <span class="bg-[#00AE69] rounded-[4px] pt-[8px] pb-[0px] px-[5px]">
              <img src="@/static/img/avatar.svg" />
            </span>
          </router-link>
          <button class="cursor-pointer">
              <img src="@/static/img/logout.svg" width="32" height="32">
          </button>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header-top {
  box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
}
</style>
