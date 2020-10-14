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
              alt
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
                    <font-awesome-icon :icon="['fas', 'comment']" />
                  </span>
                  <span class="user__profile-card-text">Savollarim</span>
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text>
                  <div class="user__profile-question">
                    <nuxt-link class="user__profile-question-title" to="">
                      Vitae enim quae Nam
                    </nuxt-link>
                    <p class="user__profile-question-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus, facilis esse! Non, magni harum quam vero ut
                      corporis recusandae perferendis assumenda tempora
                      blanditiis a quidem nostrum voluptas quo minus suscipit!
                    </p>
                      <div class="user__profile-question-info">
                        <div class="answer"><font-awesome-icon :icon="['fas', 'comment']" /> Javoblar <span class="counter">11</span></div>
                        <span class="user"><font-awesome-icon :icon="['fas', 'user']" /> Halimov Navruz</span>
                        <span class="calendar">26.09.2020, 09:54</span>
                        <span class="location"><font-awesome-icon :icon="['fas', 'map-marker']" />Buxoro</span>
                                              </div>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                  </span>
                  <span class="user__profile-card-text"
                    >Telefon konsultatsiya</span
                  >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text>
                  <a href="tel:+998946863999" class="user__profile-card-phone">
                    Biz bilan hoziroq bog'lanishingiz mumkin.
                    <br />Tel:
                    <span>+998946863999</span>
                  </a>
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'file']" />
                  </span>
                  <span class="user__profile-card-text"
                    >Hujjat buyurtmalarim</span
                  >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text>
                  <div class="user__profile-documents">
                    <div class="user__profile-documents-header">
                      <span class="user__profile-documents-title">
                        0 Takliflar</span
                      >
                      <b-col lg="3">
                        <div class="user__profile-documents-price">
                          <b>190 000 so`m</b><span>savol <br />narxi</span>
                        </div>
                      </b-col>
                      <b-col lg="4"
                        ><div class="user__profile-documents-user">
                          <font-awesome-icon :icon="['fas', 'user']" /> Jismoniy
                          shaxs
                        </div>
                      </b-col>
                      <b-col lg="2"
                        ><b-button
                          type="button"
                          class="user__profile-documents-payment"
                          ><font-awesome-icon
                            :icon="['fas', 'credit-card']"
                            style="margin-right:5px;"
                          />To'lash</b-button
                        >
                      </b-col>
                      <b-col lg="2">
                        <b-button
                          type="button"
                          class="user__profile-documents-delete"
                          ><font-awesome-icon
                            :icon="['fas', 'trash']"
                            style="margin-right:5px;"
                          />O'chirish</b-button
                        ></b-col
                      >
                    </div>
                  </div>
                  <div class="user__profile-documents-info">
                    <div class="title">
                      DAN xodimi harakati yuzasidan  shikoyat
                    </div>
                    <span class="calendar">12:54, 26.09.2020</span>
                    <div class="text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Amet, natus!
                    </div>
                  </div>
                  <div class="user__profile-documents-category">
                    <div class="filed-work">
                      <div class="field-work-header">Huquq sohasi</div>
                      <span class="btn mb-2 p-2 pl-3 pr-3 mr-3 s-span-style ">
                        <font-awesome-icon :icon="['fas', 'home']" />
                        Fuqarolik huquqi (umumiy masalalar)
                      </span>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'bell']" />
                  </span>
                  <span class="user__profile-card-text">Bildirishnomalar</span>
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text>Tab contents 1</b-card-text>
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <span class="user__profile-card-icon">
                    <font-awesome-icon :icon="['fas', 'cogs']" />
                  </span>
                  <span class="user__profile-card-text">Sozlash</span>
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </template>
                <b-card-text>
                  <div class="user__profile-card-info">
                    <b-row>
                      <b-col md="12">
                        <form action method="POST" class="user__profile-form">
                          <b-row>
                            <b-col md="12">
                              <p>Rasm</p>
                              <label for="image">
                                <img
                                  src="../assets/images/avatar.png"
                                  alt
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
                            <b-col lg="6">
                              <label for="user__profile-name">Ism</label>
                              <input type="text" id="user__profile-name" />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-surname">Familya</label>
                              <input type="text" id="user__profile-surname" />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-lang"
                                >Foydalanish tili</label
                              >
                              <select name id="select__user-lang">
                                <option value="1">O'zbek</option>
                                <option value="2">Rus</option>
                              </select>
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-email">Email</label>
                              <input type="email" id="user__profile-email" />
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-city">Shahar</label>
                              <select name id="user__profile-city">
                                <option value="0" selected disabled>{{
                                  $t("region.noregion")
                                }}</option>
                                <option value="1">{{
                                  $t("region.toshkent")
                                }}</option>
                                <option value="2">{{
                                  $t("region.toshkentv")
                                }}</option>
                                <option value="3">{{
                                  $t("region.andijon")
                                }}</option>
                                <option value="4">{{
                                  $t("region.buxoro")
                                }}</option>
                                <option value="5">{{
                                  $t("region.jizzax")
                                }}</option>
                                <option value="6">{{
                                  $t("region.qoraqalpogistion")
                                }}</option>
                                <option value="7">{{
                                  $t("region.qashqadaryo")
                                }}</option>
                                <option value="8">{{
                                  $t("region.navoi")
                                }}</option>
                                <option value="9">{{
                                  $t("region.namangan")
                                }}</option>
                                <option value="10">{{
                                  $t("region.samarqand")
                                }}</option>
                                <option value="11">{{
                                  $t("region.surxondaryo")
                                }}</option>
                                <option value="12">{{
                                  $t("region.sirdaryo")
                                }}</option>
                                <option value="13">{{
                                  $t("region.fargona")
                                }}</option>
                                <option value="14">{{
                                  $t("region.xorazm")
                                }}</option>
                              </select>
                            </b-col>
                            <b-col lg="6">
                              <label for="user__profile-number"
                                >Telefon raqam</label
                              >
                              <input type="text" id="user__profile-number" />
                            </b-col>
                            <b-col lg="12">
                              <b-button type="submit"
                                ><font-awesome-icon
                                  :icon="['fas', 'save']"
                                  class="user__profile-submit-icon"
                                />Saqlash</b-button
                              >
                              <b-button type="submit"
                                ><font-awesome-icon
                                  :icon="['fas', 'times']"
                                  class="user__profile-submit-icon"
                                />Bekor qilish</b-button
                              >
                            </b-col>
                          </b-row>
                        </form>
                      </b-col>
                    </b-row>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </b-container>
    </div>
  </div>
</template>
