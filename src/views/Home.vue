<script>
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";
import ProjectsReview from "../components/projects/ProjectsReview.vue";
import Button from "../components/reusable/Button.vue";
import AppBanner from "../components/shared/AppBanner.vue";
import AppPrice from "../components/shared/AppPrice.vue";
import AppService from "../components/shared/AppService.vue";
import AppStep from "../components/shared/AppStep.vue";

export default {
  name: "Home",
  components: {
    ProjectsGrid,
    ProjectsReview,
    Button,
    AppBanner,
    AppService,
    AppPrice,
    AppStep
  },
};
</script>

<template>
  <!-- eslint-disable no-mixed-spaces-and-tabs -->
  <AppBanner />
  <AppService />
  <AppStep />
  <AppPrice />
  <ProjectsGrid />
  <!-- Load more projects button -->
  <div class="flex justify-center mb-10">
    <router-link to="/projects" class="
        font-general-medium
        flex
        items-center
        px-4
        py-2
        rounded-lg
        shadow-lg
        bg-indigo-500
        hover:bg-indigo-600
        text-white text-lg
      " aria-label="More Projects">
      <Button title="Show All" />
    </router-link>
  </div>

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
  bottom: 25px;
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
