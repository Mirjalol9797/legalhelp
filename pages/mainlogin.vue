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
    };
  },
  methods: {
    async redirection() {
      this.$router.push(this.localePath({ name: "signin" }));
    },
    async redirecttolawyer() {
      this.$router.push(this.localePath({ name: "lawyerlogin" }));
    }
  }
};
</script>

