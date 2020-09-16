<template>
  <div>
    <div class="registration__wrapper">
      <b-container>
        <div class="registration">
          <div class="registration__inner">
          	<div class="registration__header">
          		<nuxt-link to="" class="registration__arrow-link">
          			<img src="../assets/images/registration/left-arrow.svg">
          		</nuxt-link>
          		<span class="step__page-number">1/4</span>
          	</div>
            <form action="" method="POST" class="registration__form">
              <div class="name">
                <label for="name">Ism</label>
                <input type="text" id="name">
              </div>
              <div class="surname">
                <label for="surname">Familya</label>
                <input type="text" id="surname">
              </div>
              <div class="city">
                <label for="city">Shahar</label>
                <input type="text" id="city">
              </div>
              <div class="phone__number">
                <label for="phone">Tel raqam</label>
                <div class="input__tel-wrapper">
                <span class="tel__code">+998</span>
                <input type="tel" id="phone">
                </div>
              </div>
              <div class="language">
                <label for="language">Til</label>
                <select name="" id="language">
                  <option value="o'zbek">O’zbek</option>
                  <option value="Rus">Rus</option>
                  <option value="Ingliz">Ingliz</option>
                </select>
              </div>
              <div class="category">
                <label for="language">Kategoriya</label>
                 <select name="" id="language">
                  <option value="0" disabled selected>Savol turini tanlang</option>
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
              </div>
              <div class="question__title">
                <label for="question__title">Savol sarlavhasi</label>
                <input type="text" id="question__title">
              </div>
              <div class="question__text">
                <label for="question__text">Savol matni</label>
                <textarea name="" id="question__text"></textarea>
              </div>
              <div class="file">
                <label for="file__input">Fayl</label>
                <input type="file" value="Upload file" class="file__input">
              </div>
              <div class="registration__button-wrap">
                <b-button class="registration__btn">Davom etish</b-button>
              </div>
            </form>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
