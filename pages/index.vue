<template>
  <div>
    <div class="main__page">
      <header class="header">
      </header>
      <div class="form__wrapper">
        <b-container>
          <div class="form__header">
            <h4 class="form__heading">
              Savolingizniga qonun doirasida javob oling!
            </h4>
            <!-- /.form__heading -->
            <p class="form__motto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <form action="" method="POST" class="main__form">
            <b-container>
              <b-row>
                <b-col lg="5" class=" order-2 order-lg-1">
                  <input type="email" class="email" placeholder="Email adresingiz">
                  <input type="text" class="name" placeholder="Ismimgiz">
                  <input type="tel" class="phone__number" placeholder="Telefon raqamingiz">
                  <input type="text" class="zip" placeholder="Postcode">
                  <input type="text" class="topic" placeholder="Topic">
                </b-col>
                <b-col lg="7" class=" order-1 order-lg-2">
                  <div class="info__wrapper">
                    <div class="img__part">
                      <img src="../assets/images/index/lawyer.png" alt="">
                    </div>
                    <div class="info__content">
                      <p class="info__content-heading">Type a question in the box below for
                        a consultation with our specialist team. </p>
                      <span class="info__content-small">Average reponce time 60 mins
                        (during normal office hours)</span>
                      <p class="info__content-tel">Or call us on <nuxt-link to="" class="phone">+998 00 000 00 00</nuxt-link>
                      </p>
                    </div>
                  </div>
                  <!-- /.info__wrapper -->
                </b-col>
              </b-row>
               <textarea name="textarea" id="" class="textarea" placeholder="Your Question"></textarea>
            </b-container>
            <b-button class="question__btn submit__btn">Ask a lawyer</b-button>
          </form>
        </b-container>
      </div>
      <!-- /.form__wrapper -->
    </div>
    <!-- /.main__page -->
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}

</script>
