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
              <b-nav-item :to="localePath('/forlawyers')" class="nav__link">{{
                $t("navbar.forlawyers")
              }}</b-nav-item>
              <b-nav-item href="#">
                <b-button
                  class="header__btn"
                  :to="localePath('/askquestions')"
                  v-if="loggedIn"
                  >{{ $t("navbar.askquestions") }}</b-button
                >
                <b-button v-else class="header__btn" :to="localePath('/reg')">{{
                  $t("navbar.askquestions")
                }}</b-button>
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="search__part">
              <b-nav-form class="header__form">
                <b-form-input
                  size="sm"
                  class="mr-sm-2 navbar__search"
                  :placeholder="$t('navbar.search')"
                ></b-form-input>
              </b-nav-form>

              <b-nav-item-dropdown text="Lang" right class="language__list">
                <b-dropdown-item @click="changeLanguage('uz')"
                  >UZ</b-dropdown-item
                >
                <b-dropdown-item @click="changeLanguage('ru')"
                  >RU</b-dropdown-item
                >
              </b-nav-item-dropdown>
              <b-nav-item-dropdown 
                class="user__login"
              >
                <template v-slot:button-content>
                  <div class="round">
                    <div  class="user__link">
                      <img src="../assets/images/avatar.png" alt="" />
                    </div>
                    
                  </div>
                </template>
                <b-dropdown-item :to="localePath('/selectuser')" v-if="!loggedIn"
                  >{{$t('user.signup')}}</b-dropdown-item
                >

                <b-dropdown-item :to="localePath('/signin')" v-if="!loggedIn"
                  >{{$t('user.entrance')}}</b-dropdown-item
                >
                <b-dropdown-item :to="localePath('/profile')" v-if="loggedIn && $auth.user.is_customer">
                  <font-awesome-icon :icon="['fas', 'address-card']" />{{$t('user.mypage')}}</b-dropdown-item
                >
                <b-dropdown-item :to="localePath('/')" v-if="loggedIn && $auth.user.is_customer">
                  <font-awesome-icon :icon="['fas', 'star']" />{{$t('user.select')}}</b-dropdown-item
                >
                <b-dropdown-item :to="localePath('/')" v-if="loggedIn && $auth.user.is_customer">
                  <font-awesome-icon :icon="['fas', 'bell']" />{{$t('user.notifications')}}
                  </b-dropdown-item
                >
                <b-dropdown-item href="tel:+998946863999" v-if="loggedIn && $auth.user.is_customer">
                  <font-awesome-icon :icon="['fas', 'phone']" />{{$t('user.phone')}}</b-dropdown-item
                >
                <b-dropdown-item :to="localePath('/signin')" v-if="loggedIn && $auth.user.is_customer">
                  <font-awesome-icon :icon="['fas', 'file']" />{{$t('user.document')}}</b-dropdown-item
                >
                <b-dropdown-item
                  :to="localePath('')"
                  @click="logout()"
                  v-if="loggedIn"
                >
                  <font-awesome-icon :icon="['fas', 'sign-out-alt']" />{{$t('user.exit')}}
                  </b-dropdown-item
                >
              </b-nav-item-dropdown>
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
  data(){
    return{
    }
  },
  computed: {
    ...mapState("auth", ["loggedIn", "user"]),
  },
  methods: {
    changeLanguage(lang) {
      this.$router.push(this.switchLocalePath(lang));
    },
    async logout() {
      await this.$auth.logout();
      this.$router.push(this.localePath("/"));
      this.$toast.success({
        title: "Log out",
        message: "You have successfully logged out.",
        color: "#17b978",
      });
    },
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
  },
};
</script>