<script>
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
import ProjectsReview from "../components/projects/ProjectsReview.vue";
import AppBanner from "../components/shared/AppBanner.vue";
import AppService from "../components/shared/AppService.vue";
import AppStep from "../components/shared/AppStep.vue";
import AppFaqs from "../components/shared/AppFaqs.vue";

export default {
  name: "Home",
  components: {
    ProjectsGrid,
    ProjectsReview,
    AppBanner,
    AppService,
    AppStep,
    AppFaqs,
    // AppPrice,
  },
};
</script>

<template>
  <!-- eslint-disable no-mixed-spaces-and-tabs -->

  <AppBanner />
  <AppService />
  <AppStep />
  <ProjectsGrid />
  <AppFaqs />
  <ProjectsReview />
</template>

<style scoped>
</style>
