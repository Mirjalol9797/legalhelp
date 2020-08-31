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
                    <option value="">Yo’nalishingiz</option>
                    <option value="">Yo’nalishingiz</option>
                    <option value="saab">Yo’nalishingiz</option>
                    <option value="saab">Yo’nalishingiz</option>

                </select>
                 <select name="" id="territory">
                    <option value="">Hududni Tanlang</option>
                    <option value="">Hududni Tanlang</option>
                    <option value="saab">Hududni Tanlang</option>
                    <option value="saab">Hududni Tanlang</option>
                </select>
                        </b-col>
                        <b-col lg="3">
                            <input type="file" class="file__for-lawyers">
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