<template>
    <div class="help-page py-5">
        <b-container>
            <b-row>
                <b-col lg="12">
                    <div class="help__title">
                        <h2>Ko`p so`raladigan savollar</h2>
                        <p>Bu erda saytning ishlashi bilan bog'liq tez-tez savollar bilan tanishishingiz mumkin</p>
                    </div>
                </b-col>
                <b-col lg="12">
                    <div class="help__content">


                        
                        <div class="btn-group">
                            <button @click="open('one')" class="btn" type="button">Men mijozman
                            </button>
                            <button @click="open('two')" class="btn" type="button">Men advokatman
                            </button>
                        </div>
                        <div class="mt-5">
                            <b-card v-if="visibleOne" no-body border-variant="0">
                                <b-tabs pills card vertical>
                                    <b-tab title="Roʻyxatdan oʻtish va Kirish" active>
                                        <b-card-text>
                                            <div class="accordion" role="tablist">
                                                <b-button class="w-100" v-b-toggle.collapse-1>
                                                    Saytda qanday ro'yxatdan o'tiladi?
                                                </b-button>
                                                <b-collapse visible id="collapse-1" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Saytda ro'yxatdan o'tish uchun <a href="#">https://yuridik.uz/auth</a>
                                                            sahifasiga telefon raqamingizni kiriting, shundan so'ng
                                                            telefoningizga tasdiqlash raqami yuboriladi. Yangi ochilgan
                                                            sahifa "Men mijoz" sifatida tanlab, ma'lumotlaringizni
                                                            to'ldiring. Shuningdek, savol berish sahifasi orqali ham
                                                            tizim sizni avtomatik ro'yxatdan o'tkazadi. Ro'yxatdan
                                                            o'tish jarayonida tushunmovchilikka duch kelsangiz yoki
                                                            texnik muammo bo'lsa saytning o'ng pastki burchak qismidagi
                                                            Texnik yordam formasi orqali bog'lanishingiz mumkin.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-2>
                                                    Ijtimoiy tarmoqlar orqali qanday ro'yxatdan o'tiladi?
                                                </b-button>
                                                <b-collapse visible id="collapse-2" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Hozircha saytimiz ijtimoiy tarmoqlar orqali ro'yxatdan
                                                            o'tish funksiyasini qo'llab-quvvatlamaydi
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="Savollar bilan ishlash">
                                        <b-card-text>
                                            <div>
                                                <b-button class="w-100" v-b-toggle.collapse-3>
                                                    Qanday qilib savol beriladi?
                                                </b-button>
                                                <b-collapse visible id="collapse-3" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Siz bosh menyudagi <a href="#">"Savol berish"</a> tugmasini
                                                            bosib yoki sayt
                                                            bosh sahifasidagi shaklga savol matnini yozib savol
                                                            berishingiz mumkin. Shundan so'ng siz savollarni berish
                                                            sahifasiga yo'naltirilasiz. Bir necha oddiy qadamlarni
                                                            bosib, qizil yulduzcha bilan belgilanadigan kerakli maydonni
                                                            to'ldirasiz. Shundan so'ng sizning savolingiz saytda e'lon
                                                            qilinadi.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-4>
                                                    Savol berish jarayonida mendan telefon raqamim so'raldi, bu nimaga
                                                    kerak?
                                                </b-button>
                                                <b-collapse visible id="collapse-4" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Bu shuni anglatadiki, qachondir savol berganingizda yoki
                                                            ro'yxatdan o'tganingizda mazkur telefon raqamingizdan
                                                            foydalanasiz. Mazkur manzil bo'yicha savol berish uchun siz
                                                            parolni kiritishingiz zarur. Har safar yangi brovzer / yoki
                                                            qurilma orqali kirganingizda sizning telefon raqamingizga
                                                            tasdiqlovchi kod yuboriladi.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-5>
                                                    "Maxfiy savol" nima degani?
                                                </b-button>
                                                <b-collapse visible id="collapse-5" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Ayrim savollarda shaxsiy ma'lumotlar bo'lishi mumkin.
                                                            Tabiiyki, bunday ma'lumotlar ommaviy oshkor etilishini
                                                            istamaysiz, shunday holatda Maxfiy savol xizmatidan
                                                            foydalanishingiz mumkin. MAxfiy savol pullik xizmat
                                                            hisoblanadi. Buning uchun "VIP savol" tarifi bo'yicha savol
                                                            berishingiz va narxlarni belgilash qismida qo'shimcha xizmat
                                                            sifatida maxfiy savol xizmatiga belgi qo'shingiz lozim. bu
                                                            savol faqat ro'yxatdan o'tgan yuristlarga ko'rinadi, ya'ni
                                                            ommaviy oshkor qilinmaydi va qidiruv tizimlarida ham
                                                            chiqmaydi. Mijozlar va sayt mehmonlari sizning maxfiy
                                                            savolingizni va unga javobni ko'ra olmaydilar.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-6>
                                                    Avvalgi bergan savollarimni qanday ko'rishim / topishim mumkin?
                                                </b-button>
                                                <b-collapse visible id="collapse-6" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Avval bergan savolingizni topishning ikki yo'li bor:
                                                            1) Savol berganingizda kiritilgan telefon raqamingizga javob
                                                            berilganda SMS yuborilgan. Mazur SMSda keltirilgan havolaga
                                                            o'tib savolingizni ko'rishingiz mumkin.
                                                            2) Ekranning yuqori o'ng qismidagi "Kirish" tugmasini bosib
                                                            saytdagi shaxsiy sahifangizga kiring. Telefon raqamingizni
                                                            kiriting. Shundan so'ng shaxsiy kabinetingizga o'tib, chap
                                                            menyudagi "Mening savollarim" ni tanlang. Mazkur bo'limda
                                                            siz bergan barcha savollar joylashtirilgan.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-7>
                                                    Nima uchun pulli savol berishim kerak?
                                                </b-button>
                                                <b-collapse visible id="collapse-7" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Siz pulli savol bersangiz, u bosh sahifaga joylashtiriladi.
                                                            Pulli savolni e'lon qilish yuristlar tomonidan maslahatlar
                                                            berishning tezligini va sifatini oshiradi. Bundan tashqari
                                                            pulli savolni "Yashirin" qilish mumkin (Yashirin savol nima?
                                                            ga qarang ).
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                </b-tabs>
                            </b-card>
                            <b-card v-if="visibleTwo" no-body border-variant="0">
                                <b-tabs pills card vertical>
                                    <b-tab title="Roʻyxatdan oʻtish va Kirish" active>
                                        <b-card-text>
                                            <div class="accordion" role="tablist">
                                                <b-button class="w-100" v-b-toggle.collapse-1>
                                                    Saytda qanday ro'yxatdan o'tiladi?
                                                </b-button>
                                                <b-collapse visible id="collapse-1" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Saytda ro'yxatdan o'tish uchun <a href="#">https://yuridik.uz/auth</a>
                                                            sahifasiga telefon raqamingizni kiriting, shundan so'ng
                                                            telefoningizga tasdiqlash raqami yuboriladi. Yangi ochilgan
                                                            sahifa "Men yurist" sifatida tanlab, ma'lumotlaringizni
                                                            to'ldiring. Ro'yxatdan o'tish jarayoni yakunlash uchun ushbu
                                                            <a href="#">sahifada ko'rsatilgan</a> qadamlarni bajaring.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-2>
                                                    Advokatlik maqomiga qanday erishiladi?
                                                </b-button>
                                                <b-collapse visible id="collapse-2" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Saytda advokat sifatida to’liq imkoniyatlardan foydalanish
                                                            va pullik onlayn yuridik xizmat ko’rsatish uchun bizga
                                                            advokatlik litsenziyangiz yoki advokatlik guvohnomangizning
                                                            skaner nusxasini yuboring. Buning uchun shaxsiy
                                                            sahifangizning chap yon qismidagi
                                                            <a href="#">"Advokat maqomini olish uchun so’rovnoma
                                                                yuborish"</a>
                                                            bo'limida so'ralgan savollarni
                                                            to'ldiring. So'rovingiz 24 soat ichida ko'rib chiqiladi va
                                                            qaror borasida email orqali xabardor qilinasiz.
                                                        </p>
                                                        <p class="card-text">
                                                            Advokatlik litsenziyasi yoki guvohnomangizdagi ma'lumotlar
                                                            yoki uning rasmi hech qayerda ommaviy e’lon qilinmaydi,
                                                            faqatgina sizning shaxsingizni hamda yuridik xizmat
                                                            ko’rsatishga vakolatli ekanligingizni tasqilash uchun
                                                            foydalaniladi.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-3>
                                                    Adashib mijoz sifatida ro'yxatdan o'tibman, o'zgartirish mumkinmi?
                                                </b-button>
                                                <b-collapse visible id="collapse-3" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Agar kasbingiz huquqshunos/advokat bo'lsa va adashib mijoz
                                                            sifatida ro'yxatdan o'tgan bo'lib, maqomingiz o'zgartirish
                                                            uchun sayt ma'muriyatiga <a href="#">murojaat qiling</a>.
                                                            Iltimos, imkon
                                                            qadar batafsil ma'lumot bering
                                                        </p>
                                                        <p class="card-text">
                                                            <a href="#">Bog'lanish uchun:
                                                                https://yuridik.uz/contacts</a>
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-4>
                                                    Hisobimni (shaxsiy akkaunt) butunlay o'chirish uchun nima qilish
                                                    kerak?
                                                </b-button>
                                                <b-collapse visible id="collapse-4" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Agar yuridik.uz saytida boshqa ishlashni xohlamasangiz va
                                                            ma'lumotlaringiz saytda aks ettirilishini istmasangiz
                                                            hisobingizni o'chirish uchun sayt ma'muriyatiga
                                                            <a href="#">murojaat qiling</a>.
                                                            Iltimos, imkon qadar batafsil ma'lumot bering
                                                        </p>
                                                        <p class="card-text">
                                                            <a href="#">Bog'lanish uchun:
                                                                https://yuridik.uz/contacts</a>
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="Profilni tahrirlash va shaxsiy sahifa">
                                        <b-card-text>
                                            <div>
                                                <b-button class="w-100" v-b-toggle.collapse-1>
                                                    Fotosur'at, ism va familyamni o'zgartiraolmayapman ?
                                                </b-button>
                                                <b-collapse visible id="collapse-1" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Agarda advokat maqomida bo'lsangiz, siz ism, familiyangiz va
                                                            fotosur'atingizni mustaqil o'zgartiraolmaysiz. O'zgartirish
                                                            uchun sayt ma'muriyatiga <a href="#">murojaat qiling</a>.
                                                            Iltimos,
                                                            o'zgartirish sabablari haqida imkon qadar batafsil ma'lumot
                                                            bering
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-2>
                                                    Nega shaxsiy sahifamdagi ma'lumotlarni to'ldirishim kerak?
                                                </b-button>
                                                <b-collapse visible id="collapse-2" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Toʻliq toʻldirilgan advokat/huquqshunos sahifasi mijozning
                                                            shu shaxsga boʻlgan ishonchini oshiradi. Mijozlar yuqori
                                                            ehtimol bilan toʻliq toʻldirilgan va rasm joylashtirilgan
                                                            profilga yurist bilan pulli huquqiy maslahat olish uchun
                                                            buyurtma qiladilar. Maʼlumotingiz, mutaxassisligingiz
                                                            haqidagi maʼlumotlarni hamda rasmingizni ham joylashtirishni
                                                            tavsiya qilamiz. Sozlashlar boʻlimida koʻrsatiladigan
                                                            xizmatlar qisqacha tavsifi va toʻlovi haqida maʼlumot
                                                            kiritishingiz mumkin. “Oʻzingiz haqingizda” bandida shaxsiy
                                                            maslahat olish maqsadida mijoz sizni oson topib olishi uchun
                                                            maʼlumotlar kiriting.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-3>
                                                    Fotosur'at uchun alohida talablar qanday?
                                                </b-button>
                                                <b-collapse visible id="collapse-3" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Advokat fotosur’ati quyidagi talablarga javob berishi kerak:

                                                            – sur’atda yakka o’zingiz bo’lishingiz (boshqa odamlar,
                                                            hayvonlar, turli buyumlarsiz);
                                                            – yuzingiz aniq aks etgan bo’lishi;
                                                            – rasmiy uslubga xoslik;
                                                            – quyosh nuridan saqlovchi ko’zoynaklar ta’qiqlanadi;
                                                            – yaxshi sifatli bo’lishi.
                                                            Iltimos, faqat o'zingizning sur'atingizni joylashtiring.
                                                            Boshqa shaxslarga tegishli fotosur'atlarni joylashtirmang.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-4>
                                                    Yuridik ma'lumot qanday qilib tasdiqlanadi va bu nima uchun kerak?
                                                </b-button>
                                                <b-collapse visible id="collapse-4" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Yuridik.uz da biz yuqori sifatli va professional huquqiy
                                                            maslahat berilishiga harakat qilamiz, shu sababdan ham
                                                            huquqiy maslahatlar oliy yuridik maʼlumot mavjudligi
                                                            tasdiqlangan yuristlar tomonidan beriladi. Bundan tashqari
                                                            shaxsning advokatligini tasdiqlovchi hujjati mavjudligi
                                                            pulli savollarga javob berish sharti ham sanaladi. Alohida
                                                            hollarda oʻrta-maxsus yuridik maʼlumotli hamda tor doiradagi
                                                            oliy maʼlumotli (soliq maslahatchisi, auditor va boshq.)
                                                            mutaxassislar orqali ham pulli xizmat koʻrsatiladi.
                                                            Oʻzingizning maʼlumotingizni tasdiqlash uchun shaxsiy
                                                            kabinetda (Shaxsiy kabinet>Profilni tahrirlash>Maʼlumot)
                                                            Ta'lim qismida ma'lumotlarni to'ldirishingiz mumkin. Ushbu
                                                            ma'lumot ommaviy ochiqdir.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="Savollar bilan ishlash">
                                        <b-card-text>
                                            <div>
                                                <b-button class="w-100" v-b-toggle.collapse-1>
                                                    Bepul va pulli savollarning farqi nimada?
                                                </b-button>
                                                <b-collapse visible id="collapse-1" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Yuridik.uz loyihasidagi savollar 2 turga bo’linadi: <a
                                                                href="#">pullik</a> va <a href="#">bepul</a>
                                                            1. Pulli savollar
                                                            Har kuni saytimizga o’nlab savollar kelib tushadi. Ularning
                                                            ayrimlari pulli savollardir. O’rtacha pulli savol qiymati –
                                                            35000 so’m. Odatda pulli savol berilgandan so’ng bir qancha
                                                            advokatlar javob beradilar, mijoz barcha javoblarni o’qib
                                                            chiqib, o’zi gonorarni taqsimlaydi. Agar mijoz tomonidan
                                                            savol yopilgandan keyin ham gonorar taqsimlash amalga
                                                            oshirilsa, 10 kundan so’ng sayt ma’muriyati tomonidan
                                                            gonorar taqsimlanadi.
                                                            DIQQAT! Faqat advokat maqomida bo’lgan huquqshunoslargina
                                                            pullik savollarga javob berishda qatnashaoladilar. Jamoamiz
                                                            barcha huquqshunoslarga bunday imkoniyatni berish borasida
                                                            harakat qilmoqdalar. Yaqin kunlarda barcha uchun shunday
                                                            imkoniyat taqdim etiladi.
                                                        </p>
                                                        <p class="card-text">
                                                            2. Bepul savollar
                                                            Bepul savollarga javob berish orqali insonlarga yordam
                                                            berasiz, jamiyatda huquqiy madaniyat rivoji o’zi hissangizni
                                                            qo’shgan bo’lasiz. Qolaversa, bepul javob olgan mijozlarning
                                                            aksariyati javob bergan advokat xizmatidan foydalanishga
                                                            harakat qiladilar. Ya’ni bepul javob berish orqali
                                                            o’zingizga mijozlar jalb qilishingiz mumkin. Shuningdek,
                                                            qancha ko’p savolga javob bersangiz, saytda reytingingiz
                                                            shuncha yuqorilayveradi.
                                                            DIQQAT! Ayrim bepul savollar ham «biriktirilgan» maqomiga
                                                            ega, bunday savollar bepul bo’lsa-da, ularga biroz kichik
                                                            pul miqdori ajratiladi.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-2>
                                                    Men uchun qiziqarli savollarni qanday qilib topaman?
                                                </b-button>
                                                <b-collapse visible id="collapse-2" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Siz oʻzingiz uchun qiziqarli savollarni saytning asosiy
                                                            sahifasidagi yoki menyu panelidagi "Savollar" tugmasini
                                                            bosish orqali savollar sahifasiga o'tishingiz mumkin.
                                                            Savollar ro'yxatining yuqori qismida "Murakkab qidiruv"
                                                            mavjud bo'lib, bu yerda siz tanlashning turli parmetrlarini
                                                            kiritishingiz ham mumkin.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-3>
                                                    Savollarga javob berish orqali pul ishlashim mumkinmi?
                                                </b-button>
                                                <b-collapse visible id="collapse-3" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Albatta! Bu Yuridik.uz loyihasining asosiy funksiyalaridan
                                                            biri - yuristlarga joylashgan manzilidan qatʼi nazar
                                                            masofadan turib ishlash va pul topish imkoniyatini taqdim
                                                            etish. Siz mijozlar yuborgan pulli savollarga javob berish,
                                                            telefon orqali yuridik konsultatsiya berish hamda hujjatlar
                                                            bo'yicha tenderda ishtirok etib pul ishlab olishingiz
                                                            mumkin.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-4>
                                                    Pulli savollarga javob berish uchun nima talab qilinadi?
                                                </b-button>
                                                <b-collapse visible id="collapse-4" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Saytda pullik xizmatlar ko'rsatish uchun advokatlik
                                                            litsenziyasiga ega bo'lishingiz talab qilinadi. Advokatlik
                                                            maqomini olish uchun bizga so'rov yuboring. Buning uchun
                                                            shaxsiy sahifangizning chap yon qismidagi
                                                            <a href="#">"Advokat maqomini olish uchun so’rovnoma
                                                                yuborish"</a>
                                                            bo'limida so'ralgan
                                                            savollarni to'ldiring. So'rovingiz 24 soat ichida ko'rib
                                                            chiqiladi va qaror borasida email orqali xabardor qilinasiz.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="Telefon orqali konsultatsiya">
                                        <b-card-text>
                                            <div>
                                                <b-button class="w-100" v-b-toggle.collapse-1>
                                                    Qanday qilib Telefon konsultatsiya buyurtmalarini olish mumkin?
                                                </b-button>
                                                <b-collapse visible id="collapse-1" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Telefon konsultatsiya buyurtmalarini olish uchun siz advokat
                                                            maqomiga ega bo'lsihingiz kerak. Menyular panelidan
                                                            Xizmatlar > Telefon konsultatsiya bo'limini tanlang.
                                                            So'ng mazkur sahifadan sizga mavzu jihatidan yaqin
                                                            buyurtmani topib tanlashingiz mumkin.
                                                        </p>
                                                        <p class="card-text">
                                                            2. Bepul savollar
                                                            Bepul savollarga javob berish orqali insonlarga yordam
                                                            berasiz, jamiyatda huquqiy madaniyat rivoji o’zi hissangizni
                                                            qo’shgan bo’lasiz. Qolaversa, bepul javob olgan mijozlarning
                                                            aksariyati javob bergan advokat xizmatidan foydalanishga
                                                            harakat qiladilar. Ya’ni bepul javob berish orqali
                                                            o’zingizga mijozlar jalb qilishingiz mumkin. Shuningdek,
                                                            qancha ko’p savolga javob bersangiz, saytda reytingingiz
                                                            shuncha yuqorilayveradi.
                                                            DIQQAT! Ayrim bepul savollar ham «biriktirilgan» maqomiga
                                                            ega, bunday savollar bepul bo’lsa-da, ularga biroz kichik
                                                            pul miqdori ajratiladi.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                                <b-button class="w-100" v-b-toggle.collapse-2>
                                                    Mijozga qachon telefon qilish kerak?
                                                </b-button>
                                                <b-collapse visible id="collapse-2" class="mt-2">
                                                    <b-card>
                                                        <p class="card-text">
                                                            Yuridik xizmat ko'rsatish qoidalariga muvofiq buyurtmani
                                                            qabul qilib olganingizdan 1 (soat) ichida telefon
                                                            qilishingiz lozim.
                                                        </p>
                                                    </b-card>
                                                </b-collapse>
                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="Hujjat buyurtmalari bilan ishlash">
                                        <b-card-text>
                                            <div>

                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="Reyting va reputatsiya">
                                        <b-card-text>
                                            <div>

                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                    <b-tab title="Hisobni boshqarish">
                                        <b-card-text>
                                            <div>

                                            </div>
                                        </b-card-text>
                                    </b-tab>
                                </b-tabs>
                            </b-card>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "help",
        data() {
            return {
                visibleOne: true,
                visibleTwo: false,
            }
        },
        methods: {
            open(e) {
                if (e === 'one') {
                    this.visibleOne = true;
                    this.visibleTwo = false;
                } else {
                    this.visibleOne = false;
                    this.visibleTwo = true;
                }
            }
        }
    }
</script>

