<template>
    <div>
        <div class="for__lawyers">
            <b-container>
            <div class="for__lawyers-header">
                <span class="for__lawyers-line"></span>
                <h1 class="for__lawyers-heading">Yuristlar uchun</h1>
                </div>
                <form action="" method="POST" class="form__for-lawyers">
                    <b-row>
                        <b-col lg="5">
                             <input type="text" placeholder="Ismimgiz">
                    <input type="text" placeholder="Familiyangiz">
                    <input type="tel" placeholder="Telefon raqamingiz">
                    <input type="email" placeholder="Email adresingiz">
                <select name="" id="type-field">
                <option value="0" disabled selected>Yo’nalishingiz</option>
                    <option value="1">Fuqarolik huquqi (umumiy masalalar)</option>
                    <option value="2">Mehnat munosabatlari</option>
                    <option value="3">Fuqarolik / Migratsiya</option>
                    <option value="4">Ta’lim</option>
                    <option value="5">Tadbirkorlik (biznes huquqi)</option>
                    <option value="6">Davlat xizmatlari</option>
                    <option value="7">Oilaviy munosabatlar</option>
                    <option value="8">Sog‘liqni saqlash</option>
                    <option value="9">Jinoyat huquqi</option>
                    <option value="10">Sud-huquq masalalari</option>
                    <option value="11">Soliqlar</option>
                    <option value="12">Transport (Avtomobil huquqi)</option>
                    <option value="13">Qishloq xo‘jaligi</option>
                    <option value="14">Uy-joy va kommunal masalalari</option>
                    <option value="15">Ijtimoiy himoya</option>
                    <option value="16">Yer masalalari</option>
                    <option value="17">Bank sohasi</option>
                    <option value="18">Iste’molchi huquqi</option>
                    <option value="19">Meros</option>
                </select>
                 <select name="" id="territory">
                   <option value="0" selected disabled>Hududni Tanlang</option>
                    <option value="1">Region yo'q</option>
                    <option value="2">Toshkent shahri</option>
                    <option value="3"> Toshkent viloyati</option>
                    <option value="4">Andijon</option>
                    <option value="5"> Buxoro</option>
                    <option value="6"> Jizzax</option>
                    <option value="7"> Qoraqalpog'iston</option>
                    <option value="8"> Qashqadaryo</option>
                    <option value="9">Navoiy</option>
                    <option value="10"> Namangan</option>
                    <option value="11"> Samarqand</option>
                    <option value="12">Surxondaryo</option>
                    <option value="13"> Sirdaryo</option>
                    <option value="14"> Farg'ona</option>
                    <option value="15">Xorazm</option>
                </select>
                        </b-col>
                        <b-col lg="3" class="overflow-hidden">
                            <input type="file"  class="file__for-lawyers">
                        </b-col>
                         <b-col lg="4" class="text-center">
                            <textarea name="textearea__for-lawyers" class="textearea__for-lawyers" id="" placeholder="Write your bio here:  "></textarea>
                        </b-col>
                    </b-row>
                   <div class="for__lawyers-btn-wrap">
                       <b-button class="for__lawyers-btn">Davom etish</b-button>
                   </div>
                    </form>      
            </b-container>
        </div>
    </div>
</template>