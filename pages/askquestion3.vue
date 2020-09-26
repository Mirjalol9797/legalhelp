<template>
  <div>
    <div class="registration__three-wrapper">
      <b-container>
        <div class="registration__three">
          <div class="registration__header">
            <nuxt-link
              :to="localePath('/askquestion2')"
              class="registration__arrow-link"
            >
              <img src="../assets/images/registration/left-arrow.svg" />
            </nuxt-link>
            <span class="step__page-number">3/4</span>
          </div>
          <div class="registration__three-card-wrapper">
            <b-row>
              <b-col lg="4">
                <div class="registration__three-item">
                  <span class="registration__three-item-header"
                    >Standart savol 15 000 so`m</span
                  >
                  <ul class="registration__three-item-list">
                    <li class="registration__three-item-item">
                      Savolni darhol e'lon qilish.
                    </li>
                    <li class="registration__three-item-item">
                      Sms orqali javob haqida xabarnoma.
                    </li>
                    <li class="registration__three-item-item">
                      Yuristning umumiy javobi kafolati.
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col lg="4">
                <div class="registration__three-big-item">
                  <span class="registration__three-big-item-header">
                    V.I.P savol 25000 so’m
                  </span>
                  <ul class="registration__three-item-list">
                    <li class="registration__three-item-item">
                      Savolni darhol e'lon qilish.
                    </li>
                    <li class="registration__three-item-item">
                      Sms orqali javob haqida xabarnoma.
                    </li>
                    <li class="registration__three-item-item">
                      Yuristning umumiy javobi kafolati.
                    </li>
                    <li class="registration__three-item-item">
                      Vaziyatni to'liq va batafsil tahlili kafolati.
                    </li>
                    <li class="registration__three-item-item">
                      Vaziyat bo'yicha bir nechta yuristlar fikrlari.
                    </li>
                    <li class="registration__three-item-item">
                      Birinchi javob 15 daqiqa ichida.
                    </li>
                    <li class="registration__three-item-item">
                      Cheklanmagan miqdorda qo'shimcha savol va
                      aniqlashtirishlar.
                    </li>
                    <li class="registration__three-item-item">
                      Savolni boshqa foydalanuvchilar va qidiruv tizimlaridan
                      yashirish.
                    </li>
                    <li class="registration__three-item-item">
                      Lorem ipsum dolor sit amet
                    </li>
                    <li class="registration__three-item-item">
                      Lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col lg="4">
                <div class="registration__three-item">
                  <span class="registration__three-item-header"
                    >Bepul savol 0 so`m</span
                  >
                  <ul class="registration__three-item-list">
                    <li class="registration__three-item-item">
                      Savol navbati bilan e'lon qilinadi.
                    </li>
                    <li class="registration__three-item-item">
                      Javob kafolatlanmagan.
                    </li>
                  </ul>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="registration__three-btn-wrap">
            <b-button
              class="registration__three-btn"
              :to="localePath('/askquestion4')"
              >Davom etish</b-button
            >
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
