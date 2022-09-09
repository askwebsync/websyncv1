<script>
import feather from "feather-icons";
import AppHeader from "./components/shared/AppHeader";
import AppFooter from "./components/shared/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => {
    return {};
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="">
    <AppHeader class="sticky top-0" />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container-shadow {
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}
</style>
