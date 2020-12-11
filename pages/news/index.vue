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
                <div class="main__news-img">
                  <img
                    :src="$store.state.mediaURL + singlePost.thubmnail"
                    height="380"
                    width="702"
                    alt=""
                  />
                </div>
              </nuxt-link>
            </b-col>
            <b-col lg="6">
              <nuxt-link
                :to="localePath(`/news/${singlePost.id}`)"
                class="content-link"
              >
                <div class="news__content">
                  <h6 class="news__title">{{ singlePost.title }}</h6>
                  <div class="news__text" v-html="singlePost.description"></div>
                  <div class="news__meta">
                    <span class="news__meta-calendar">{{
                      singlePost.created_at | moment("L")
                    }}</span>
                    <span class="news__meta-view">{{singlePost.view_count}}</span>
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
                  <div class="news__item-img">
                    <img
                      :src="$store.state.mediaURL + item.thubmnail"
                      height="185"
                      width="362"
                      alt=""
                    />
                  </div>
                  <div class="news__item-content">
                    <h6 class="news__item-content-title">{{ item.title }}</h6>
                    <p
                      class="news__item-content-text"
                      v-html="item.description"
                    ></p>
                    <div class="news__item-content-meta">
                      <span class="news__item-content-meta-calendar">{{
                        singlePost.created_at | moment("L")
                      }}</span>
                      <span class="news__item-content-meta-view">{{
                        item.view_count
                      }}</span>
                    </div>
                    <!-- <div class="more__btn">
                      <b-button type="button" class="question__btn">{{$t("news.more")}}</b-button>
                    </div> -->
                  </div>
                </nuxt-link>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="pagination__menu">
        <b-pagination
          pills
          hide-goto-end-buttons
          :per-page="10"
          v-model="page"
          :total-rows="allProduct"
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
      news: [],
      allProduct: 0,
      page: 1,
      currentPage: 1
    };
  },
  watch: {
    page: {
      handler: function() {
        this.getNews();
      }
    }
  },
  computed: {
    ...mapGetters(["news"]),
    singlePost() {
      return this.news[0];
    }
  },
  methods: {
    async getNews() {
      console.log(this.page);
      await this.$axios
        .get(`posts/?limit=10&offset=${(this.page - 1) * 10}`)
        .then(res => {
          console.log(res);
          if (res.data.results.length > 0) {
            this.allProduct = res.data.count;
            this.news = res.data.results;
          } else {
            this.news = [];
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // created() {
  //   this.$store.dispatch("getNews").then(() => {
  //   });
  // },
  mounted() {
    this.getNews();
  }
};
</script>
