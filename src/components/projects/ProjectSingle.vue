<script>
export default {
  props: ["project"],
};
</script>

<template>
  <div
    class="
      mx-auto
      bg-white
      shadow-lg
      cursor-pointer
      transform
      transition
      duration-500
      hover:scale-105
    "
  >
    <router-link
      custom
      :to="{
        name: 'Project-Details',
        params: { id: project.id },
      }"
      v-slot="{ navigate }"
    >
      <img
        @click="navigate"
        :src="project.img[0]"
        class="overflow-hidden"
        style="width:350px; height: 350px"
      />
    </router-link>
    <div class="p-6 border-t-2">
      <router-link
        custom
        :to="{
          name: 'Project-Details',
          params: { id: project.id },
        }"
        v-slot="{ navigate }"
      >
        <p
          @click="navigate"
          class="
            font-general-semibold
            text-2xl text-ternary-dark
            font-semibold
            cursor-pointer
            hover:text-indigo-500
            mb-3
          "
        >
          {{ project.title }}
        </p>
      </router-link>
      <span class="font-general-medium text-lg text-ternary-dark">{{
        project.category
      }}</span>
    </div>
  </div>
</template>

<style scoped>
p{
  color:#667EEA;
}
</style>
