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
              <div class="footer__motto">
                {{$t('footer_info.info')}}
              </div>
            </div>
             <ul class="social__footer-list">
                    <li class="social__footer-item">
                      <a target="_blank" href="https://www.facebook.com/LEGAL-LIONS-group-Uzbekistan-111074313895766" class="social__footer-link social__footer-link-facebook">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                      </a>
                    </li>
                    <li class="social__footer-item">
                      <a target="_blank" href="https://www.instagram.com/legal_helps" class="social__footer-link social__footer-link-instagram">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                      </a>
                    </li>
                    <li class="social__footer-item">
                      <a target="_blank" href="https://t.me/Legallhelp" class="social__footer-link social__footer-link-telegram">
                        <font-awesome-icon :icon="['fab', 'telegram']" />
                      </a>
                    </li>
                     <li class="social__footer-item">
                      <a target="_blank" to class="social__footer-link social__footer-link-youtube">
                        <font-awesome-icon :icon="['fab', 'youtube']" />
                      </a>
                    </li>
                  </ul>
          </b-col>
          <b-col lg="4">
            <div class="index-footer-item">
              <h4 class="index-footer-item-heading">{{$t('footer_time.title')}}</h4>
              <ul class="working-hours">
                <li :class="{ active:  currentDay === 'Понедельник'}" class="working-hours-item">{{$t('footer_time.monday')}}</li>
                <li :class="{ active:  currentDay === 'Вторник'}" class="working-hours-item">{{$t('footer_time.tues')}}</li>
                <li :class="{ active:  currentDay === 'Среда'}" class="working-hours-item">{{$t('footer_time.wend')}}</li>
                <li :class="{ active:  currentDay === 'Четверг'}" class="working-hours-item">{{$t('footer_time.thur')}}</li>
                <li :class="{ active:  currentDay === 'Пятница'}" class="working-hours-item">{{$t('footer_time.frid')}}</li>
                <li :class="{ active:  currentDay === 'Суббота'}" class="working-hours-item">{{$t('footer_time.satur')}}</li>
                <li :class="{ active:  currentDay === 'Воскресение'}" class="working-hours-item">{{$t('footer_time.sund')}}</li>
              </ul>
            </div>
          </b-col>
          <b-col lg="4">
            <div class="index-address">
              <h4 class="index-address-heading">{{$t('footer_time.address')}}</h4>
              <span class="index-address-text">{{$t('footer_info.address')}}</span>
              <a href="tel:+998999276993" class="index-address-phone">+99899 927 69 93</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
      </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение']
    }
  },
  computed: {
    currentDay () {
      const cuttentDayIndex = new Date().getDay();
      return this.days[cuttentDayIndex  - 1]
    }
  }
}
</script>