<template>
  <div class="click-wrapper">
    <b-container>
      <div class="click-inner">
        <div class="click-inner-content">
          <div class="row">
            <div class="col-md-6">
              <div class="click__payment  click__align">
                <div class="click__payment-wrapper">
                  <div class="click__payment-header">
                    <span class="payment__header-title"
                      >Plastik karta ma'lumotlarini kiritish</span
                    >
                    <div class="tooltipp">
                      <span class="tooltiptext"
                        >Karta ma’lumotlari xizmat ko’rsatuvchiga berilmaydi va
                        Payme Business serverlarida saqlanadi<a
                          href="https://cdn.payme.uz/terms/main.html"
                          style="color:blue;"
                          >Payme</a
                        ></span
                      >
                    </div>
                  </div>
                  <div class="click-form__wrapper">
                    <form action="" method="POST" class="payment__form">
                      <label for="card__number" class="card__number-label"
                        >Karta raqami</label
                      >
                      <input type="text" id="card__number" />
                      <div class="card__content">
                        <div class="card__content-img-wrapper">
                          <span>powered by</span>
                          <img
                            src="../assets/images/payment/click-logo 2.svg"
                            alt="payme image"
                            class="payme__image"
                          />
                        </div>
                        <div class="card__content-gap">
                          <span>Yaroqlilik </span>
                          <span> muddati</span>
                        </div>
                        <div class="payme__date-wrapper">
                          <label for="date__payme">Oy / Yil</label>
                          <input type="text" id="date__payme" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <form action="" method="" class="remember__card-number">
                    <input type="checkbox" id="checkbox__payme" />
                    <label for="checkbox__payme">Kartani eslab qoling</label>
                    <div class="tooltipp">
                      <span class="tooltiptext"
                        >покупателя передаются и сохраняются на сервере мерчанта
                        в зашифрованном виде — токене. Обработка токенов
                        производится с помощью API. <a href="#">Payme</a></span
                      >
                    </div>
                  </form>
                  <p class="goon">
                    "Davom etish" tugmachasini bosish orqali siz
                    <a
                      href="https://cdn.payme.uz/terms/main.html"
                      style="color:blue;"
                    >
                      taklif shartlariga qo'shilasiz.</a
                    >
                  </p>
                  <div class="button__next-wrapper">
                    <button type="submit">Yuborish</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mobile-number">
                <form action="" method="" class="mobile-payment">
                  <p>Click tizimiga ulangan telefon raqamingzni kiriting</p>
                  <input type="text" placeholder="99897 123 45 67" />
                  <input type="submit" value="Yuborish" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
