<script>
import projects from "../data/projects";

export default {
  name: "Projects",
  components: {},

  data: () => {
    return {
      id: "",
      detail: {},
      projects,
    };
  },
  props: ["project"],

  computed: {
    /* eslint-disable vue/no-side-effects-in-computed-properties */
    getDetail() {
      this.id = this.$route.params.id;
      this.detail = this.projects.find((tes) => tes.id == this.id);
      return this.detail;
    },
  },
  watch: {
    detail() {

    },
  },
  methods: {
    setIndex(idx) {
      this.index = idx;
    },
  },
};
</script>

<template>
  <div class="container mx-auto my-12">
    <!-- Project header -->
    <div class="flex flex-col">
      <div class="">
        <h1 class="
            font-general-semibold
            text-4xl
            md:text-5xl
            font-semibold
            text-ternary-dark
            mb-8
          ">
          Project Details
        </h1>
      </div>
      <div class="
          flex flex-col
          gap-y-3
          px-8
          text-lg
          my-3
          place-content-center
          md:px-48
          lg:flex lg:flex-row lg:gap-x-5 lg:text-lg lg:px-36
        ">
        <div class="
            flex
            gap-x-2
            items-center
            border
            projectDetail
            py-3
            px-4
            rounded-lg
          ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 iconColor" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span class="font-general-medium leading-none">{{
              getDetail.title
          }}</span>
        </div>
        <div class="flex gap-x-2 items-center border projectDetail py-3 px-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 iconColor" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span class="font-general-medium leading-none projectText">{{
              getDetail.category
          }}</span>
        </div>
        <!-- <div class="flex items-center border projectDetail py-3 px-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 iconColor" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="font-general-medium ml-3 leading-none projectText">{{
              getDetail.date
          }}</span>
        </div> -->
        <div class="flex gap-x-2 items-center border projectDetail py-3 px-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 iconColor" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <a href="https://wisma52.com/" target="_blank" class="
              font-general-medium
              leading-none
              projectText
              hover:text-indigo-500
              cursor-pointer
            ">Live Website</a>
        </div>
      </div>
      <div class="
        max-w-2xl
          mx-auto
          mt-1
          py-12
          space-y-12
          lg:space-y-0 lg:gap-10 lg:grid lg:grid-cols-3
        ">
        <a-image-preview-group>
          <div v-for="(images, index) in getDetail.img.slice(1, index)" :key="index" class="containerShadow rounded-lg">
            <a-image :src="images" class="w-full" />
          </div>
        </a-image-preview-group>
      </div>
    </div>
  </div>
</template>

<style scoped>
.iconColor {
  color: #78938a;
}

.containerShadow {
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}

.projectDetail {
  background-color: #f1ddbf;
}
</style>
