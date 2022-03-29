<template>
  <div
    class="login-page flex justify-center items-center bg-[#E5E5E5] w-[100%] h-[100%] py-[70px]"
  >
    <div class="login-page__wrapper">
      <img
        class="mb-[48px] w-[314px] ml-auto mr-auto"
        src="@/static/img/logo.svg"
        width="295"
        height="91"
      />
      <form class="form bg-[#fff] rounded-[12px] w-[379px] p-[32px]">
        <h3
          class="form__title font-['SF Pro Display'] m-0 mb-[44px] font-bold text-[24px] leading-[28px] text-[#28293D]"
        >
          Kirish
        </h3>

        <div class="font-['Rubik'] mb-[22px]">
          <label
            class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
            >Login</label
          >
          <input
            class="form__input block w-[100%] py-[12px] px-[16px] rounded-[6px]"
            type="text"
            placeholder="adm8904"
          />
        </div>

        <div class="font-['Rubik'] mb-[22px]">
          <label
            class="inline-block mb-[8px] font-medium text-[12px] leading-[14px] tracking-[1.125px] uppercase text-[#1D1D1F]"
            >Parol</label
          >
          <input
            class="form__input block w-[100%] py-[12px] px-[16px] rounded-[6px] placeholder-[#2E384D]"
            type="text"
            placeholder="••••••••••"
          />
        </div>

        <!-- RECAPTCHA TODO: optimallashtirish-->
        <div class="w-[100%] mb-[22.5px]">
          <div
            data-sitekey="6LecmtAcAAAAAMCTWnWwAB_M73zZQIq8lmwx8yVv"
            data-size="normal"
            data-theme="light"
            data-badge="bottomright"
            data-tabindex="0"
            data-callback="recaptchaSuccessCallback"
            data-expired-callback="recaptchaExpiredCallback"
            data-error-callback="recaptchaErrorCallback"
            class="g-recaptcha d-inline-block"
          >
            <div>
              <div>
                <iframe
                  class="w-[100%]"
                  title="reCAPTCHA"
                  src="https://www.recaptcha.net/recaptcha/api2/anchor?ar=1&amp;k=6LecmtAcAAAAAMCTWnWwAB_M73zZQIq8lmwx8yVv&amp;co=aHR0cHM6Ly9jbHViLm1ldHNlbmF0LnV6OjQ0Mw..&amp;hl=en&amp;v=85AXn53af-oJBEtL2o2WpAjZ&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=qv0615og7vaq"
                  height="78"
                  role="presentation"
                  name="a-pdjcip6cxhrh"
                  frameborder="0"
                  scrolling="no"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                ></iframe>
              </div>
              <textarea
                id="g-recaptcha-response"
                name="g-recaptcha-response"
                class="g-recaptcha-response"
                style="
                  width: 250px;
                  height: 40px;
                  border: 1px solid rgb(193, 193, 193);
                  margin: 10px 25px;
                  padding: 0px;
                  resize: none;
                  display: none;
                "
              ></textarea>
            </div>
            <iframe style="display: none"></iframe>
          </div>
        </div>

        <router-link
          to="/dashboard"
          class="btn-primary bg-[#2E5BFF] rounded-[6px] p-[14px] w-[100%] font-medium text-[15px] leading-[21px] text-center text-[#FFFFFF]"
        >
          Kirish
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.rc-anchor-normal {
  width: 100% !important;
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
