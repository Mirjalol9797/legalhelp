<template>
  <div>
    <div class="profile-outer">
      <b-container>
        <div class="profile-inner">
          <div class="owner-pic">
            <img
              src="../assets/images/lawyer-card/member2.jpg"
              height="170"
              width="264"
              alt=""
            />
          </div>
          <div class="profile-info">
            <span class="profile-info-name">John Smith</span>
            <span class="profile-info-location">Toshkent Shahri</span>
            <span class="profile-info-number">998 00 000 00 00</span>
            <span class="profile-info-email">example.@mail.ru</span>
          </div>
        </div>
        <div class="user__profile-card">
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab active>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'comment']"/></span
                  ><span class="user__profile-card-text">Savollarim</span>
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text></b-card-text
              ></b-tab>

              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'phone']"/></span
                  ><span class="user__profile-card-text"
                    >Telefon konsultatsiya</span
                  >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text
                  ><a href="tel:+998946863999" class="user__profile-card-phone">
                    Biz bilan hoziroq bog'lanishingiz mumkin.<br />Tel:
                    <span>+998946863999</span>
                  </a>
                </b-card-text></b-tab
              >
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'file']"/></span
                  ><span class="user__profile-card-text"
                    >Hujjat buyurtmalarim</span
                  >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text>Tab contents 1</b-card-text></b-tab
              >
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'bell']"/></span
                  ><span class="user__profile-card-text">Bildirishnomalar</span>
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text>Tab contents 1</b-card-text></b-tab
              >
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'cogs']"/></span
                  ><span class="user__profile-card-text">Sozlash</span>
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text>
                  <div class="user__profile-card-info">
                    <b-col md="12">
                      <p>Rasm</p>
                      <label for="image">
                        <img
                          src="../assets/images/avatar.png"
                          alt=""
                          class="avatar__image"
                        />
                        <input
                          type="file"
                          placeholder="Faylni tanlash"
                          id="image"
                          class="avatar__input"
                        />
                      </label>
                    </b-col>
                    <b-col lg="12">
                      <form action="" method="POST">
                        <b-col lg="6">
                          <label for="user__profile-name">Ism</label>
                          <input type="text" id="user__profile-name">
                        </b-col>
                        <b-col lg="6">
                          <label for="user__profile-surname">Familya</label>
                          <input type="text" id="user__profile-surname">
                        </b-col>
                        <b-col lg="6">
                          <label for="user__profile-lang">Foydalasnish tili</label>
                          <input type="text">
                        </b-col>
                        <b-col lg="6">

                        </b-col>
                        <b-col lg="6">

                        </b-col>
                        <b-col lg="6">
                          <label for="user__profile-email">Email</label>
                        </b-col>
                      </form>
                    </b-col>
                  </div> </b-card-text
              ></b-tab>
            </b-tabs>
          </b-card>
        </div>
      </b-container>
    </div>
  </div>
</template>
