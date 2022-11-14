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
  <div class="flex flex-col">
    <AppHeader class="sticky top-0 zasli" />
    <router-view></router-view>

    <a
      href="https://wa.me/message/2CFRHSJQU3K3P1"
      class="float"
      target="_blank"
    >
      <i class="fa-brands fa-whatsapp my-float"></i>
    </a>
    <AppFooter class="bottom-0" />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
/* CSS only for demo purpose*/
#btn-back-to-top {
  position: fixed;
  display: none;
}
</style>
