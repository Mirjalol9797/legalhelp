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
              <div class="name">
                <label for="name">{{ $t("askquestion.name") }}</label>
                <input
                  v-model="form.firstname"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div class="surname">
                <label for="surname">{{ $t("askquestion.surname") }}</label>
                <input
                  v-model="form.lastname"
                  type="text"
                  id="surname"
                  required
                />
              </div>
              <div class="registration__email">
                <label for="registration_email">{{
                  $t("forlawyers.email")
                }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  id="registration_email"
                />
              </div>
              <div class="select">
                <label for="category">Viloyat</label>
                <select  id="category" v-model="selected">
                    <option value="" selected disabled>Viloyat tanlang</option>
                   <option
                    v-for="(selectid, index) of selectuz"
                    :key="index"
                    :value="selectid.id"
                    class="category__region-option"
                    >{{ selectid.title_uz }}</option>
                </select>
              </div>
              <div class="password">
                <label for="password__id">
                  Parol
                </label>
                <input
                  type="password"
                  v-model="form.password"
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
      selected: "",
      selectuz: [],
      selectru: [],
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
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
    async onSubmit() {
      await this.$axios
        .post("customer/create/", {
          first_name: this.form.firstname,
          last_name: this.form.lastname,
          phone_number: this.$store.state.phone_number,
          password: this.form.password,
          email: this.form.email,
          region: this.selected,
          token: this.$store.state.token
        })
        .then(async () => {
          try {
            await this.$auth.loginWith("local", {
              data: {
                phone_number: this.$store.state.phone_number,
                password: this.form.password
              }
            });
            console.log(this.$auth.user);

            this.$toast.success({
              title: `${this.$t("toast.success")}`,
              message: `${this.$t("toast.loginSuccessMessage")}`
            });
            // this.disable = false;
          } catch (err) {
            console.log(err);
            this.$toast.error({
              title: `${this.$t("toast.loginError")}`,
              message: `${this.$t("toast.loginErrorMessage")}`
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getRegionuz();
    this.getRegionru();
  }
};
</script>
