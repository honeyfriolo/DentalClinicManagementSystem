<template>
  <div >
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
      <form action="">
        <input
          type="email"
          id="email"
          name="email"
          value=""
          placeholder="Email"
          class="border-b block border-black pb-3 w-full"
        />
        <input
          type="text"
          id="username"
          name="username"
          value=""
          placeholder="Username"
          class="border-b block border-black pb-3 mt-5 w-full"
        />
        <input
          type="password"
          id="password"
          name="password"
          value=""
          placeholder="Password"
          class="border-b block border-black pb-3 mt-5 w-full"
        />
        <input
          type="password"
          id="re-type-password"
          name="password"
          value=""
          placeholder="Re-type Password"
          class="border-b block border-black pb-3 mt-5 w-full"
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