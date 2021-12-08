<template>
  <div>
    <div
      class="
        login
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        bg-white
        p-8
        rounded-lg
        mt-16
      "
    >
      <form method="post" @submit.prevent="login">
        <input
          type="text"
          name="username"
          v-model="loginUser.username"
          placeholder="Username"
          class="border-b block border-black p-3 w-full"
        />
        <input
          type="password"
          name="password"
          v-model="loginUser.password"
          placeholder="Password"
          class="border-b block border-black p-3 mt-5 w-full"
        />

        <button
          type="submit"
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-16
            rounded-full
            uppercase
            block
            mx-auto
            mt-5
          "
        >
          log in
        </button>
        <div class="flex">
          <span class="block mt-5">No account?</span>
          <NuxtLink
            to="/register"
            class="
              hover:text-green-900
              text-black
              font-bold
              mx-auto
              mt-5
              text-yellow-600
              ml-5
            "
          >
            Create an account
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "guest",
  data() {
    return {
      loginModal: true, //loginModal ma view
      registerModal: false, //register kay hide pa
      loading: false,

      loginUser: {
        username: "",
        password: "",
        error: null,
      },
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.loginUser.email,
            password: this.loginUser.password,
          },
        });

        this.$router.push("/dashboard/patients");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },

    
  },
};
</script>
 

<style lang="scss" scoped>
.bg-dental {
  background: url("~/static/bg/dentalbg.jpg");
  background-size: 100% 100%;
}
</style>