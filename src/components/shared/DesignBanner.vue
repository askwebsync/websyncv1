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
    >
      <div
        class="max-w-lg center relative p-5 text-2xl text-white rounded-xl space-y-12"
      >
        <h2
          class="font-general-semibold text-5xl font-semibold text-white md:text-6xl"
        >
          Custom UI/UX Design Services
        </h2>
        <p class="max-w-lg text-lg text-gray-400">
          we are presented to improve every design of the appearance and
          features of your project to be more professional
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
