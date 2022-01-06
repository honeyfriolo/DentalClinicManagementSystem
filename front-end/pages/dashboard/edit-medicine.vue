<template>
  <div v-if="isAuthenticated">
          <div class="bg-black h-8"></div>
  <div class="flex">
    <Sidemenu />

   <div class="w-9/12 mx-auto">
      <h3 class="italic uppercase mt-5 border-b block">Add Medicine</h3>

      <!-- Forms -->
      <div class="py-10">
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700 text-xs
                  font-bold
                  mb-2
                "
                for="medicine-name"
              >
                Medicine Name
              </label>
              <input
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                id="medicine-name"
                type="text"
                placeholder="Mefenamic"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700 text-xs
                  font-bold
                  mb-2
                "
                for="description"
              >
                Description
              </label>
              <input
                class="
                  appearance-none
                  block
                  w-full
                  bg-gray-200
                  text-gray-700
                  border border-gray-200
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none focus:bg-white focus:border-gray-500
                "
                id="description"
                type="text"
                placeholder="Pain Reliever"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="
                  block
                  uppercase
                  tracking-wide
                  text-gray-700 text-xs
                  font-bold
                  mb-2
                "
                for="stock-status"
              >
                Stock Status
              </label>
              <div class="relative">
                <select
                  class="
                    block
                    appearance-none
                    w-full
                    bg-gray-200
                    border border-gray-200
                    text-gray-700
                    py-3
                    px-4
                    pr-8
                    rounded
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  id="stock-status"
                >
                  <option>Available</option>
                  <option>Not Available</option>
                </select>
                <div
                  class="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    px-2
                    text-gray-700
                  "
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Buttons -->
      <div class="flex pl-24">
        <NuxtLink to="/dashboard/inventory"
          class="
            bg-red-500
            hover:bg-red-700
            text-white
            font-bold
            py-2
            px-14
            rounded-tl-lg rounded-bl-lg
            uppercase
            mt-5
          "
        >
          cancel
        </NuxtLink>
        <button
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-16
            rounded-tr-lg rounded-br-lg
            uppercase
            block
            mt-5
          "
        >
          update
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import Pagination from "../../components/Pagination.vue";
export default {
  middleware: "auth",
//   components: { Pagination },
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