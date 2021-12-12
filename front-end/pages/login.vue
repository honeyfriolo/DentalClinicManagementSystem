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
            <form class="w-full max-w-sm" method="post" @submit.prevent="login">
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  type="email"
                  class="p-2 l-auto w-full"
                  name="email"
                  v-model="email"
                  placeholder="Email"
                />
              </div>
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  type="password"
                  class="p-2 l-auto w-full"
                  name="password"
                  v-model="password"
                  placeholder="Password"
                />
              </div>
              <div class="mt-5">
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
                    mx-auto
                    block
                  "
                >
                  Log In
                </button>
              </div>
            </form>
            <div class="has-text-centered" style="margin-top: 20px">
              <p>
                No account?
                <nuxt-link
                  class="text-red-500 float-right font-bold hover:text-red-800"
                  to="/register"
                  >Create an account</nuxt-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
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
  background: url("~/static/bg/bg.jpg");
  background-size: 100% 100%;
}
</style>