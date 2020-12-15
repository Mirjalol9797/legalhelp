<template>
  <div>
    <div class="navbar__wrapper navbar__dark mx-auto" id="nav">
      <div class="container">
        <b-navbar toggleable="xl" class="sticky-nav">
          <b-navbar-brand :to="localePath('/')">
            <div class="navbar__logo">
              <img src="../assets/images/Ресурс 15.png" alt />
              <span class="legaltech">LegalHelp</span>
            </div>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="align-items-center">
              <b-nav-item :to="localePath('/news')" class="nav__link">{{
                $t("navbar.news")
              }}</b-nav-item>
              <b-nav-item :to="localePath('/questions')" class="nav__link">{{
                $t("navbar.questions")
              }}</b-nav-item>
              <b-nav-item :to="localePath('/lawyers')" class="nav__link">{{
                $t("navbar.lawyers")
              }}</b-nav-item>
              <b-nav-item :to="localePath('/our-service')" class="nav__link">{{
                $t("navbar.services")
              }}</b-nav-item>
              <b-nav-item :to="localePath('/lawyer_reg')" class="nav__link">
                {{$t("navbar.for_lawyers")}}
              </b-nav-item>
              
              <b-nav-item href="#">
                <b-button
                  class="header__btn"
                  :to="localePath('/askquestions')"
                  v-if="loggedIn && $auth.user.is_customer"
                  >{{ $t("navbar.askquestions") }}</b-button
                >
                <b-button
                  class="header__btn d-none"
                  :to="localePath('/askquestions')"
                  v-else-if="loggedIn && $auth.user.is_lawyer"
                  >{{ $t("navbar.askquestions") }}</b-button
                >
                <b-button v-else class="header__btn" :to="localePath('/reg')">{{$t("navbar.askquestions")}}</b-button>
              </b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="search__part">
              <!-- <b-nav-form class="header__form">
                <b-form-input
                  size="sm"
                  class="mr-sm-2 navbar__search"
                  :placeholder="$t('navbar.search')" 
                ></b-form-input>
              </b-nav-form>     -->
              <b-nav-item-dropdown :text="text" right class="language__list">
                <template v-slot:button-content>
                    <img class="lang__img" :src="require(`@/assets/images/${src}`)" alt="eng">
