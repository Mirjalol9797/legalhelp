<template>
  <div>
    <footer class="footer">
      <b-container>
        <b-row>
          <b-col lg="4">
            <div class="footer__item">
              <div class="footer__logo">
                <nuxt-link to class="footer__logo-link">
                  <img src="../assets/images/Ресурс 15.png" alt="logo web page" />
                  <span class="legaltech">LegalTech</span>
                </nuxt-link>
              </div>
              <div
                class="footer__motto"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <!-- /.footer__motto -->
            </div>
          </b-col>
          <b-col lg="4">
            <div class="footer__menu">
              <h3 class="legaltech">LegalTech</h3>
              <ul class="footer__menu-list">
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Loyiha haqida</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Yangiliklar</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Savollar</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Biz qanday ishlaymiz?</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Yuristlar</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Bizning xizmatlarimiz</nuxt-link>
                </li>
              </ul>
            </div>
            <!-- /.footer__menu -->
          </b-col>
          <b-col lg="4">
            <div class="other__item">
              <h3 class="legaltech">Boshqalar</h3>
              <ul class="footer__menu-list">
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Jamoa</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Loyiha yuristi bo’lish</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">Ko’p so’raladigan savollar</nuxt-link>
                </li>
                <li class="footer__menu-item">
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
                  </ul>
                </li>
              </ul>
            </div>
            <!-- /.other__item -->
          </b-col>
        </b-row>
      </b-container>
    </footer>
    <!-- /.footer -->
  </div>
</template>