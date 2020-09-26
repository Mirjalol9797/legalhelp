<template>
    <div>
     <Navbar />
      <Nuxt />
      <BacktoTop />
        <footer class="index__footer">
      <b-container>
        <b-row>
          <b-col lg="4">
            <div class="footer__item">
              <div class="footer__logo">
                <nuxt-link to class="footer__logo-link">
                  <img src="../assets/images/Ресурс 15.png" alt="logo web page" />
                  <span class="legaltech">LegalHelp</span>
                </nuxt-link>
              </div>
              <div
                class="footer__motto"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <!-- /.footer__motto -->
            </div>
             <ul class="social__footer-list">
                    <li class="social__footer-item">
                      <nuxt-link to class="social__footer-link social__footer-link-facebook">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                      </nuxt-link>
                    </li>
                    <li class="social__footer-item">
                      <nuxt-link to class="social__footer-link social__footer-link-instagram">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                      </nuxt-link>
                    </li>
                    <li class="social__footer-item">
                      <nuxt-link to class="social__footer-link social__footer-link-telegram">
                        <font-awesome-icon :icon="['fab', 'telegram']" />
                      </nuxt-link>
                    </li>
                     <li class="social__footer-item">
                      <nuxt-link to class="social__footer-link social__footer-link-youtube">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                      </nuxt-link>
                    </li>
                  </ul>
          </b-col>
          <b-col lg="4">
            <div class="index-footer-item">
              <h4 class="index-footer-item-heading">Office Opening Hours</h4>
              <ul class="working-hours">
                <li class="working-hours-item">Monday...............08.00AM-05.00PM</li>
                <li class="working-hours-item">Tuesday..............08.00AM-05.00PM</li>
                <li class="working-hours-item">Wednesday......08.00AM-05.00PM </li>
                <li class="working-hours-item">Thursday.............08.00AM-05.00PM</li>
                <li class="working-hours-item">Friday....................08.00AM-05.00PM</li>
                <li class="working-hours-item"> Saturday.............08.00AM-05.00PM</li>
                <li class="working-hours-item">Sunday................Closed</li>
                   
              </ul>
            </div>
          </b-col>
          <b-col lg="4">
            <div class="index-address">
              <h4 class="index-address-heading">Address</h4>
              <span class="index-address-text">Lorem ipsum dolor 
                sit amet, consectetur elit, </span>
              <nuxt-link to="tel:+99893123-34-345" class="index-address-phone">+998 00 000 00 00</nuxt-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
      </footer>
    </div>
</template>