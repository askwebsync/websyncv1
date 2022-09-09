<script>
import feather from "feather-icons";
import DesignPrice from "../components/shared/DesignPrice.vue";
import DesignBanner from "../components/shared/DesignBanner.vue";
import AppWebWhy from "../components/shared/AppWebWhy.vue";

export default {
  name: "About",
  components: {
    DesignBanner,
    AppWebWhy,
    DesignPrice
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
    <DesignBanner />
    <AppWebWhy />
    <div class="container mx-auto py-4">
      <DesignPrice />
    </div>
     <a href="https://wa.me/message/2CFRHSJQU3K3P1" class="float" target="_blank">
    <i class="fa-brands fa-whatsapp my-float"></i>
  </a>

    </section>
</template>

<style scoped>

</style>

