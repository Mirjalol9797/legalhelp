<template>
  <div>
    <footer class="footer">
      <b-container>
        <b-row>
          <b-col lg="4">
            <div class="footer__item">
              <div class="footer__logo">
                <nuxt-link :to="localePath('/')" class="footer__logo-link">
                  <img src="../assets/images/Ресурс 15.png" alt="logo web page" />
                  <span class="legaltech">LegalHelp</span>
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
              <h3 class="legaltech">LegalHelp</h3>
              <ul class="footer__menu-list">
                <li class="footer__menu-item">
                  <nuxt-link :to="localePath('/forlawyers')" class="footer__menu-link">{{ $t('navbar.forlawyers') }}</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link :to="localePath('/news')" class="footer__menu-link">{{ $t('navbar.news') }}</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link :to="localePath('/questions')"  class="footer__menu-link">{{ $t('navbar.questions') }}</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link :to="localePath('/how-works')" class="footer__menu-link">{{ $t('footer__menu.howwework') }}</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link :to="localePath('/lawyers')" class="footer__menu-link">{{ $t('navbar.lawyers') }}</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link :to="localePath('/our-service')" class="footer__menu-link">{{ $t('footer__menu.service') }}</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link :to="localePath('/about')" class="footer__menu-link">{{ $t('footer__menu.about') }}</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link :to="localePath('/contact')" class="footer__menu-link">{{ $t('footer__menu.contact') }}</nuxt-link>
                </li>
                
              </ul>
            </div>
            <!-- /.footer__menu -->
          </b-col>
          <b-col lg="4">
            <div class="other__item">
              <h3 class="legaltech">{{$t('footer__menu.others')}}</h3>
              <ul class="footer__menu-list">
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">{{$t('footer__menu.team')}}</nuxt-link>
                </li>
                <li class="footer__menu-item">
                  <nuxt-link to class="footer__menu-link">{{$t('footer__menu.popularquestions')}}</nuxt-link>
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