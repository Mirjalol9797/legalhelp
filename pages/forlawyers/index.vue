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
              <input
                type="tel"
                disabled
                :placeholder="$t('forlawyers.phonenumber')"
                :value="'+998' + ' ' + this.$store.state.phone_number"
              />
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
              <select id="type-field" v-model="serviceSelect">
                <option value="" selected disabled
                  >Huquqiy yo'nalishingiz</option
                >
                <option
                  v-for="(service, index) of serviceuz"
                  :key="index"
                  :value="service.id"
                  >{{ service.title_uz }}
                </option>
              </select>

              <div class="select">
                <select id="category" v-model="selectedRegion">
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
              
            </b-col>
            <b-col lg="7" class="overflow-hidden form__for-lawyers-textarea">
              <input type="file" @change="fileUpload" accept="image/*" class="for__lawyers-file">
              <!-- <input
                type="file"
                class="file__for-lawyers"
                @change="fileUpload"
                accept="image/*"
              /> -->
              <textarea
                name="textearea__for-lawyers"
                class="textearea__for-lawyers"
                v-model="form.description"
                :placeholder="$t('forlawyers.bio')"
              ></textarea>
            </b-col>
            <!-- <b-col lg="4" class="text-center">
              <textarea
                name="textearea__for-lawyers"
                class="textearea__for-lawyers"
                v-model="form.description"
                :placeholder="$t('forlawyers.bio')"
              ></textarea>
            </b-col> -->
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
      serviceSelect:"",
      selectedRegion: "",
      selectuz: [],
      selectru: [],
      serviceuz: [],
      serviceru: [],
      file: "",
      form: {
        first_name: "",
        last_name: "",
        password: "",
        description: "",
        email: "",
      }
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
    async getRegionuz() {
      await this.$axios.get("region/?language=uz").then(res => {
        this.selectuz = res.data;
      });
    },
    async getRegionru() {
      await this.$axios.get("region/?language=ru").then(res => {
        this.selectru = res.data;
      });
    },
    async getServiceuz() {
      await this.$axios.get("lawyer/services/?language=uz").then(res => {
        this.serviceuz = res.data;
      });
    },
    async getServiceru() {
      await this.$axios.get("lawyer/services/?language=ru").then(res => {
        this.serviceru = res.data;
      });
    },
    async onSubmit() {
  if(this.form.first_name=="" || this.form.last_name=="" ||this.form.password=="" ||this.form.description=="" || this.form.email=="" ){
       this.$toast.error({
              title: `${this.$t("toast.loginError")}`,
              message: `${this.$t("toast.input")}`
            });
    }
      await this.$axios
        .post("lawyer/create/", {
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          phone_number: this.$store.state.phone_number,
          password: this.form.password,
          // image: this.file,
          description: this.form.description,
          email: this.form.email,
          region: 3,
          services: [2,5],
          token: this.$store.state.token
        })
        .then(async () => {
          try {
            this.$toast.success({
              title: `${this.$t("toast.success")}`,
              message: `${this.$t("toast.lawyererror")}`
            });
          } catch (err) {
            console.log(err);
            this.$toast.error({
              title: `${this.$t("toast.loginError")}`,
              message: `${this.$t("toast.lawyererror")}`
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
    this.getServiceuz();
    this.getServiceru();
  }
};
</script>
