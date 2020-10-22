<template>
  <div class="user__select-wrapper">
    <div class="user__select">
      <b-container>
        <div class="user__select-select">
          <div class="user__select-btn-wrapper">
            <b-button class="user__select-btn" @click="redirection"
              >Foydalanuvchi</b-button
            >
            <b-button class="user__select-btn" @click="redirecttolawyer"
              >Advokat</b-button
            >
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUser: true,
      isLawyer: true
    };
  },
  methods: {
    async redirection() {
      if (this.isUser) {
        this.$router.push(this.localePath({ name: "reg" }));
      }
    },
    async redirecttolawyer() {
      if (this.isLawyer) {
        this.$router.push(this.localePath({ name: "forlawyers" }));
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