<!--                      <span style="vertical-align: middle;">{{ isActive }}</span>-->
                </template>
                <b-dropdown-item @click="changeLanguage('uz', 'uzbekistan.svg')">
                  <img src="../assets/images/uzbekistan.svg" alt="">
                </b-dropdown-item>
                <b-dropdown-item @click="changeLanguage('ru', 'russia.svg')">
                  <img src="../assets/images/russia.svg" alt="">
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <nuxt-link v-if="!loggedIn" :to="localePath('/signin')" class="user__enter-site">Kirish</nuxt-link>
              <b-nav-item-dropdown class="user__login">
                <template  v-if="loggedIn" v-slot:button-content>
                  <div class="round">
                    <div class="user__link">
                      <img src="../assets/images/avatar.png" alt="" />
                    </div>
                  </div>
                </template> 
                <b-dropdown-item :to="localePath('/reg')" v-if="!loggedIn">
                  {{$t("user.signup")}}
                </b-dropdown-item>
                <!-- <b-dropdown-item
                  :to="localePath('/mainlogin')"
                  v-if="!loggedIn"
                  >{{ $t("user.entrance") }}
                </b-dropdown-item> -->
                <b-dropdown-item
                  :to="localePath('/customer-profile')"
                  v-if="loggedIn && $auth.user.is_customer"
                >
                  <font-awesome-icon :icon="['fas', 'address-card']" />
                  {{ $t("user.mypage") }}
                </b-dropdown-item>
                <!-- <b-dropdown-item
                  :to="localePath('/')"
                  v-if="loggedIn && $auth.user.is_customer"
                >
                  <font-awesome-icon :icon="['fas', 'star']" />
                  {{ $t("user.select") }}
                </b-dropdown-item> -->
                <!-- <b-dropdown-item
                  :to="localePath('/')"
                  v-if="loggedIn && $auth.user.is_customer"
                >
                  <font-awesome-icon :icon="['fas', 'bell']" />
                  {{ $t("user.notifications") }}
                </b-dropdown-item> -->
                <!-- <b-dropdown-item
                  href="tel:+998946863999"
                  v-if="loggedIn && $auth.user.is_customer"
                >
                  <font-awesome-icon :icon="['fas', 'phone']" />
                  {{ $t("user.phone") }}</b-dropdown-item
                > -->
                <!-- <b-dropdown-item
                  :to="localePath('/signin')"
                  v-if="loggedIn && $auth.user.is_customer"
                >
                  <font-awesome-icon :icon="['fas', 'file']" />
                  {{ $t("user.document") }}
                </b-dropdown-item> -->
                <b-dropdown-item
                  :to="localePath('')"
                  @click="logout()"
                  v-if="loggedIn"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'sign-out-alt']" /> -->
                  <img src="../assets/images/profil/sign-out-alt.svg" alt="" />
                  {{ $t("user.exit") }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown class="user__login">
                <template  v-if="loggedIn && $auth.user.is_lawyer" v-slot:button-content>
                  <div class="round">
                    <div class="user__link">
                      <img src="../assets/images/avatar.png" alt="" />
                    </div>
                  </div>
                </template> 
                <b-dropdown-item :to="localePath('/reg')" v-if="!loggedIn">
                  {{$t("user.signup")}}
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('/lawyer-profile')"
                  v-if="loggedIn && $auth.user.is_lawyer"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'address-card']" /> -->
                  <img src="../assets/images/profil/address.svg" alt="" />
                  {{ $t("user.mypage") }}
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('/signin')"
                  v-if="loggedIn && $auth.user.is_lawyer"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  <img src="../assets/images/user/article.svg" alt="" />
                  <!-- {{
                    $t("user.document")
                  }} -->
                  Maqolalarim
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('/signin')"
                  v-if="loggedIn && $auth.user.is_lawyer"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  <img src="../assets/images/user/google-docs.svg" alt="" />
                  <!-- {{
                    $t("user.document")
                  }} -->
                  Hujjat buyurtma takliflar
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('/signin')"
                  v-if="loggedIn && $auth.user.is_lawyer"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  <img src="../assets/images/user/financial.svg" alt="" />
                  <!-- {{
                    $t("user.document")
                  }} -->
                  Puli tulangan hujjat takliflar
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('/signin')"
                  v-if="loggedIn && $auth.user.is_lawyer"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  <img src="../assets/images/user/folder.svg" alt="" />
                  <!-- {{
                    $t("user.document")
                  }} -->
                  Hujjatlar arxivi
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('/signin')"
                  v-if="loggedIn && $auth.user.is_lawyer"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  <img src="../assets/images/user/help.svg" alt="" />
                  <!-- {{
                    $t("user.document")
                  }} -->
                  Savollar
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('/signin')"
                  v-if="loggedIn && $auth.user.is_lawyer"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  <img src="../assets/images/user/bitcoin.svg" alt="" />
                  <!-- {{
                    $t("user.document")
                  }} -->
                  Puli tulangan savollar
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('/signin')"
                  v-if="loggedIn && $auth.user.is_lawyer"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'file']" /> -->
                  <img src="../assets/images/user/question.svg" alt="" />
                  <!-- {{
                    $t("user.document")
                  }} -->
                  Savollar arxivi
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('')"
                  @click="logout()"
                  v-if="loggedIn"
                >
                  <!-- <font-awesome-icon :icon="['fas', 'sign-out-alt']" /> -->
                  <img src="../assets/images/profil/sign-out-alt.svg" alt="" />
                  {{ $t("user.exit") }}
                </b-dropdown-item>
              </b-nav-item-dropdown>              
              <!-- <b-nav-form>
                <b-button @click="isActive = !isActive" class="search__btn"></b-button>
                <b-form-input 
                  class="open__search-do"
                  :class="{ open__search: isActive }"
                  :placeholder="$t('navbar.search')"
                >
                </b-form-input>
                <div class="close__search">close</div>
              </b-nav-form> -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <!-- /.navbarwrapper -->
    </div>
  </div>
</template>
<script>
// export default {
//       window.onscroll = function() {
//     var navstic = document.getElementsByClassName('navbar__wrapper');
//     if ( window.pageYOffset > 100 ) {
//         navstic.classList.add("navbar1");
//     } else {
//         navstic.classList.remove("navbar1");
//     }
// }
// }
import { mapState } from "vuex";
export default {
  data() {
    return {
      src: 'uzbekistan.svg',
      text: '',
      isActive: 'false'
    }
  },
  computed: {
    ...mapState("auth", ["loggedIn", "user"])
  },
  methods: {
    changeLanguage(lang, src) {
      this.$router.push(this.switchLocalePath(lang));
      if(lang == 'uz') {
        this.src = src;
      } else {
        this.src = 'russia.svg'
      }
    },
    async logout() {
      await this.$auth.logout();
      this.$router.push(this.localePath("/"));
      this.$toast.success({
        title: "Log out",
        message: "You have successfully logged out.",
        color: "#17b978"
      });
    }
  },
  mounted() {
    // window.document.onscroll = () => {
    //     let navBar = document.getElementById('nav');
    //     if(window.scrollY > navBar.offsetTop){
    //       this.stikyNavbar = true;
    //       } else {
    //       this.stikyNavbar = false;
    //     }
    //   }
  }
};
</script>
