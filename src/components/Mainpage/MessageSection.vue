<template lang="">
        <div class="message-section w-[45%] pt-[67px] pl-[72px] ">
          <div class="message-section__inner">
            <div class="">
              <p
                class="message-section__text mb-[24px] z-[2] font-['SF Pro Display']  font-medium text-[20px] leading-[30px] text-justify text-[#28293D]"
              >
                Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi.
                Ayni oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib
                qoʻymaslik kerak.
              </p>
              <div class="flex items-center">
                <img
                  class="mr-[17px] rounded-[16px]"
                  src="@/static/img/president.jpg"
                  width="55"
                />
                <div class="justify-between">
                  <p class="mb-[4px] z-[6] font-['SF Pro Text'] font-semibold text-[17px] leading-[26px] text-justify text-[#000]" >
                    Shavkat Mirziyoyev
                  </p>
                  <span class="font-['SF Pro Text'] font-normal text-[14px] leading-[21px] text-center text-[#86868B]" >
                    O‘zbekiston Respublikasi Prezidenti
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    
}
</script>
<style >
    
.message-section__inner {
  background-image: url("@/static/img/apostroph-top.svg"), url("@/static/img/apostroph-bottom.svg");
  background-repeat: no-repeat;
  background-position: left -20px top -18px, right -30px bottom 90px; 
  /* TODO:kurinmayapti  */
 
}

</style>