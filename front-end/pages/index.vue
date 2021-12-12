<template>
  <section class="section bg-dental h-screen">
<div class="  absolute
              top-1/3
              left-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
              p-5
              m-auto
              mt-60
              w-3/12
              shadow-2xl
">   
   <div class="flex gap-2">
        <NuxtLink to="/login"
          class="
            bg-red-500
            hover:bg-red-700
            text-white
            font-bold
            p-2
            px-10
            rounded-lg
            uppercase
            mt-5
          "
        >
          login
        </NuxtLink>
        <NuxtLink to="/register"
          class="
            bg-blue-500
            hover:bg-blue-800
            text-white
            font-bold
            p-2
            px-8
            rounded-lg
            uppercase
            block
            mt-5
          "
        >
          register
        </NuxtLink>
      </div></div>
  
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-dental {
  background: url("~/static/bg/bgmain.png");
  background-size: 100% 100%;
}
</style>