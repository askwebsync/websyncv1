<script>
export default {
  props: ["showModal", "isOpen"],
};
</script>

<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 mt-3 p-5 justify-center items-center md:p-0 md:ml-5 md:mt-3 md:flex md:shadow-none"
  >
    <router-link
      to="/service"
      class="font-general-medium block text-left text-lg font-medium text-white hover:text-indigo-600 sm:mx-6 mb-2 sm:py-2"
      aria-label="Projects"
      >Services</router-link
    >
    <router-link
      to="/projects"
      class="font-general-medium block text-left text-lg font-medium text-white hover:text-indigo-600 sm:mx-6 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
      aria-label="About Me"
      >Portofolio</router-link
    >
    <router-link
      to="/contact"
      class="font-general-medium block text-left text-lg font-medium text-white hover:text-indigo-600 sm:mx-6 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light"
      aria-label="Contact"
      >Contact</router-link
    >
    <div class="border-t-2 pt-3 border-primary-light m-0 mt-3 p-5 justify-center items-center  sm:pt-0 sm:border-t-0">
      <button
        class="float-left font-general-medium md:hidden text-md font-general-medium bg-transparent border border-white text-white shadow-sm rounded-md px-4 py-2 duration-300"
        @click="showModal()"
        aria-label="Hire Me Button"
      >
        Hire Us
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
