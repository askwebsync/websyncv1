<script>
export default {
  props: ["project"],
};
</script>

<template>
  <div
    class="max-w-lg mx-auto bg-gray-700 cursor-auto transform transition duration-500 rounded-2xl box-shadow hover:scale-105"
  >
    <!-- <router-link
      custom
      :to="{
        name: 'Project-Details',
        params: { id: project.id },
      }"
      v-slot="{ navigate }"
    > -->
    <div class="p-2">
      <img
        :src="project.img[0]"
        class="overflow-hidden object-contain"
      />
    </div>
    <!-- </router-link> -->
    <div class="p-4 border-t-2 border-black">
      <!-- <router-link
        custom
        :to="{
          name: 'Project-Details',
          params: { id: project.id },
        }"
        v-slot="{ navigate }"
      > -->
      <div class="">
        <h2
          class="font-general-semibold text-xl font-semibold text-yellow cursor-auto mb-4"
        >
          {{ project.title }}
        </h2>
      </div>
      <!-- </router-link> -->
      <p class="font-medium text-base text-gray-300">{{ project.category }}</p>
    </div>
  </div>
</template>

<style scoped>

img{
  width: 300px;
  height: 300px;
}
</style>
