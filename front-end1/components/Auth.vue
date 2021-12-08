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
      v-if="loginModal"
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
          <button
            class="
              hover:text-green-900
              text-black
              font-bold
              mx-auto
              mt-5
              text-yellow-600
              ml-5
            "
            @click="toggleAuth()"
          >
            Create an account
          </button>
        </div>
      </form>
    </div>
    <!-- REGISTER PART -->
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
      v-if="registerModal"
    >
      <div class="notification is-danger" v-if="error">
        {{ error }}
      </div>

      <form method="post" @submit.prevent="register">
        <input
          type="email"
          name="email"
          v-model="users.email"
          placeholder="Email"
          class="border-b block border-black pb-3 w-full p-2"
          required
        />
        <input
          type="text"
          name="username"
          v-model="users.username"
          placeholder="Username"
          class="border-b block border-black pb-3 mt-5 w-full p-2"
          required
        />
        <input
          type="password"
          name="password"
          v-model="users.password"
          placeholder="Password"
          class="border-b block border-black pb-3 mt-5 w-full p-2"
          required
        />
        <input
          type="password"
          name="password"
          v-model="users.reTypePassword"
          placeholder="Re-type Password"
          class="border-b block border-black pb-3 mt-5 w-full p-2"
          required
        />

        <div class="flex gap-2">
          <button
            class="
              bg-red-500
              hover:bg-red-700
              text-white
              font-bold
              py-2
              px-16
              rounded-full
              uppercase
              mx-auto
              mt-5
            "
            @click="toggleAuth()"
          >
            CANCEL
          </button>
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
            sign up
          </button>
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

      users: {
        email: "",
        username: "",
        password: "",
        reTypePassword: "",
        error: null,
      },

      loginUser: {
        username: "",
        password: "",
        error: null,
      },
    };
  },

  methods: {
    async register() {
      try {
        await this.$axios.post("register", {
          email: this.users.email,
          username: this.users.username,
          password: this.users.password,
          reTypePassword: this.users.reTypePassword,
        });

        await this.$auth.loginWith("local", {
          data: {
            email: this.users.email,
            password: this.users.password,
          },
        });

        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },

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

    toggleAuth() {
      this.loginModal = !this.loginModal; //ma reverse siya
      this.registerModal = !this.registerModal; // reverse siya or baik
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