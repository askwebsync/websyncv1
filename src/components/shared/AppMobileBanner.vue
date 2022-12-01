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
  <section class="app-banner">
    <div
      class="h-screen w-full flex items-center justify-center text-center pb-40 md:pb-44"
    >
      <main class="items-center px-4 sm:px-6 lg:px-8">
        <div
          class="center flex flex-col gap-y-12 text-center items-center max-w-xs md:max-w-md"
        >
          <h2
            class="mb-12 md:mb-6 text-5xl tracking-wider text-white lg:text-6xl"
            style="line-height: 3.2rem"
          >
            Mobile Apps Development Services
          </h2>
          <p
            class="px-3 text-center text-gray-400 text-lg sm:mx-auto sm:mt-5 md:mt-4"
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
.center {
  text-align: -webkit-center;
}
</style>
