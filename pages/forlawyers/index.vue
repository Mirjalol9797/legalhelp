<template>
  <div>
    <div class="for__lawyers">
      <b-container>
        <div class="for__lawyers-header">
          <span class="for__lawyers-line"></span>
          <h1 class="for__lawyers-heading">{{ $t("forlawyers.title") }}</h1>
        </div>
        <form @submit.prevent="onSubmit" class="form__for-lawyers">
          <b-row>
            <b-col lg="5">
              <input
                type="text"
                :placeholder="$t('forlawyers.name')"
                v-model="form.first_name"
              />
              <input
                type="text"
                :placeholder="$t('forlawyers.surname')"
                v-model="form.last_name"
              />
              <div class="select">
                <select id="category" v-model="form.region">
                  <option value="" selected disabled>Region tanlang</option>
                  <option
                    v-for="(selectid, index) of selectuz"
                    :key="index"
                    :value="selectid.id"
                    class="category__region-option"
                    >{{ selectid.title_uz }}</option
                  >
                </select>
              </div>
              <select id="type-field" v-model="form.service">
                <option value="" selected disabled>
                  Huquqiy yo'nalishingiz
                </option>
                <option
                  v-for="(service, index) of serviceuz"
                  :key="index"
                  :value="service.id"
                  >{{ service.title_uz }}
                </option>
              </select>                
              <input
                type="email"
                :placeholder="$t('forlawyers.email')"
                v-model="form.email"
              />     
              <input
                type="password"
                :placeholder="$t('forlawyers.password')"
                v-model="form.password"
              />                     
              <input
                type="tel"
                :placeholder="$t('forlawyers.phonenumber')"
                value="+998"
                v-model="form.phone_number"
              />
            </b-col>
            <div class="password" v-if="showPasswordInput">
              <label for="password__id">
                {{$t('reg.code')}}
              </label>
              <input
                type="password"
                v-model="code"
                class="password__input"
                id="password_id"
                required
              />
            </div>            
            <b-col lg="7" class="overflow-hidden form__for-lawyers-textarea">
              <input type="file" @change="fileUpload" accept="image/*" class="for__lawyers-file">
              <textarea
                name="textearea__for-lawyers"
                class="textearea__for-lawyers"
                v-model="form.description"
                :placeholder="$t('forlawyers.bio')"
              ></textarea>
            </b-col>
          </b-row>
          <div class="for__lawyers-btn-wrap">
            <b-button type="submit" class="for__lawyers-btn">{{
              $t("forlawyers.next")
            }}</b-button>
          </div>
        </form>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPasswordInput: false,
      selectuz: [],
      serviceuz: [],
      form: {
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        email: "",
        region: "",
        service: "",
        token: "",
        description: ""
      },
      code: ""
    };
  },
  methods: {
    fileUpload(event) {
      let e = event.target.files[0];
      if (e.type == "image/jpeg") {
        this.form.file = e;
      } else {
        console.log("wrong type");
      }
    },
    async onSubmit() {
      this.showPasswordInput = true;

      if (this.code == "") {
        await this.$axios.post('user/code/send/', { phone_number:  this.form.phone_number})
                .then(res => {
                    console.log("Code: ", res.data.code)
                })
                .catch(err => console.log(err))

      } else {
        await this.$axios.post('user/code/check/', {phone_number: this.form.phone_number, code: this.code})
                .then(res => {
                    console.log('SendCode', res)
                    this.form.token = res.data.token


                    // User create

                    this.$axios.post("lawyer/create/", this.form)
                    .then(res => {
                      console.log(res)

                      this.form = {
                          first_name: "",
                          last_name: "",
                          phone_number: "",
                          password: "",
                          email: "",
                          region: "",
                          service: "",
                        }

                        this.$router.push(this.localePath('/lawyer_wait'));
                        
                    })
                    .catch(err => {
                      console.log(err)
                    })
                })      
                .catch(err => console.log(err))
      }
    },
    async getRegionuz() {
      await this.$axios.get("region/?language=uz").then(res => {
        this.selectuz = res.data;
        this.selected = res.data;
        // console.log(res);
      });
    },
    async getServiceuz() {
      await this.$axios.get("lawyer/services/?language=uz").then(res => {
        this.serviceuz = res.data;
      });
    },    

  },
  mounted() {
    this.getRegionuz();
    this.getServiceuz()
  }
};
</script>
