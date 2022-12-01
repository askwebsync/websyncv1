<script>
export default {
  props: ["project"],
};
</script>

<template>
  <div
    class="max-w-lg mx-auto background-gray cursor-auto transform transition duration-500 rounded-2xl box-shadow hover:scale-105"
  >
    <a v-bind:href="project.link" class="focus:outline-none">
      <div class="p-2">
        <img
          :src="project.img[0]"
          class="overflow-hidden object-contain w-64 h-64"
        />
      </div>
      <div class="p-4 border-t-2 border-black">
        <div class="">
          <h2
            class="font-general-semibold text-xl font-semibold text-yellow cursor-auto mb-4"
          >
            <p>{{ project.title }}</p>
          </h2>
        </div>
        <p class="font-medium text-base text-gray-300">
          {{ project.category }}
        </p>
      </div>
    </a>
  </div>
</template>

<style scoped>
img {
  width: 300px;
  height: 300px;
}
</style>
