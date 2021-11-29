<template>
  <div class="flex relative">
   <Sidemenu/>
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
          Add Patient
        </button>
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
      Added Successfully!
    </div>

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
      <!-- DELETE PATIENT CONFIRMATION -->
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