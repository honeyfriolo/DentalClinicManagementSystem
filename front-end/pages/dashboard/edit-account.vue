<template>
  <div v-if="isAuthenticated">
     <div class="bg-black h-8"></div>
    <div class="flex relative">
      <Sidemenu />
      <div class="w-9/12 mx-auto">
        <h3 class="italic uppercase mt-5 border-b block">admin information</h3>
        <div>
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              float-right
            "
          >
            Save Info
          </button>
        </div>
        <div class="mt-8">
          <form class="w-full max-w-sm">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="
                    block
                    text-gray-500
                    font-bold
                    md:text-right
                    mb-1
                    md:mb-0
                    pr-4
                  "
                  for="email"
                >
                  Email
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="
                    bg-gray-200
                    appearance-none
                    border-2 border-gray-200
                    rounded
                    w-full
                    py-2
                    px-4
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-purple-500
                  "
                  id="inline-full-name"
                  type="text"
                  value="rubengerong@gmail.com"
                />
              </div>
            </div>

            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="
                    block
                    text-gray-500
                    font-bold
                    md:text-right
                    mb-1
                    md:mb-0
                    pr-4
                  "
                  for="Username"
                >
                  Username
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="
                    bg-gray-200
                    appearance-none
                    border-2 border-gray-200
                    rounded
                    w-full
                    py-2
                    px-4
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-purple-500
                  "
                  id="username"
                  type="text"
                  value="Admin"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="
                    block
                    text-gray-500
                    font-bold
                    md:text-right
                    mb-1
                    md:mb-0
                    pr-4
                  "
                  for="inline-password"
                >
                  Password
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="
                    bg-gray-200
                    appearance-none
                    border-2 border-gray-200
                    rounded
                    w-full
                    py-2
                    px-4
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-purple-500
                  "
                  id="inline-password"
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="
                    block
                    text-gray-500
                    font-bold
                    md:text-right
                    mb-1
                    md:mb-0
                    pr-4
                  "
                  for="inline-password"
                >
                  Re-Type Password
                </label>
              </div>
              <div class="md:w-2/3">
                <input
                  class="
                    bg-gray-200
                    appearance-none
                    border-2 border-gray-200
                    rounded
                    w-full
                    py-2
                    px-4
                    text-gray-700
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-purple-500
                  "
                  id="inline-password"
                  type="password"
                  placeholder="********"
                />
                
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="
          login
          absolute
          top-5
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
          bg-white
          p-1.5
          px-28
          rounded-2xl
          mt-16
          border border-black
        "
      >
        Updated Successfully!
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  middleware: "auth",
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>