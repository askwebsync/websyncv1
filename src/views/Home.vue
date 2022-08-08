<script>
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
import ProjectsReview from "../components/projects/ProjectsReview.vue";
// import Button from "../components/reusable/Button.vue";
import AppBanner from "../components/shared/AppBanner.vue";
// import AppPrice from "../components/shared/AppPrice.vue";
import AppService from "../components/shared/AppService.vue";
// import AppStep from "../components/shared/AppStep.vue";

export default {
  name: "Home",
  components: {
    ProjectsGrid,
    ProjectsReview,
    // Button,
    AppBanner,
    AppService,
    // AppPrice,
    // AppStep
  },
};
</script>

<template>
  <!-- eslint-disable no-mixed-spaces-and-tabs -->
  <AppBanner />
  <AppService />
  <!-- <AppStep /> -->
  <!-- <AppPrice /> -->
  <ProjectsGrid class="my-24"/>
  <!-- Load more projects button -->
  <ProjectsReview />

  <a href="https://wa.me/message/2CFRHSJQU3K3P1" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
  </a>

</template>

<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  left: 20px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 40px;
  text-align: center;
  font-size: 35px;
}

.my-float {
  margin: 13px;
}
</style>
