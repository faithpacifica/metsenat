<template lang="">
          <!-- Form -->
          <form class="form max-w-[586px] w-[100%]"  action="#" method="post">
            <div class="font-['Rubik'] mb-[28px]">
              <label
                class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >
                F.I.Sh. (Familiya Ism Sharifingiz)
              </label>
              <input
                class="form__input block w-[100%] py-[12px] px-[16px] rounded-[6px]"
                type="text"
                placeholder="Abdullayev Abdulla Abdulla o’g’li"
                maxlength="100"
              />
            </div>
            <div class="font-['Rubik'] mb-[28px]">
              <label
                class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
                >Telefon raqamingiz</label
              >
              <input
                class="form__input block w-[100%] py-[12px] px-[16px] rounded-[6px]"
                type="text"
                placeholder="+998 00 000-00-00"
              />
            </div>
            <label
              class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
              >To‘lov summasi</label
            >
            <div class="sponsors-payment-sum flex text-center flex-wrap mb-[28px]">
              <div class="flex justify-between flex-wrap w-[100%] gap-y-[16px]">

                <label for="1" class="radio w-[185px] border-[#2E5BFF]">
                  <div class="click flex justify-center items-center p-[20px]">
                    <span class="flex flex-nowrap justify-around items-center">
                      <span class="money font-medium text-[18px] leading-[21px]  uppercase text-[#2E384D] mr-[4px]">1 000 000</span>
                      <span class="sum font-normal text-[12px] leading-[18px]  uppercase text-[#2E5BFF] ">UZS</span>
                    </span>
                    <input
                      class="hidden"
                      id="1"
                      name="sum"
                      type="radio"
                      value="1"
                    />
                  </div>
                </label>

                <label for="2" class="radio w-[185px]">
                  <div class="click flex justify-center items-center p-[20px]">
                    <span class="flex flex-nowrap justify-around items-center">
                      <span class="money font-medium text-[18px] leading-[21px]  uppercase text-[#2E384D] mr-[4px]">5 000 000</span>
                      <span class="sum font-normal text-[12px] leading-[18px]  uppercase text-[#2E5BFF]">UZS</span>
                    </span>
                    <input
                      class="hidden"
                      id="2"
                      name="sum"
                      type="radio"
                      value="2"
                    />
                  </div>
                </label>

                <label for="5" class="radio w-[185px]">
                  <div class="click flex justify-center items-center p-[20px]">
                    <span class="flex flex-nowrap justify-around items-center">
                      <span class="money font-medium text-[18px] leading-[21px]  uppercase text-[#2E384D] mr-[4px]">7 000 000</span>
                      <span class="sum font-normal text-[12px] leading-[18px]  uppercase text-[#2E5BFF]">UZS</span>
                      </span
                    >
                    <input
                      class="hidden"
                      id="5"
                      name="sum"
                      type="radio"
                      value="5"
                    />
                  </div>
                </label>

                <label for="6" class="radio w-[185px]">
                  <div class="click flex justify-center items-center p-[20px]">
                    <span class="flex flex-nowrap justify-around items-center">
                      <span class="money font-medium text-[18px] leading-[21px]  uppercase text-[#2E384D] mr-[4px]">10 000 000</span>
                      <span class="sum font-normal text-[12px] leading-[18px]  uppercase text-[#2E5BFF]">UZS</span>
                    </span>
                    <input
                      class="hidden"
                      id="6"
                      name="sum"
                      type="radio"
                      value="6"
                    />
                  </div>
                </label>

                <label for="7" class="radio w-[185px]">
                  <div class="click flex justify-center items-center p-[20px]">
                    <span class="flex flex-nowrap justify-around items-center">
                      <span class="money font-medium text-[18px] leading-[21px]  uppercase text-[#2E384D] mr-[4px]">30 000 000</span>
                      <span class="sum font-normal text-[12px] leading-[18px]  uppercase text-[#2E5BFF]">UZS</span>
                    </span>
                    <input
                      class="hidden"
                      id="7"
                      name="sum"
                      type="radio"
                      value="7"
                    />
                  </div>
                </label>

                <label for="all_prices" class="radio w-[185px]">
                  <div class="click flex justify-center items-center p-[20px]">
                    <span class="flex flex-nowrap justify-around items-center">
                      <span class="price font-medium text-[18px] leading-[21px]  uppercase text-[#2E384D] mr-[4px]">BOSHQA</span>
                    </span>
                    <input
                      class="hidden"
                      id="all_prices"
                      name="sum"
                      value="0"
                      type="radio"
                    />
                  </div>
                </label>
              </div>
            </div>

            <div class="send-button">
              <button
                button="submit"
                class="btn-primary bg-[#2E5BFF] rounded-[6px] p-[14px] w-[100%] font-medium text-[15px] leading-[21px] text-center text-[#FFFFFF]"
              >
                Yuborish
              </button>
            </div>
          </form>
</template>
<script>
export default {
  
}
</script>
<style >
  .radio {
  width: 185px;
  height: 61px;
  /* margin-bottom: 16px; */
  background: #f9faff;
  /* border: 2px solid #2E5BFF; */
  border: 2px solid #e0e7ff;
  border-radius: 5px;
  position: relative;
}

 .radio:after{
  content: "";
  /* TODO:not working */
  background-image: url("@/static/img/checkedIcon.svg");
  position: absolute;
  top:0;
  right:0;
  width: 20px;
 z-index:3;
}

.form__input {
  background: rgba(224, 231, 255, 0.2);
  border: 1px solid #e0e7ff;
}

.form__input[placeholder] {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(46, 56, 77, 0.35);
}



</style>