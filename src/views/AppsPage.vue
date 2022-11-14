<script>
import feather from "feather-icons";
import AppPrice from "../components/shared/AppPrice.vue";
import AppBanner from "../components/shared/App-Banner.vue";
import AppWebWhy from "../components/shared/AppWebWhy.vue";

export default {
  name: "Apps-Page",
  components: {
    AppPrice,
    AppBanner,
    AppWebWhy,
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
  methods: {},
};
</script>

<template>
  <section class="bg-image">
    <AppBanner />
    <AppWebWhy />
    <div class="container mx-auto py-4">
      <AppPrice />
    </div>
  </section>
</template>

<style scoped></style>
