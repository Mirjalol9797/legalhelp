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
                <input v-model="form.firstname" type="text" id="name" required />
              </div>
              <div class="surname">
                <label for="surname">{{ $t("askquestion.surname") }}</label>
                <input v-model="form.lastname" type="text" id="surname" required />
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
                <label for="">Region tanlash</label>
                  <select name="" id="category">
                  <option value="0" disabled se lected>{{$t('category.typequestion')}}</option>
                    <option value="1">{{$t('region.toshkent')}}</option>
                    <option value="2">{{$t('region.toshkentv')}}</option>
                    <option value="3"> {{$t('region.andijon')}}</option>
                    <option value="4">{{$t('region.buxoro')}}</option>
                    <option value="5"> {{$t('region.jizzax')}}</option>
                    <option value="6"> {{$t('region.qoraqalpogistion')}}</option>
                    <option value="7"> {{$t('region.qashqadaryo')}}</option>
                    <option value="8">{{$t('region.navoi')}}</option>
                    <option value="9">{{$t('region.namangan')}}</option>
                    <option value="10">{{$t('region.samarqand')}}</option>
                    <option value="11">{{$t('region.surxondaryo')}}</option>
                    <option value="12">{{$t('region.sirdaryo')}}</option>
                    <option value="13"> {{$t('region.fargona')}}</option>
                    <option value="14"> {{$t('region.xorazm')}}</option>
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
              <!-- <div class="password">
                <label for="password__id1">
                  Parolni tasdiqlash
                </label>
                <input type="password" class="password__input" id="password_id1">
              </div> -->
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
      form: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      }
    };
  },
  methods: {

    async onSubmit() {
        // this.$store.dispatch('sendForm', this.form)
          await this.$axios.post('customer/create/', {
              first_name: this.form.firstname,
              last_name: this.form.lastname,
              phone_number: this.$store.state.phone_number,
              password: this.form.password,
              email: this.form.email,
              region:1,
              token: this.$store.state.token
          })
          .then(async() => {
              try {
                  await this.$auth.loginWith("local", { data: { 
                      phone_number: this.$store.state.phone_number,
                      password: this.form.password,
                    }
                  });
                  console.log(this.$auth.user);

                  this.$toast.success({
                      title: `${this.$t("toast.success")}`,
                      message: `${this.$t("toast.loginSuccessMessage")}`
                  });
                  // this.disable = false;
              }
              catch (err) {
                  console.log(err)
                  this.$toast.error({
                      title: `${this.$t("toast.loginError")}`,
                      message: `${this.$t("toast.loginErrorMessage")}`
                  });
              }
          })
          .catch(err => {
              console.log(err)
          })
    }
     
        //  async login(){
        //     try{
        //         this.disable = true;
        //         await this.$auth.loginWith("local", {
        //             data: {
        //                 email: this.form.email,
        //                 password: this.form.password
        //             }
        //         });
        //         this.$toast.success({
        //             title: `${this.$t('toast.success')}`,
        //             message: `${this.$t('toast.loginSuccessMessage')}`
        //         })
        //         this.disable = false;
        //     }
        //     catch(err){
        //         this.$toast.error({
        //             title: `${this.$t('toast.loginError')}`,
        //             message: `${this.$t('toast.loginErrorMessage')}`
        //         });
        //         this.disable = false;
        //     }
        // },
      
  }
};
</script>
