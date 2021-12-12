<template>
  <section class="section bg-dental h-screen">
    <div>
      <div>
        <div>
          <div
            class="text-center text-red-500 font-bold mt-5 text-xl"
            v-if="error"
          >
            {{ error }}
          </div>
          <div
            class="
              absolute
              top-1/3
              left-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
              border border-color
              bg-transparent
              p-5
              rounded-lg
              mt-16
              w-3/12
              shadow-2xl
            "
          >
            <form method="post" @submit.prevent="register">
              <div class="flex items-center border-b border-teal-500  py-2">
                <input
                  type="text"
                  class="p-2 l-auto w-full"
                  name="username"
                  v-model="username"
                  placeholder="Username"
                  required
                />
              </div>

              <div class="flex items-center border-b border-teal-500 py-2 text-black">
                <input
                  type="email"
                  class="p-2 l-auto w-full"
                  name="email"
                  v-model="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  type="password"
                  class="p-2 l-auto w-full"
                  name="password"
                  v-model="password"
                  placeholder="Password"
                  required
                />
              </div>

              <!-- <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  type="password"
                  class="p-2 l-auto w-full"
                  name="reTypepassword"
                  v-model="reTypepassword"
                  placeholder="Re-type Password"
                  required
                />
              </div> -->

              <div class="flex space-x-8 w-min mx-auto mt-5">
                <nuxt-link
                  to="/login"
                  class="
                    bg-red-500
                    hover:bg-red-700
                    text-white
                    font-bold
                    py-3
                    px-10
                    rounded-full
                  "
                >
                  Cancel</nuxt-link>

                <button
                  type="submit"
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    py-3
                    px-10
                    rounded-full
                  "
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: "guest",

  data() {
    return {
      username: "",
      email: "",
      password: "",
      reTypepassword: "",
      error: null,
    };
  },

  methods: {
    async register() {
      try {
        await this.$axios.post("register", {
          username: this.username,
          email: this.email,
          password: this.password,
          reTypepassword: this.reTypepassword,
        });

        console.log("register");

        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });

        this.$router.push("/login");
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-dental {
  background: url("~/static/bg/bg.jpg");
  background-size: 100% 100%;
}
</style>