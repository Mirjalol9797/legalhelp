<template>
  <div>
    <div class="lawyer-profile-wrapper">
      <b-container>
        <div class="lawyer-profile">
          <b-row>
            <b-col lg="4" md="12">
              <div class="lawyer-image-wrapper">
                <img src="../../assets/images/lawyer-profile/lawyer.jpg" height="258" width="258" alt />
                <div class="lawyer-profile-rank">
                  <vue-stars
                    class="lawyer-profile__star"
                    name="rate"
                    active-color="#FFC805"
                    inactive-color="#282932"
                    shadow-color="#FFC805"
                    hover-color="#00aced"
                    :max="5"
                    :value="3"
                    :readonly="false"
                    char="★"
                  />
                </div>
                <div class="btn-group shadow rounded-circle cost__lawyer-work">
                  <button class="btn btn-sm btn-primary btn-circle btn-icon">
                    <span class="btn-inner--icon">
                      <font-awesome-icon :icon="['fas','credit-card']" />
                    </span>
                    <span class="btn-inner--text">Xizmat narxi:</span>
                  </button>

                  <button class="btn btn-sm btn-dark btn-circle">75 000 so`m</button>
                </div>
                <div class="list-group list-group-sm list-group-flush">
                  <a
                    href="#"
                    class="list-group-item list-group-item-action d-flex justify-content-between"
                  >
                    <div>
                      <font-awesome-icon :icon="['fas','list-ul']" />
                      <span>Maqolalari</span>
                    </div>
                    <div>
                      <font-awesome-icon :icon="['fas','angle-right']" />
                    </div>
                  </a>
                  <a
                    href="#"
                    class="list-group-item list-group-item-action d-flex justify-content-between"
                  >
                    <div>
                      <font-awesome-icon :icon="['fas','comment']" />
                      <span>Javoblari</span>
                    </div>

                    <div>
                      <font-awesome-icon :icon="['fas','angle-right']" />
                    </div>
                  </a>
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
          <b-row class="mt-5">
            <b-col lg="6">
              <div class="degree-wrapper">
                <div class="degree">Ilmiy darajasi</div>
                <div
                  class="graduated"
                >2016-yil. Bakalavr. Toshkent davlat yuridik universiteti - "Jinoiy-huquqiy faoliyat" yo'nalishi.</div>
              </div>
            </b-col>
            <b-col lg="6">
              <div class="activity-wrapper">
                <div class="activity-header">Ish faoliyati</div>
                <div
                  class="activity"
                >2016 –2018-yillar - «BUSINESS LEGAL ADVISERS» advokatlik firmasida advokat yordamchisi</div>
              </div>
            </b-col>
            <b-col lg="6">
              <div class="filed-work">
                <div class="filed-work-header">Huquq sohasi</div>
                <span class="btn mb-2 p-2 pl-3 pr-3 mr-3 s-span-style">
                    <font-awesome-icon :icon="['fas','home']" />Fuqarolik huquqi (umumiy masalalar) </span>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>
