<template>
  <section class="bg-service">
    <div class="container flex flex-col items-center mx-auto pb-24 gap-y-12 box-shadow">
      <div class="space-y-5 mb-4 text-center">
        <h2 class="text-4xl text-white">Services</h2>
        <p class="text-gray-400 text-base">
          Where our solutions become your internet reality.
        </p>
      </div>
      <div class="flex flex-wrap gap-24 justify-center md:grid grid-cols-3">
        <div class="bg-gray-700 shadow-box rounded-lg w-full mb-4 ">
          <div class="p-3 rounded-lg">
            <div class="inline-flex items-center justify-center rounded-full my-3">
              <img src="@/assets/images/web-64.png" class="object-cover" />
            </div>
            <div class="max-w-md p-2">
              <h2 class="text-white text-lg text-center">Website Development</h2>
            </div>
          </div>
        </div>
        <div class="bg-gray-700 shadow-box rounded-lg w-full mb-4 ">
          <div class="p-3 rounded-lg">
            <div class="inline-flex items-center justify-center rounded-full my-3">
              <img src="@/assets/images/app-64.png" class="object-cover" />
            </div>
            <div class="max-w-md p-2">
              <h2 class="text-white text-lg text-center">Apps Development</h2>
            </div>
          </div>
        </div>
        <div class="bg-gray-700 shadow-box rounded-lg w-full mb-4 ">
          <div class="p-3 rounded-lg">
            <div class="inline-flex items-center justify-center rounded-full my-3">
              <img src="@/assets/images/ui-64.png" class="object-cover" />
            </div>
            <div class="max-w-md p-2">
              <h2 class="text-white text-lg text-center">UI/UX Design</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
