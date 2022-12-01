<script>
import AppPrice from "../components/shared/AppPrice.vue";
import AppBanner from "../components/shared/AppMobileBanner.vue";
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
