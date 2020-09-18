<template>
  <div>
      <div class="contact-us">
          <div class="registration__wrapper">
      <b-container>
          <h1 class="order-documets-heading">Biz bilan bog'lanish</h1>
        <div class="registration">
          <div class="registration__inner">
            <form action="" method="POST" class="registration__form">
              <div class="name">
                <label for="name">Ism</label>
                <input type="text" id="name">
              </div>
              <div class="registration__email">
                  <label for="email">Elektron pochta</label>
                  <input type="text" id="email" class="registration__email">
              </div>
              <div class="phone__number">
                <label for="phone">Tel raqam</label>
                <div class="input__tel-wrapper">
                <span class="tel__code">+998</span>
                <input type="tel" id="phone">
                </div>
              </div>
              <div class="question__text">
                <label for="question__text">Sizning savolingiz</label>
                <textarea name="" id="question__text"></textarea>
              </div>
              <div class="registration__button-wrap">
                <b-button class="registration__btn">Yuborish</b-button>
              </div>
            </form>
          </div>
        </div>
        <div class="contact-us-info">
            <b-row>
                <b-col lg="6">
                    <div class="contact-us-info-item">
                         <font-awesome-icon class="phone-icon" :icon="['fas','phone']" />
                            <a href="tel:+998999999999">+998 99 999 99 99</a>
                    </div>
                </b-col>
                <b-col lg="6">
                    <div class="contact-us-info-item">
                         <font-awesome-icon class="phone-icon" :icon="['fas','time']" />
                            
                    </div>
                </b-col>
            </b-row>
        </div>
      </b-container>
    </div>
      </div>
    
  </div>
</template>
