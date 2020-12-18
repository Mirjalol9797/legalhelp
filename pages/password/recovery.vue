<template>
    <div class="recovery">
        <b-container>
            <b-row>
                <b-col class="mx-auto mx-lg-auto d-lg-block" cols="10" lg="4">
                    <div class="recovery__card">
                        <h4>Parolni tiklash</h4>
                        <b-form v-if="isShowTel">
                            <b-form-group label="Telefon">
                            <b-form-input class="" v-model="form.phone_number" type="text" placeholder="+998__ ___ __ __"></b-form-input>
                            <span v-if="error" class="error">Telefon raqam noto'g'ri</span>
                            </b-form-group>
                            <p>Aktivatsiya kodini olish uchun telefon raqamingizni kiriting.</p>
                            <b-button v-if="ishShowBtn" @click="showCode()" type="button" variant="primary">
                                Aktivatsiya kodini olish
                            </b-button>
                        </b-form>
                        <b-form v-if="isShowCode" class="mt-1">
                            <b-form-group label="Ko'd">
                            <b-form-input v-model="code" type="text" placeholder="Kodni kiriting"></b-form-input>
                            </b-form-group>
                            <b-button @click="showPassword()" type="submit" variant="primary">Kodni yuborish</b-button>
                        </b-form>
                        <b-form v-if="isShowPassword" class="mt-1">
                            <b-form-group label="Parolni o’zgartirish">
                                <b-form-input v-model="form.password" type="password" placeholder="********">
                                </b-form-input>
                            </b-form-group>
                            <p>Parol raqamlardan, bosh harflardan va maxsus belgidan iborat bo'lishi kerak</p>
                            <b-form-group label="Parolni qaytadan tering">
                                <b-form-input type="password" placeholder="********">
                                </b-form-input>
                            </b-form-group>
                            <nuxt-link :to="localePath('/signin')">
                            <b-button @click="onSubmit()" type="button" variant="primary">
                                Parolni o’zgartirish
                            </b-button>
                        </nuxt-link>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
        </b-container>
  </div>
</template>
<script>
  export default {
      data() {
          return {
              ishShowBtn: true,
              ishShowCodeBtn: true,
              isShowTel: true,
              isShowCode: false,
              isShowPassword: false,
              error: false,
              form: {
                  phone_number: '',
                  password: '',
                  token: '',
              },
              code: '',
          }
      },
      methods: {
          async showCode() {
              await this.$axios.post('/user/password/code/', this.form)
                  .then(() => {
                      this.$toast.success({
                          title: `${this.$t("toast.success")}`,
                          message: `${this.$t("toast.SuccessMessage")}`
                      });
                      if (this.error === false) {
                          this.ishShowBtn = false;
                          this.isShowCode = true;
                      } else if (this.error === true){
                          this.ishShowBtn = false;
                          this.isShowCode = true;
                          this.error = false;
                      }
                      else {
                          this.ishShowBtn = true;
                      }
                  })
                  .catch(() => {
                      this.error = true;
                  });
          },
          async showPassword() {
              this.isShowTel = false;
              this.isShowCode = false;
              this.isShowPassword = true;
              await this.$axios.post('/user/code/check/', {phone_number: this.form.phone_number, code: this.code})
                  .then((res) => {
                      this.form.token = res.data.token;
                  })
          },
          async onSubmit() {
              await this.$axios.post('/user/password/reset/', this.form)
                  .then(() => {
                      this.$toast.success({
                          title: `${this.$t("toast.success")}`,
                          message: `${this.$t("toast.SuccessMessage")}`
                      });
                  })
          }
      }
  }
</script>
