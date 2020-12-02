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
            <div class="text-center">
            <h2>Ro'yxatdan o'tish</h2>
            </div>
            <form @submit.prevent="onSubmit" class="registration__form">
              <div class="phone__number">
                <label for="firstname">Ism</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="data.phone_number"
                    type="text"
                    id="firstname"
                    required
                  />
                </div>
              </div>
              <div class="phone__number">
                <label for="lastname">Familiya</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="data.phone_number"
                    type="text"
                    id="lastname"
                    required
                  />
                </div>
              </div>
              <div class="phone__number">
                <label for="email">E-mail</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="data.phone_number"
                    type="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="select">
                <label for="category">Viloyat</label>
                <select  id="category" v-model="selected">
                   <option
                    v-for="(selectid, index) of selectuz"
                    :key="index"
                    :value="selectid.id"
                    class="category__region-option"
                    >{{ selectid.title_uz }}</option>
                </select>
              </div>
              <div class="phone__number">
                <label for="password">Parol</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="data.phone_number"
                    type="password"
                    id="password"
                    required
                  />
                </div>
              </div>
              <div class="phone__number">
                <label for="password">Parolni qayta kiriting</label>
                <div class="input__tel-wrapper">
                  <input
                    v-model="data.phone_number"
                    type="password"
                    id="password"
                    required
                  />
                </div>
              </div>
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
      selectuz: [],
      selectru: [],
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
        this.$router.push(this.localePath({ name: "registration" }));
      } else {
        this.$store.dispatch("getCode", this.data.phone_number);
      }
    },
    async getRegionuz() {
      await this.$axios.get("region/?language=uz").then(res => {
        this.selectuz = res.data;
        this.selected = res.data;
        console.log(res);
      });
    },
    async getRegionru() {
      await this.$axios.get("region/?language=ru").then(res => {
        this.selectru = res.data;
      });
    },
  },
  mounted() {
    this.getRegionuz();
    this.getRegionru();
  }
};
</script>
