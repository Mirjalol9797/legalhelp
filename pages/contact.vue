<template>
    <div class="contact py-5">
        <b-container>
            <b-row>
                <b-col lg="12">
                    <div class="contact__title">
                        <h2>Biz bilan bog'lanish</h2>
                    </div>
                </b-col>
                <b-col class="mt-5" cols="12" md="6" lg="6">
                    <img class="contact__img" src="https://greatsoft.uz/_nuxt/img/talking-people.8d6c9fb.svg" alt="">
                </b-col>
                <b-col class="mt-5" cols="12" md="6" lg="6">
                    <div class="contact__form">
                        <b-form @submit.prevent="postContact">
                            <b-form-group>
                                <b-form-input 
                                    class="contact__input" 
                                    type="text" 
                                    placeholder="Ism Familiya *" 
                                    required
                                    v-model="form.full_name"
                                >
                                </b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input 
                                    class="contact__input" 
                                    type="text" 
                                    placeholder="Telefon *" 
                                    required
                                    v-model="form.phone_number"
                                    
                                >
                                </b-form-input>
                                <div v-if="error" class="contact__error">Raqam noto'g'ri kiritilgan. <br>
                                    Raqamni +998990001122 ko'rinishda kirgizing
                                </div>
                            </b-form-group>
                            <b-form-group>
                                <b-form-textarea
                                    class="contact__input"
                                    id="textarea-rows"
                                    placeholder="Sizning savolingiz *"
                                    rows="8"
                                    no-resize
                                    required
                                    v-model="form.message"
                                >
                                </b-form-textarea>
                            </b-form-group>
                            <b-button class="contact__btn" type="submit">YUBORISH</b-button>
                        </b-form>
                    </div>
                </b-col>
                <b-col lg="12">
                    <b-row class="contact__date">
                        <b-col cols="6" md="6" lg="3">
                            <img src="../assets/images/contact/mobile-phone.svg" alt="">
                            <p>
                                <a href="tel:+998999276993">+99899 927 69 93</a>
                            </p>
                        </b-col>
                        <b-col cols="6" md="6" lg="3">
                            <img src="../assets/images/contact/mail.svg" alt="">
                            <p>
                                <a href="mailto:info@legalhelp.uz">info@legalhelp.uz</a>
                            </p>
                        </b-col>
                        <b-col cols="6" md="6" lg="3">
                            <img src="../assets/images/contact/clock.svg" alt="">
                            <p>
                                <span>Dushanba - Shanba</span>
                                <span>9:00 - 18:00</span>
                            </p>
                        </b-col>
                        <b-col cols="6" md="6" lg="3">
                            <img src="../assets/images/contact/location.svg" alt="">
                            <p>
                                Toshkent shahar Bektemir tumani
                            </p>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "contact-us",
        data() {
            return {
                form: {
                    full_name: '',
                    phone_number: '',
                    message: ''
                },
                error: ''
            }
        },  
        methods: {
            async postContact() {
                await this.$axios.post('contact/', this.form)
                    .then(async () => {
                        // console.log('postContact', this.form);
                        this.form = {
                            full_name: '',
                            phone_number: '',
                            message: ''
                        }
                        try {
                            this.error = false;
                            this.$toast.success({
                            title: `Malumotlaringiz yuborilda`,
                            message: `Siz bilan tez orada bog'lanishadi`,
                            
                            })
                        } catch (err) {
                            console.log(err)
                            this.$toast.error({
                            title: `Malumot xato yuborilda`,
                            message: `Iltimos kaytadan urinib ko'ring`,
                            })
                        }
                    })
                    .catch(err => {
                        this.error = err.response.data.phone_number;
                    })
            },
        }
    }
</script>


