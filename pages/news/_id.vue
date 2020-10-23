<template>
  <div>
    <div class="lawyer__wrapper">
      <div class="container">
        <h1 class="lawyer__heading">Yangiliklar</h1>
        <div class="lawyer__inner">
          <div
            class="lawyer__text-heading" v-html="post.intro"
          ></div>
          <div class="lawyer__text-description">{{post.description}}</div>
          <img  :src="$store.state.mediaURL + post.thubmnail" alt class="lawyer__section-img" />
          <div
            class="lawyer__text"
            v-html="post.content"
          ></div>
          </div>
        <!-- /.lawyer__inner -->
      </div>
    </div>
    <!-- /.lavyer__wrapper -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      post: [],
    };
  },
  computed: {

  },
  methods: {
    async getSinglePost() {
      await this.$axios.get(`posts/${this.$route.params.id}/`)
      .then(res => {
        this.post = res.data;
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.getSinglePost();
  }
};
</script>