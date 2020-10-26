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
                        <b-form>
                            <b-form-group>
                                <b-form-input class="contact__input" type="text" placeholder="Elektron pochta" required/>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input class="contact__input" type="password" placeholder="Telefon *" required/>
                            </b-form-group>
                            <b-form-group>
                                <b-form-textarea
                                        class="contact__input"
                                        id="textarea-rows"
                                        placeholder="Sizning savolingiz *"
                                        rows="8"
                                        no-resize
                                ></b-form-textarea>
                            </b-form-group>
                            <b-button class="contact__btn" type="submit">YUBORISH</b-button>
                        </b-form>
                    </div>
                </b-col>
                <b-col lg="12">
                    <b-row class="contact__date">
                        <b-col cols="6" md="6" lg="3">
                            <img src="../assets/images/contact/mobile-phone.svg" alt="">
                            <p>+998 90 000 00 00</p>
                        </b-col>
                        <b-col cols="6" md="6" lg="3">
                            <img src="../assets/images/contact/mail.svg" alt="">
                            <p>legaltech@gmail.com</p>
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
                                Lorem ipsum dolor sit amet, consectetur ime.
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
            return {}
        }
    }
</script>

