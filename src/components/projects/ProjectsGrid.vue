<script>
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";
import Button from "../reusable/Button.vue";

export default {
  components: { ProjectSingle, Button },
  data: () => {
    return {
      projects,
      projectsHeading: "Our Portfolio",
      searchProject: "",
      category: "",
    };
  },
  props: {
    select: {
      type: String,
      default: "projects",
      required: true,
    },
    selectOptions: {
      type: Array,
      default: () => ["Web Application", "Mobile Application", "UI/UX Design"],
    },
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.category) {
        return this.filterProjectsByCategory();
      }
      if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter(
        (project) => !project.category.indexOf(this.category)
      );
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="">
    <div class="container my-10 mx-auto flex flex-col">
      <div>
        <!-- Projects grid title -->
        <div class="text-center my-8 space-y-2">
          <h2 class="
              text-2xl
              sm:text-4xl
              font-semibold
              mb-2
              text-white
            ">
            {{ projectsHeading }}
          </h2>
          <p class="
        ml-1
           text-gray-400 text-lg font-medium
          ">Where our solutions become your internet reality.</p>
        </div>
      </div>
      <!-- Filter and search projects -->
      <div>
        <div class="my-8">
          <div class="
              flex
              justify-between
              border-b-2 border-gray-500
              pb-3
              gap-2
            ">
            <div class="flex justify-between gap-2">
              <input v-model="searchProject" style="font-size: 12px;" class="
                  font-general-medium
                  pl-3
                  pr-1
                  xs:px-0
                  text-center
                  sm:px-4
                  py-2
                  rounded-lg
                  bg-gray-600
                  hover:bg-gray-800
                  text-white
                  focus:outline-none
                  focus:ring-inherit
                " id="name" name="name" type="search" required="" placeholder="Search Projects" aria-label="Name" />
            </div>
            <select v-model="category" class="
                font-general-medium
                px-4
                py-2
               bg-gray-600
        hover:bg-gray-800
                rounded-lg
                text-sm
                text-white
                sm:text-md
                focus:outline-none
              ">
              <option value class="text-sm sm:text-md">All Projects</option>
              <option v-for="option in selectOptions" :key="option" :value="option" class="sm:text-md">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <!-- Projects grid -->
        <div
          class="flex flex-col gap-10 my-12 w-full md:grid md:grid-cols-2 md:gap-10 lg:grid lg:grid-cols-3">
          <ProjectSingle v-for="project in filteredProjects" :key="project.id" :project="project" />
        </div>
        <div class="flex justify-center mb-5">
          <router-link to="/projects" class="
        font-general-medium
        flex
        items-center
        px-4
        py-2
        rounded-lg
        shadow-lg
        bg-gray-600
        hover:bg-gray-800
        text-white text-lg
      " aria-label="More Projects">
            <Button title="Show All" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
