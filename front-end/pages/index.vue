<template>
  <div>
    <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
      <a class="navbar-item" @click="logout">Logout</a>

      mao ni home
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>