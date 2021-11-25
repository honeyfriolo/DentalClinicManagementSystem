<template>
  <div class="flex relative">
    <div class="bg-blue-300 w-2/12 h-screen pt-10">
      <button
        class="
          bg-transparent
          hover:bg-white hover:text-black
          text-black
          font-bold
          py-2
          px-4
          hover:border-transparent
          rounded
          block
          uppercase
          w-full w-full
        "
      >
        patients
      </button>
      <button
        class="
          bg-transparent
          hover:bg-white hover:text-black
          text-black
          font-bold
          py-2
          px-4
          hover:border-transparent
          rounded
          block
          uppercase
          w-full
        "
      >
        inventory
      </button>
      <button
        class="
          bg-transparent
          hover:bg-white hover:text-black
          text-black
          font-bold
          py-2
          px-4
          hover:border-transparent
          rounded
          block
          uppercase
          w-full
        "
      >
        settings
      </button>
      <button
        class="
          bg-transparent
          hover:bg-white hover:text-black
          text-black
          font-bold
          py-2
          px-4
          hover:border-transparent
          rounded
          block
          uppercase
          w-full
        "
      >
        logout
      </button>
    </div>


    <div class="w-9/12 mx-auto text-center mt-20">
    <!-- Search Bar -->
      <div
        class="relative flex w-80 h-9 float-right flex-wrap items-stretch mb-3"
      >
        <span
          class="
            z-10
            h-full
            leading-snug
            font-normal
            absolute
            text-center text-gray-400
            absolute
            bg-transparent
            rounded
            text-base
            items-center
            justify-center
            w-8
            pl-2
            py-1
          "
        >
          <i class="fas fa-search"></i>
        </span>
        <input
          type="text"
          placeholder="Search Medicine"
          class="
            px-2
            py-1
            placeholder-gray-400
            text-gray-600
            relative
            bg-white bg-white
            rounded-full
            text-sm
            border border-gray-400
            outline-none
            focus:outline-none focus:ring
            w-full
            pl-10
          "
        />
      </div>
      <!-- Table -->
      <table class="border border-black w-full">
        <thead>
          <tr class="h-10 text-center border border-black">
            <th class="w-56">Medicine Name</th>
            <th>Description</th>
            <th>Stock Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-10">
            <td>Chlorhexidine</td>
            <td>Antibiotic</td>
            <td>Available</td>
          </tr>
          <tr class="h-10">
            <td>Tetracyclines</td>
            <td>Antibiotic</td>
            <td>Not Available</td>
          </tr>
          <tr class="h-10">
            <td>Anesthesia</td>
            <td>Pain Reliever</td>
            <td>Available</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
      <div>
        <button
          class="
            mt-20
            hover:text-blue-500 hover:border-blue-500
            border
            hover:bg-white
            py-2
            px-5
            float-right
            rounded-lg
            font-bold
            mt-5
            text-white
            ml-5
            bg-blue-500
          "
        >
          Add Medicine
        </button>
      </div>
    </div>

<!-- Delete Medicine Confirmation-->
    <div
      class="
        absolute
        top-1/4
        left-1/2
        transform
        -translate-x-1/2 -translate-y-1/2
        bg-white
        w-1/4
        h-32
        border-black
        rounded-xl
        border
        text-center
        p-8
        shadow
      "
    >
      <div>Are you sure you want to delete?</div>

      <div class="flex gap-2 w-full">
        <button
          class="
            bg-red-700
            hover:bg-red-600
            text-white
            font-bold
            block
            py-2
            px-10
            mt-3
            ml-10
            mr-5
            rounded
          "
        >
          No
        </button>

        <button
          class="
            bg-blue-700
            hover:bg-blue-600
            text-white
            font-bold
            py-2
            px-10
            mt-3
            rounded
          "
        >
          Yes
        </button>
      </div>
    </div>

<!-- Deleted Successfully! -->
    <div class="
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
        border
        border-black
      ">Deleted Successfully!</div>


  </div>
</template>

<script>
import Pagination from "../../components/Pagination.vue";
export default {
  components: { Pagination },
};
</script>

<style>
</style>    