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
      <form action="">
        <input
          type="text"
          id="username"
          name="username"
          value=""
          placeholder="Username"
          class="border-b block border-black p-3 w-full"
        />
        <input
          type="password"
          id="password"
          name="password"
          value=""
          placeholder="Password"
          class="border-b block border-black p-3 mt-5 w-full"
        />

        <button
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
      <form action="">
        <input
          type="email"
          id="email"
          name="email"
          value=""
          placeholder="Email"
          class="border-b block border-black pb-3 w-full p-2"
          \
        />
        <input
          type="text"
          id="username"
          name="username"
          value=""
          placeholder="Username"
          class="border-b block border-black pb-3 mt-5 w-full p-2"
        />
        <input
          type="password"
          id="password"
          name="password"
          value=""
          placeholder="Password"
          class="border-b block border-black pb-3 mt-5 w-full p-2"
        />
        <input
          type="password"
          id="re-type-password"
          name="password"
          value=""
          placeholder="Re-type Password"
          class="border-b block border-black pb-3 mt-5 w-full p-2"
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
  data() {
    return {
      loginModal: true, //loginModal ma view
      registerModal: false, //register kay hide pa
    };
  },
  methods: {
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