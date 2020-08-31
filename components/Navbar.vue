<template>
  <div>
    <div class="navbar__wrapper navbar__dark">
      <div class="container">
        <b-navbar toggleable="xl">
          <b-navbar-brand href="#">
            <div class="navbar__logo">
              <img src="../assets/images/Ресурс 15.png" alt />
              <span class="legaltech">LegalTech</span>
            </div>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="align-items-center">
              <b-nav-item href="#" class="nav__link">Yangiliklar</b-nav-item>
              <b-nav-item href="#" class="nav__link">Savollar</b-nav-item>
              <b-nav-item href="#" class="nav__link">Yuristlar</b-nav-item>
              <b-nav-item href="#" class="nav__link">Xizmatlar</b-nav-item>
              <b-nav-item href="#">
                <b-button class="header__btn">Savol bering</b-button>
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="search__part">
              <b-nav-form class="header__form">
                <b-form-input size="sm" class="mr-sm-2 navbar__search" placeholder="Qidirish"></b-form-input>
              </b-nav-form>

              <b-nav-item-dropdown text="Lang" right class="language__list">
                <b-dropdown-item href="#">UZ</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">EN</b-dropdown-item>
              </b-nav-item-dropdown>
              <nuxt-link to="">
                 <nuxt-link to="" class="user__link">
                <img src="../assets/images/index/user.png" alt="">
              </nuxt-link>
              </nuxt-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <!-- /.navbarwrapper -->
    </div>
  </div>
</template>