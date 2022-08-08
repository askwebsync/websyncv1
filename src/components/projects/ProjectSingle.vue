<script>
export default {
  props: ["project"],
};
</script>

<template>
  <div
    class="
      mx-auto
      bg-inherit
      shadow-lg
      cursor-pointer
      transform
      transition
      duration-500
      box-shadow
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
    <div class="p-6 border-t">
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
            text-2xl
            font-semibold
            text-white
            cursor-pointer
            hover:text-indigo-500
            mb-3
          "
        >
          {{ project.title }}
        </p>
      </router-link>
      <span class="font-general-medium text-lg text-gray-400">{{
        project.category
      }}</span>
    </div>
  </div>
</template>

<style scoped>
.box-shadow{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
</style>
