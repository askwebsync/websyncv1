<script>
import feather from "feather-icons";

export default {
  name: "App-Banner",
  components: {},
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
  <section>
    <div
      class="flex items-center justify-center h-screen pb-12 md:pb-24 overflow-hidden"
    ></div>
  </section>
</template>

<style scoped>
.center {
  text-align: -webkit-center;
}
</style>
