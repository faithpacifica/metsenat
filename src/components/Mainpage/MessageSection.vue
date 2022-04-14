<template lang="">
<div class="message-section  ">
    <div class="message-section__inner pt-[67px] xl:pl-[72px] sm:pl-[100px] ">
        <div class="">
            <p class="message-section__text mb-[24px] z-[2] font-['SF Pro Display']  font-medium text-[20px] md:text-[18px] sm:text-[16px]  leading-[30px] md:leading-[22px] sm:leading-[20px] text-justify text-[#28293D]">
                Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi.
                Ayni oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib
                qoʻymaslik kerak.
            </p>
            <div class="flex items-center">
                <img class="mr-[17px] rounded-[16px]" src="@/static/img/prezident.jpg" width="55" />
                <div class="justify-between">
                    <p class="mb-[4px] z-[6] font-['SF Pro Text'] font-semibold text-[17px] leading-[26px] text-justify text-[#000]">
                        Shavkat Mirziyoyev
                    </p>
                    <span class="font-['SF Pro Text'] font-normal text-[14px] leading-[21px] text-center text-[#86868B]">
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

<style>
.message-section {
    background-image: url("@/static/img/apostroph-top.svg"), url("@/static/img/apostroph-bottom.svg");
    background-repeat: no-repeat;
    background-position: left 40px top 50px, right 0px top 140px;
}

/* Responsive */

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  .message-section {
      background-position: left 80px top 40px, right 0px top 140px;
  }

}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .message-section {
      background-position: left 65px top 40px, right 0px top 180px;
  }

}
@media only screen and (min-width: 640px) and (max-width: 767px) {
    .main{
        padding:20px;
    }
  .message-section {
      background-position: left 0px top 5px, right 0px top 100px;
  }
  .message-section__inner{
      padding:40px 20px;
  }

}

@media only screen and (min-width: 370px) and (max-width: 639px) {
  .message-section {
      background-position: left 0px top 10px, right 0px top 120px;
  }
    .message-section__inner{
      padding:50px;
  }
  .message-section__text{
      font-size:16px;
      line-height:20px;
  }

}
@media only screen and (min-width: 320px) and (max-width: 369px) {
  .message-section {
      background-position: left 0px top 0px, right 0px top 80px;
  }
 .message-section__text{
      font-size:15px;
      line-height:18px;
  }
    .message-section__inner{
      padding:20px;
  }
}

</style>
