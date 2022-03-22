<template lang="">
  <div class=" pt-[48px] pb-[300px] bg-[#E5E5E5] h-screen">
    <div class="container">
        <div class="sum-statistics w-[100%]  mb-[28px] flex justify-between"> 

          <div class="statistic-card flex w-[381px] p-[24px] bg-[#fff] rounded-[8px]">
              <div class="statistic-card__image-wrapper statistic-card_blue mr-[16px] py-[14px] px-[10px] rounded-[12px] ">
                <img class="statistic-card__img" src="@/static/img/money-blue.svg" width="28" height='20' >
              </div>
              <div>
                <small class="statistic-card__text mb-[6px] font-['Rubik'] text-[12px] leading-[12px] text-[#7A7A9D]">Jami to‘langan summa</small>
                <p class="statistic-card__amount font-['SF Pro Display'] mr-[6px] font-bold text-[20px] leading-[20px] text-[#2E384D]">1 684 325 000 <span class="currency text-[#B2B7C1]">UZS</span></p>
              </div>
          </div>

          <div class="statistic-card flex w-[381px] p-[24px] bg-[#fff] rounded-[8px]">
              <div class="statistic-card__image-wrapper statistic-card_gold mr-[16px] py-[14px] px-[10px] rounded-[12px] ">
                <img class="statistic-card__img" src="@/static/img/money-gold.svg" width="28" height='20' >
              </div>
              <div>
                <small class="statistic-card__text mb-[6px] font-['Rubik'] text-[12px] leading-[12px] text-[#7A7A9D]">Jami so‘ralgan summa</small>
                <p class="statistic-card__amount font-['SF Pro Display'] mr-[6px] font-bold text-[20px] leading-[20px] text-[#2E384D]">14 098 530 000 <span class="currency text-[#B2B7C1]">UZS</span></p>
              </div>
          </div>

          <div class="statistic-card flex w-[381px] p-[24px] bg-[#fff] rounded-[8px]">
              <div class="statistic-card__image-wrapper statistic-card_orange mr-[16px] py-[14px] px-[10px] rounded-[12px] ">
                <img class="statistic-card__img" src="@/static/img/money-orange.svg" width="28" height='20' >
              </div>
              <div>
                <small class="statistic-card__text mb-[6px] font-['Rubik'] text-[12px] leading-[12px] text-[#7A7A9D]">To‘lanishi kerak summa</small>
                <p class="statistic-card__amount font-['SF Pro Display'] mr-[6px] font-bold text-[20px] leading-[20px] text-[#2E384D]">12 414 205 000 <span class="currency text-[#B2B7C1]">UZS</span></p>
              </div>
          </div>
        </div>


        <img class="statistic-chart w-[1240px] h-[402px]" src="@/static/img/chart.jpg">
    </div>
  </div>
</template>
<script>

export default {
  components:{

  }
};
</script>

<style >
.statistic-card{
  border: 1px solid rgba(46, 91, 255, 0.08);
}

.statistic-card_blue{
  background-color: rgba(76, 111, 255, 0.1);
}

.statistic-card_gold{
  background-color:rgba(237, 199, 0, 0.1);
}

.statistic-card_orange{
  background-color:rgba(237, 114, 0, 0.1);
}

.statistic-chart{
  background-color: #FFFFFF;
  border: 1px solid rgba(46, 91, 255, 0.08);
  border-radius: 8px;
}
</style>