<template>
  <div>
    <div class="news__wrapper">
      <h1 class="news__heading">{{ $t("news.title") }}</h1>
      <div class="news__header">
        <b-container>
          <b-row v-if="singlePost">
            <b-col lg="6" class="px-0">
              <nuxt-link
                :to="localePath(`/news/${singlePost.id}`)"
                class="main__news-link"
              >
                <img
                  :src="$store.state.baseURL + singlePost.thubmnail"
                  height="380"
                  width="702"
                  alt=""
                />
              </nuxt-link>
            </b-col>
            <b-col lg="6">
              <nuxt-link
                :to="localePath(`/news/${singlePost.id}`)"
                class="content-link"
              >
                <div class="news__content">
                  <h6 class="news__title">{{ singlePost.title }}</h6>
                  <div class="news__text" v-html="singlePost.intro">
                  </div>
                  <div class="news__meta">
                    <span class="news__meta-calendar">{{
                      singlePost.created_at | moment("L")
                    }}</span>
                    <span class="news__meta-view">{{
                      singlePost.view_count
                    }}</span>
                  </div>
                </div>
              </nuxt-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="news__list">
        <b-container>
          <b-row>
            <b-col
              lg="4"
              md="6"
              sm="6"
              v-for="item of news.slice(1, 10)"
              :key="item.id"
              class="align-items-stretch"
            >
              <div class="news__item">
                <nuxt-link
                  :to="localePath(`/news/${item.id}`)"
                  class="news__item-link"
                >
                  <img
                    :src="$store.state.baseURL + item.thubmnail"
                    height="185"
                    width="362"
                    alt=""
                  />
                  <div class="news__item-content">
                    <h6 class="news__item-content-title">{{ item.title }}</h6>
                    <p class="news__item-content-text" v-html="item.intro">
                      
                    </p>
                    <div class="news__item-content-meta">
                      <span class="news__item-content-meta-calendar">{{
                        item.created_at
                      }}</span>
                      <span class="news__item-content-meta-view">{{
                        item.view_count
                      }}</span>
                    </div>
                    <div class="more__btn">
                      <b-button type="button" class="question__btn">{{
                        $t("news.more")
                      }}</b-button>
                    </div>
                  </div>
                </nuxt-link>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="pagination__menu">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          :first-text="$t('pagination.first')"
          :last-text="$t('pagination.last')"
        ></b-pagination>
      </div>
    </div>
    <!-- /.news__wrapper -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      rows: 100,
      perPage: 1,
      currentPage: 1
    };
  },
  computed: {
    ...mapGetters(["news"]),
    singlePost() {
      return this.news[0];
    }
  },
  methods: {
    // async getNews() {
    //   await this.$axios.get('posts/')
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    // }
  },
  created() {
    this.$store.dispatch("getNews").then(() => {
      console.log(this.news);
    });
  }
};
</script>
