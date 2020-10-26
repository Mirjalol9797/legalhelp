<template>
    <div class="about-page">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <div class="about-page__title">LegalHelp – onlayn yuridik xizmatlar</div>
                </b-col>
            </b-row>
            <b-row class="about-page__header">
                <b-col md="6">
                    <iframe 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/8mCnvZTcqT0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                    </iframe>
                </b-col>
                <b-col md="6">
                    <div class="header__text">
                        <p>
                            LegalHelp - professional huquqshunoslar va mijozlar/fuqarolarni bir-biri 
                            bilan onlayn tarzda bog‘lovchi xizmat turi hisoblanadi. Ushbu sayt har
                            qanday foydalanuvchiga istalgan huquq sohasiga oid savollar yuzasidan tez
                            fursatda va sifatli konsultatsiya olish imkonini, huquqshunoslarga esa 
                            huquqiy konsultatsiya berish orqali qo‘shimcha daromad topish imkoniyatini beradi.
                        </p>
                        <p class="p-0 m-0">LegalHelp.uz bu:</p>
                        <span>
                            <font-awesome-icon :icon="['fas', 'check-square']" />
                            <b>TEZ</b>
                        </span>
                        <p class="p-0 m-0">savollarga 2 soat ichida javob olish</p>
                        <span>
                            <font-awesome-icon :icon="['fas', 'check-square']" />
                            <b>HAMYONBOP</b>
                        </span>
                        <p class="p-0 m-0">45000 so‘mdan boshlanuvchi huquqiy konsultatsiya</p>
                        <span>
                            <font-awesome-icon :icon="['fas', 'check-square']" />
                            <b>ENG TO‘G‘RI</b>
                        </span>
                        <p class="p-0 m-0">huquqshunoslarning kollegial fikri va xulosasini olish imkoniyati</p>
                    </div>
                </b-col>
            </b-row>
            <b-row></b-row>
            
        </b-container>
    </div>
</template>