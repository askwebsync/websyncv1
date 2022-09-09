<script>
import feather from "feather-icons";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

export default {
  components: { ProjectSingle },
  data: () => {
    return {
      projects,
      projectsHeading: "Portfolio",
      searchProject: '',
      category: '',
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
      default: () => [
        "Web Application",
        "Mobile Application",
        "UI/UX Design",
        "Social Media Specialist",
      ],
    },
  },
  mounted() {
    feather.replace();
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
  <section>
    <div class="container py-16 mx-auto flex flex-col">
      <div class="mt-6">
        <!-- Projects grid title -->
        <div class="space-y-5 mb-6 text-center">
          <h2 class="text-2xl sm:text-4xl text-white">
            {{ projectsHeading }}
          </h2>
          <p class="text-gray-400 text-base">
            Where our solutions become your internet reality.
          </p>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex place-content-center border-b-2 border-gray-500 pb-3 gap-2 md:flex md:justify-between">
          <div class="flex mr-2 md:mr-0">
            <span class="hidden sm:block bg-primary-light p-1.5 shadow-sm rounded-md">
              <i data-feather="search" class="text-ternary-dark w-6 h-6"></i>
            </span>
          </div>
          <select v-model="category" :name="select" :id="select"
            class="w-full text-center font-general-medium px-4 py-1.5 border-1 border-gray-200 rounded-md text-sm bg-secondary-light focus:outline-none sm:text-md md:w-xs">
            <option value class="text-sm sm:text-md">All Projects</option>
            <option v-for="option in selectOptions" :key="option" :value="option" class="sm:text-md">
              {{ option }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex flex-col gap-10 my-12 md:grid md:grid-cols-3 z">
        <ProjectSingle v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
      <div class="z flex justify-center mb-5">
        <router-link to="/projects"
          class="font-medium flex items-center px-4 py-2 rounded-md shadow-lg bg-gray-700 hover:bg-gray-700 text-white text-lg overflow-hidden transform hover:scale-105 duration-500 ease-in-out"
          aria-label="More Projects">
          <button>Show All</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
