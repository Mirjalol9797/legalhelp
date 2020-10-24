<template>
    <div class="how-works-page">
        <div class="how-works-header">
            <b-container>
                <b-row>
                    <b-col md="6">
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
                    <b-col cols="12 mb-5">
                        <div class="service__title">Unikal xizmat</div>
                        <div class="service__subtitle">Sifatli, ishonchli va qulay huquqiy yordam</div>
                    </b-col>
                </b-row>
                <b-row class="service__blocks">
                    <b-col lg="4" class="service__item">
                        <div class="service__img">
                            <b-img src="../assets/images/how-work/icon1.png"></b-img>
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
                            <b-img src="../assets/images/how-work/icon2.png"></b-img>
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
                            <b-img src="../assets/images/how-work/icon3.png"></b-img>
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
                    <b-col cols="12">
                        <div class="question__title">Bu qanday ishlaydi?</div>
                        <div class="question__subtitle">Muammo atigi 3 bosqichda hal qilinadi</div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="4" class="question__item">
                        <div class="question__img">
                            <b-img src="../assets/images/how-work/icon4.png"></b-img>
                        </div>
                        <div class="question__title">
                            1-bosqich. Savol yo‘llang
                        </div>
                        <div class="question__text">
                            O‘zbekistonning eng yaxshi huquqshunoslari tanishib chiqishi 
                            va kerakli huquqiy yordam ko‘rsatishi uchun
                            savolingizni saytga joylashtiring.
                        </div>
                    </b-col>
                    <b-col md="4" class="question__item">
                        <div class="question__img">
                            <b-img src="../assets/images/how-work/icon5.png"></b-img>
                        </div>
                        <div class="question__title">
                            2-bosqich. Javob oling
                        </div>
                        <div class="question__text">
                            Huquqshunoslarning dastlabki javoblari uzog‘I bilan 30 minut 
                            ichida kela boshlaydi. Agar to‘lovli savol yo‘llagan bo‘lsangiz, 
                            biz savolingiz yuzasidan batafsil huquqiy
                            konsultatsiya berilishini kafolatlaymiz.
                        </div>
                    </b-col>
                    <b-col md="4" class="question__item">
                        <div class="question__img">
                            <b-img src="../assets/images/how-work/icon6.png"></b-img>
                        </div>
                        <div class="question__title">
                            3-bosqich. Muammo hal!
                        </div>
                        <div class="question__text">
                            Biz vaqtning o‘zida bir qancha huquqshunoslardan javob va huquqiy 
                            maslahat olish natijasida muammongiz maksimal darajada aniq va 
                            tez hal bo‘ladi – huquqiy jihatdan xatolar umuman mavjud emas.
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>>