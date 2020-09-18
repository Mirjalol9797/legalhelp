<template>
  <div>
    <div class="registration__final">
      <b-container>
        <div class="registration__final-header">
          Savol Berish
        </div>
        <div class="payment-system-wrapper">
          <div class="registration__header">
            <nuxt-link
              :to="localePath('/askquestion3')"
              class="registration__arrow-link"
            >
              <img src="../assets/images/registration/left-arrow.svg" />
            </nuxt-link>
            <span class="step__page-number">4/4</span>
          </div>
          <div class="payment__system">
            <p class="type__payment">To’lov tizimini tanlang</p>
            <form class="payment__list" method="POST" action="">
              <div class="payme payment__item">
                <input
                  type="radio"
                  name="payment"
                  id="payme"
                  class=""
                />
                <label for="payme">
                  <img src="../assets/images/giveaquestion/payme.svg" alt="" />
                </label>
              </div>

              <div class="click payment__item">
                <input
                  type="radio"
                  name="payment"
                  id="click"
                  class=""
                />
                <label for="click">
                  <img src="../assets/images/giveaquestion/click.svg" alt="" />
                </label>
              </div>
            </form>
            <div class="payment__bill">
              To’lov summasi
              <span class="payment__bill-amount">25 000 so’m</span>
            </div>
          </div>
          <div class="payment__bill-btn">
            <b-button :to="localePath('/')">Davom etish</b-button>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>
