<template>
  <div>
    <div class="navbar__wrapper navbar__dark mx-auto" id="nav">
      <div class="container">
        <b-navbar toggleable="xl" class="sticky-nav">
          <b-navbar-brand :to="localePath('/')">
            <div class="navbar__logo">
              <img src="../assets/images/legalhelp2.png" alt style="width: 110px" />
              <!-- <span class="legaltech">LegalHelp</span> -->
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
                >
                  {{ $t("navbar.askquestions") }}
                </b-button>
                <b-button
                  class="header__btn d-none"
                  :to="localePath('/askquestions')"
                  v-else-if="loggedIn && $auth.user.is_lawyer"
                  >
                    {{ $t("navbar.askquestions") }}
                </b-button>
                <b-button v-else class="header__btn" :to="localePath('/reg')">{{$t("navbar.askquestions")}}</b-button>
              </b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="search__part">
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
              <b-nav-item-dropdown class="user__login" v-if="loggedIn && $auth.user.is_customer ">
                <template v-slot:button-content>
                  <div class="round">
                    <div class="user__link">
                      <img :src="$store.state.mediaURL + $auth.user.image" alt="" />
                    </div>
                  </div>
                </template> 
                <!-- <b-dropdown-item :to="localePath('/reg')" v-if="!loggedIn">
                  {{$t("user.signup")}}
                </b-dropdown-item> -->
                <b-dropdown-item
                  :to="localePath('/customer-profile')"
                  v-if="loggedIn"
                >
                  <font-awesome-icon :icon="['fas', 'address-card']" />
                  {{ $t("user.mypage") }}
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
              <b-nav-item-dropdown class="user__login" v-if="loggedIn && $auth.user.is_lawyer">
                <template v-slot:button-content>
                  <div class="round">
                    <div class="user__link">
                      <img :src="$store.state.mediaURL + $auth.user.image" alt="" />
                    </div>
                  </div>
                </template> 
                <b-dropdown-item
                  :to="localePath('/lawyer-profile')"
                  v-if="loggedIn"
                >
                  <font-awesome-icon :icon="['fas', 'address-card']" />
                  {{ $t("user.mypage") }}
                </b-dropdown-item>
                <b-dropdown-item
                  :to="localePath('')"
                  @click="logout()"
                  v-if="loggedIn"
                >
                  <img src="../assets/images/profil/sign-out-alt.svg" alt="" />
                  {{ $t("user.exit") }}
                </b-dropdown-item>
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
    console.log("Auth",this.$auth.user)  
  }
};
</script>
