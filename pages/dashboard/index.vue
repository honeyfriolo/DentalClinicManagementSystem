<template>
  <div class="flex">
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
          placeholder="Search"
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
      <table class="border border-black w-full">
        <thead>
          <tr class="h-10 text-center border border-black">
            <th class="w-20">ID</th>
            <th>Patient's Name</th>
            <th>Age</th>
            <th>Telephone</th>
            <th>Date</th>
            <th>Address</th>
            <th>Complain</th>
            <th>Procedure</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-10">
            <td>14</td>
            <td>Honey Grace Friolo</td>
            <td>18</td>
            <td>09383069002</td>
            <td>07/10/21</td>
            <td>Aguada</td>
            <td>Sensitivity</td>
            <td>Extraction</td>
          </tr>
          <tr class="h-10">
            <td>14</td>
            <td>Honey Grace Friolo</td>
            <td>18</td>
            <td>09383069002</td>
            <td>07/10/21</td>
            <td>Aguada</td>
            <td>Sensitivity</td>
            <td>Extraction</td>
          </tr>
          <tr class="h-10">
            <td>14</td>
            <td>Honey Grace Friolo</td>
            <td>18</td>
            <td>09383069002</td>
            <td>07/10/21</td>
            <td>Aguada</td>
            <td>Sensitivity</td>
            <td>Extraction</td>
          </tr>
          <tr class="h-10">
            <td>14</td>
            <td>Honey Grace Friolo</td>
            <td>18</td>
            <td>09383069002</td>
            <td>07/10/21</td>
            <td>Aguada</td>
            <td>Sensitivity</td>
            <td>Extraction</td>
          </tr>
        </tbody>
      </table>
      <Pagination />
      <div>
        <button
          class="
            mt-20
            hover:text-blue-500
             hover:border-blue-500
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
          Add Account
        </button>
      </div>
    </div>
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