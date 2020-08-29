<template>
  <div>
    <div class="lawyer-profile-wrapper">
      <b-container>
        <div class="lawyer-profile">
          <b-row>
            <b-col lg="4" md="12">
              <div class="lawyer-image-wrapper">
                <img src="../assets/images/lawyer-profile/lawyer.jpg" height="258" width="258" alt="">
                <div class="lawyer-profile-rank">
                  <vue-stars class="lawyer-profile__star" name="rate" active-color="#FFC805" inactive-color="#282932" shadow-color="#FFC805" hover-color="#00aced" :max="5" :value="3" :readonly="false" char="★" />
                </div>
              </div>
            </b-col>
            <b-col lg="4" md="12">
              <div class="profile-info">
                <span class="profile-info-name">John Smith</span>
                <span class="profile-info-location">Toshkent Shahri</span>
                <span class="profile-info-number">998 00 000 00 00</span>
                <span class="profile-info-email">example.@mail.ru</span>
              </div>
            </b-col>
            <b-col lg="4" md="12">
              <div class="lawyer-profile-text">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sem massa lectus tortor
                feugiat sagittis auctor porta
                penatibus.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sem massa
                lectus tortor feugiat sagittis auctor porta
                penatibus.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
                Sem massa lectus tortor feugiat sagittis auctor porta penatibus.Lorem ipsum
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>
