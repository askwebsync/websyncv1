<script>
import feather from "feather-icons";

export default {
  name: "AppBanner",
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
  <section class="flex flex-col sm:justify-between items-center sm:flex-row">
    <div
      class="relative h-screen pb-44 w-full flex items-center justify-center text-center bg-cover bg-center"
    >
      <main class="px-4 z-10">
        <div
          class="flex flex-col gap-y-10 text-center xs:max-w-md sm:max-w-xl md:max-w-2xl"
        >
          <h2
            class="text-5xl tracking-wider font-medium text-white md:text-5xl lg:text-6xl"
            style="line-height: 4.1rem"
          >
            <span class="font-bold indent-8"
              >Your #1 Website Design Agency</span
            >
          </h2>
          <p
            class="max-w-md mt-3 text-gray-400 text-lg font-medium sm:mx-auto sm:mt-5 md:mt-5"
          >
            We specialize in creating visual identities for your company brands
            and product
          </p>
        </div>
      </main>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

h2 {
  font-family: "Noto Sans", sans-serif;
}
</style>
