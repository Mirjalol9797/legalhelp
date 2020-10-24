<template>
    <div class="how-works-page">
        <div class="how-works-header">
            <b-container>
                <b-row>
                    <b-col lg="6">
                        <h3 class="how-works-header__title">Huquqshunosga savol yo‘llang</h3>
                        <p class="how-works-header__text">
                            Huquqshunosga onlayn savol berish – 10 000 dan ortiq mijozlarimiz 
                            tomonidan yuqori baholangan xizmat turi hisoblanadi. 
                            Bu Sizga uyingizni tark etmasdan turib, ma’lum holat 
                            yuzasidan bir qancha huquqshunoslarning fikri va
                            maslahatini olish imkoniyatini taqdim etadi.
                        </p>
                        <b-button
                            class="how-works-header__btn"
                        >
                            Savol berish 
                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon__right"/>
                        </b-button>
                    </b-col> 
                </b-row>
            </b-container>
        </div> 
        <div class="how-works-service">
            <b-container>
                <b-row>
                    <b-col cols="12 service__header">
                        <div class="service__title">Unikal xizmat</div>
                        <div class="service__subtitle">Sifatli, ishonchli va qulay huquqiy yordam</div>
                    </b-col>
                </b-row>
                <b-row class="service__blocks">
                    <b-col lg="4" class="service__item">
                        <div class="service__img">
                            <b-img src="../assets/images/how-work/icon1.svg"></b-img>
                        </div>
                        <div class="service__item-title">
                            0% xato!
                        </div>
                        <div class="service__item-text">
                            Savol yo‘llaganingizda bir qancha huquqshunoslar bir vaqtning 
                            o‘zida o‘z javob va fikrlarini bildiradi. Huquqshunoslarning 
                            kollegial fikri vaziyatni xato baholash ehtimolligini yo‘qqa chiqaradi.
                        </div>
                    </b-col>
                    <b-col lg="4" class="service__item">
                        <div class="service__img">
                            <b-img src="../assets/images/how-work/icon2.svg"></b-img>
                        </div>
                        <div class="service__item-title">
                            Huquqshunoslar 24/7!   
                        </div>
                        <div class="service__item-text">
                            O‘zbekistonning turli hududlaridan bo‘lgan huquqshunoslar 
                            haftaning 7 kuni va kunning 24 soati davomida har 
                            qanday huquqiy masala yuzasidan yordam ko‘rsatishga tayyor.
                        </div>   
                    </b-col>
                    <b-col lg="4" class="service__item">
                        <div class="service__img">
                            <b-img src="../assets/images/how-work/icon3.svg"></b-img>
                        </div>
                        <div class="service__item-title">
                            Yuqori iqtisod 60%
                        </div>
                        <div class="service__item-text">
                            Sayt xizmatlaridan foydalanishning o‘rtacha qiymati 
                            10 000 so‘mni tashkil etadi. Bu esa yuridik firmalar 
                            ko‘rsatadigan xizmatdan bir necha o‘n barobar arzonroq.
                        </div>
                    </b-col>
                </b-row>

            </b-container>
        </div>
        <div class="how-works-question">
            <b-container>
                <b-row>
                    <b-col cols="12" class="mb-2">
                        <div class="how-works-question__title">Bu qanday ishlaydi?</div>
                        <div class="how-works-question__subtitle">Muammo atigi 3 bosqichda hal qilinadi</div>
                    </b-col>
                </b-row>
                <b-row class="how-works-question__blocks">
                    <b-col lg="4" class="how-works-question__item">
                        <div class="how-works-question__img">
                            <b-img src="../assets/images/how-work/icon4.svg"></b-img>
                        </div>
                        <div class="how-works-question__item-title">
                            1-bosqich. Savol yo‘llang
                        </div>
                        <div class="how-works-question__item-text">
                            O‘zbekistonning eng yaxshi huquqshunoslari tanishib chiqishi 
                            va kerakli huquqiy yordam ko‘rsatishi uchun
                            savolingizni saytga joylashtiring.
                        </div>
                    </b-col>
                    <b-col lg="4" class="how-works-question__item">
                        <div class="how-works-question__img">
                            <b-img src="../assets/images/how-work/icon5.svg"></b-img>
                        </div>
                        <div class="how-works-question__item-title">
                            2-bosqich. Javob oling
                        </div>
                        <div class="how-works-question__item-text">
                            Huquqshunoslarning dastlabki javoblari uzog‘I bilan 30 minut 
                            ichida kela boshlaydi. Agar to‘lovli savol yo‘llagan bo‘lsangiz, 
                            biz savolingiz yuzasidan batafsil huquqiy
                            konsultatsiya berilishini kafolatlaymiz.
                        </div>
                    </b-col>
                    <b-col lg="4" class="how-works-question__item">
                        <div class="how-works-question__img">
                            <b-img src="../assets/images/how-work/icon6.svg"></b-img>
                        </div>
                        <div class="how-works-question__item-title">
                            3-bosqich. Muammo hal!
                        </div>
                        <div class="how-works-question__item-text">
                            Biz vaqtning o‘zida bir qancha huquqshunoslardan javob va huquqiy 
                            maslahat olish natijasida muammongiz maksimal darajada aniq va 
                            tez hal bo‘ladi – huquqiy jihatdan xatolar umuman mavjud emas.
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="how-works-warranty">
            <b-container>
                <b-row>
                    <b-col cols="12" class="mb-2">
                        <div class="warranty__title">
                            Mijozlar uchun eng yaxshi shart-sharoitlarni kafolatlaymiz
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="4" class="warranty__item">
                        <div class="warranty__img">
                            <b-img src="../assets/images/how-work/icon7.svg"></b-img>
                        </div>
                        <div class="warranty__item-title">
                            Yuqori sifat
                        </div>
                        <div class="warranty__item-text">
                            Ushbu sayt huquqshunoslari ko‘pyillik tajribaga ega va ular 
                            Sizni eng aniq, tez hamda batafsil konsultatsiya bilan taminlaydi.
                        </div>
                    </b-col>
                    <b-col lg="4" class="warranty__item">
                        <div class="warranty__img">
                            <b-img src="../assets/images/how-work/icon8.svg"></b-img>
                        </div>
                        <div class="warranty__item-title">
                            Pulni qaytib olish
                        </div>
                        <div class="warranty__item-text">
                            Biz o‘z xizmatimiz sifatini juda yaxshi anglaymiz va shu sababli, 
                            agarda bergan savolingiz yuzasidan kerakli javobni
                            olmasangiz yoki kerakli xizmat bilan ta’minlanmasangiz, 
                            pulingizni qaytarib berishni kafolatlaymiz.
                        </div>
                    </b-col>
                    <b-col lg="4" class="warranty__item">
                        <div class="warranty__img">
                            <b-img src="../assets/images/how-work/icon9.svg"></b-img>
                        </div>
                        <div class="warranty__item-title">
                            Maxfiylik
                        </div>
                        <div class="warranty__item-text">
                            Biz Sizning ishonchingizni qadrlaymiz va Siz haqingizdagi 
                            shaxsiy ma’lumotlar xavsizligini haqida qayg’uramiz. 
                            Barcha to‘lovlar xavfsiz aloqa va
                            vositalar orqali amalga oshiriladi.
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="our__other-services how-works-our">
            <b-container>
            <div class="our__other-services-header mb-4">
                <div class="our__other-services-title">{{$t('other_service.title')}}</div>
                <p class="our__other-services-text">
                {{$t('other_service.subtitle')}}
                </p>
            </div>
            <div class="our__other-services-list">
                <div class="our__other-services-item">
                <h4 class="our__other-services-item-title">
                    {{$t('other_service.consult_title')}} 
                </h4>
                <p class="our__other-services-item-text">
                    {{$t('other_service.consult_text')}} 
                </p>
                <div class="our__other-services-item-btn-wrap">
                    <b-button class="our__other-services-price"
                    >{{$t('other_service.consult_btn1')}} 
                    </b-button>
                    <b-button class="our__other-services-use" href="tel:998946863999">{{$t('other_service.consult_btn2')}} </b-button>
                </div>
                <!-- <span class="our__other-services-phone d-none d-lg-block"></span> -->
                </div>

                <div class="our__other-services-item-second ml-auto">
                <h4 class="our__other-services-item-title">
                    Hujjat buyurtma qilish
                </h4>
                <p class="our__other-services-item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="our__other-services-item-btn-wrap">
                    <b-button class="our__other-services-price"
                    >50 ming sum
                    </b-button>
                    <b-button class="our__other-services-use" :to="localePath('order-documents')">Foydalanish</b-button>
                </div>
                <!-- <span class="our__other-services-search d-none d-lg-block"></span> -->
                </div>
            </div>
            </b-container>
        </div>          
        <div class="how-works-header how-works-footer">
            <b-container>
                <b-row>
                    <b-col lg="6">
                        <h3 class="how-works-header__title">Huquqshunosga savol yo‘llang</h3>
                        <p class="how-works-header__text">
                            Huquqshunosga onlayn savol berish – 10 000 dan ortiq mijozlarimiz 
                            tomonidan yuqori baholangan xizmat turi hisoblanadi. 
                            Bu Sizga uyingizni tark etmasdan turib, ma’lum holat 
                            yuzasidan bir qancha huquqshunoslarning fikri va
                            maslahatini olish imkoniyatini taqdim etadi.
                        </p>
                        <b-button
                            class="how-works-header__btn"
                        >
                            Savol berish 
                            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon__right"/>
                        </b-button>
                    </b-col> 
                </b-row>
            </b-container>
        </div>              
    </div>
</template>