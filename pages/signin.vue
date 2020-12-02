<template>
  <div>
    <div class="registration__wrapper">
      <div class="step__two-registration-inner">
        <b-container>
          <div class="step__two-registration">
            <div class="registration__header">
              <nuxt-link to="/" class="registration__arrow-link">
                <img src="../assets/images/registration/left-arrow.svg" />
              </nuxt-link>
            </div>
            <form
              class="registration__form"
              @submit.prevent="login()"
            >
              <div class="phone__number">
                <label for="phone">{{ $t("profile.phone") }}</label>
                <div class="input__tel-wrapper">
                  <span class="tel__code">+998</span>
                  <input type="tel" id="phone" v-model="form.phone_number" />
                </div>
              </div>

              <div class="password">
                <label for="password">{{ $t("profile.password") }}</label>
                <input type="password" id="password" v-model="form.password" />
              </div>
              <div class="registration-submit-wrap">
                <b-button class="registration-submit" type="submit">{{
                  $t("givequestion.btn")
                }}</b-button> 
                <nuxt-link to="" class="registration__forgot-password">Parolni unutdingizmi?</nuxt-link>
              </div>
              <nuxt-link :to="localePath('/reg')" class="registration__sign-up">Ro'yxatdan o'tish</nuxt-link>
            </form>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        phone_number: "",
        password: ""
      }
    };
  },
  computed: {},

  methods: {
    async login() {
        try {
        console.log(this.form);
        let res = await this.$auth.loginWith("local", {data: this.form});
        console.log(res) 
        this.$toast.success({
          title: `${this.$t("toast.success")}`,
          message: `${this.$t("toast.loginSuccessMessage")}`
        });
      }
       catch (err) {
          console.log(err)
          this.$toast.error({
            title: `${this.$t("toast.loginError")}`,
            message: `${this.$t("toast.loginErrorMessage")}`
          });
      }
    }
  }
};
</script>
