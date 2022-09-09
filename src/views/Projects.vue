<script>
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";

export default {
  name: "Projects",
  components: {
    ProjectsGrid,
  },
};
</script>

<template>
  <section class="bg-image">
    <div class="container mx-auto">
      <ProjectsGrid />
    </div>
    <a
      href="https://wa.me/message/2CFRHSJQU3K3P1"
      class="float"
      target="_blank"
    >
      <i class="fa-brands fa-whatsapp my-float"></i>
    </a>
  </section>
</template>

<style scoped>
</style>
