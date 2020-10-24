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
            <form @submit.prevent="onSubmit" class="registration__form">
              <div class="phone__number">
                <label for="phone">Tel raqam</label>
                <div class="input__tel-wrapper">
                  <span class="tel__code">+998</span>
                  <input
                    v-model="data.phone_number"
                    type="tel"
                    id="phone"
                    required
                  />
                </div>
              </div>
              <div class="password" v-if="showPasswordInput">
                <label for="password__id">
                  Kod
                </label>
                <input
                  type="password"
                  v-model="data.code"
                  class="password__input"
                  id="password_id"
                  required
                />
              </div>
              <div class="registration-submit-wrap">
                <b-button type="submit" class="registration-submit"
                  >Davom etish</b-button
                >
              </div>
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
      showPasswordInput: false,
      data: {
        phone_number: "",
        code: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      this.showPasswordInput = true;

      if (this.data.code != "") {
        this.$store.dispatch("sendCode", this.data);
        this.$router.push(this.localePath({ name: "selectuser" }));
      } else {
        this.$store.dispatch("getCode", this.data.phone_number);
      }
    }
  }
};
</script>
