<template>
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
    > <n-link to="/dashboard">patients</n-link>
  
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
      <n-link to="/dashboard/inventory"> inventory </n-link>
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
      <n-link to="/dashboard/settings"> settings </n-link>
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
      <n-link to=""> logout </n-link>
    </button>

    <!-- Log out Confirmation -->
    <div
      class="
        absolute
        bg-white
        w-64
        h-20
        float-left
        border-black
        rounded-xl
        border
        text-center
        p-3
        shadow
      "
    >
      <div>Are you sure you want to log out?</div>

      <div class="w-auto">
        <button
          class="
            bg-red-700
            hover:bg-red-600
            text-white
            font-bold
            block
            py-2
            px-5
            w-24
            mt-6
            mx-auto
            rounded
            whitespace-nowrap
          "
        >
          Log Out
        </button>

        <button
          class="
            bg-blue-700
            hover:bg-blue-600
            text-white
            font-bold
            py-2
            px-5
            w-24
            mt-1
            mx-auto
            rounded
          "
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>