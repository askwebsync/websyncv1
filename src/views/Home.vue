<script>
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
import ProjectsReview from "../components/projects/ProjectsReview.vue";
import AppBanner from "../components/shared/AppBanner.vue";
import AppService from "../components/shared/AppService.vue";
import AppStep from "../components/shared/AppStep.vue"

export default {
  name: "Home",
  components: {
    ProjectsGrid,
    ProjectsReview,
    AppBanner,
    AppService,
    AppStep
    // AppPrice,
  },
};
</script>

<template>
  <!-- eslint-disable no-mixed-spaces-and-tabs -->
  <div class="bg-image">
    <AppBanner />
    <AppService />
    <AppStep />
    <ProjectsGrid />
    <ProjectsReview />


    <a href="https://wa.me/message/2CFRHSJQU3K3P1" class="float" target="_blank">
      <i class="fa-brands fa-whatsapp my-float"></i>
    </a>
  </div>

</template>

<style scoped>
/* .bg-banner {
  background-image: url("../assets/images/Frame1.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 100%;
  
} */
</style>
