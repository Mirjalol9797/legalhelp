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
                <input v-model="form.firstname" type="text" id="name" />
              </div>
              <div class="surname">
                <label for="surname">{{ $t("askquestion.surname") }}</label>
                <input v-model="form.lastname" type="text" id="surname" />
              </div>
              <div class="registration__email">
                <label for="registration_email">{{
                  $t("forlawyers.email")
                }}</label>
                <input v-model="form.email" type="email" id="registration_email" />
              </div>
              <div class="phone__number">
                <label for="phone">Tel raqam</label>
                <div class="input__tel-wrapper">
                  <span class="tel__code">+998</span>
                  <input v-model="form.phone_number" type="tel" id="phone" disabled />
                </div>
              </div>
              <div class="password">
                <label for="password__id">
                  Parol
                </label>
                <input type="password" class="password__input" id="password_id">
              </div>
              <div class="password">
                <label for="password__id1">
                  Parolni tasdiqlash
                </label>
                <input type="password" class="password__input" id="password_id1">
              </div>
              <div class="registration-submit-wrap">
                <b-button type="submit" class="registration-submit">Davom etish</b-button>
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
    data(){
        return {
            form: {
                firstname: '',
                lastname: '',
                phone_number: '946646333',
                email: '',  
                password: '1234567'
            }
        }
    },
    methods: {
        async onSubmit(){
            await this.$axios.post('user/client/create/', this.form)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            // try {
            //     await this.$auth.loginWith("local", {
            //         data: {
            //             email: this.form2.email,
            //             password: this.form2.password
            //         }
            //     });
            //      this.$toast.success({
            //         title: `${this.$t('toast.success')}`,
            //         message: `${this.$t('toast.loginSuccessMessage')}`
            //     })
            //     this.$store.dispatch('getToggleSignupModal',false);
            //     this.disable = false;
            // }
            // catch(error) {
            //     this.disable = false;
            //      this.$toast.error({
            //         title: `${this.$t('toast.loginError')}`,
            //         message: `${this.$t('toast.signupErrorMessage')}`
            //     });
            //     console.log(error);
            // }
        },
    }
}
</script>