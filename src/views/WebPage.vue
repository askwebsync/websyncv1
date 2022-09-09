<script>
import feather from "feather-icons";
import AppWebPrice from "../components/shared/AppWebPrice.vue";
import AppWebBanner from "../components/shared/AppWebBanner.vue";
import AppWebWhy from "../components/shared/AppWebWhy.vue";

export default {
  name: "About",
  components: {
    AppWebPrice,
    AppWebBanner,
    AppWebWhy
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
    <AppWebBanner />
    <AppWebWhy />
    <div class="container mx-auto py-4">
      <AppWebPrice />
    </div>
     <a href="https://wa.me/message/2CFRHSJQU3K3P1" class="float" target="_blank">
    <i class="fa-brands fa-whatsapp my-float"></i>
  </a>

    </section>
</template>

<style scoped>

</style>

