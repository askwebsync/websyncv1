<script>
import HireMeModal from "../HireMeModal.vue";
import feather from "feather-icons";
import AppHeaderLinks from "./AppHeaderLinks.vue";
import Button from "../reusable/Button.vue";

export default {
  components: {
    HireMeModal,
    AppHeaderLinks,
    Button,
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      modal: false,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Website Development",
        },
        {
          id: 2,
          value: "mobile",
          name: "Apps Development",
        },
        {
          id: 3,
          value: "ui-ux",
          name: "UI/UX Design",
        },
        {
          id: 4,
          value: "digital-marketing",
          name: "Digital Marketing",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  methods: {
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document
          .getElementsByTagName("html")[0]
          .classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document
          .getElementsByTagName("html")[0]
          .classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <nav id="nav" class="md:container md:mx-auto">
    <!-- Header start -->
    <div
      class="z-10 max-w-screen-lg xl:max-w-screen-xl block md:flex md:justify-between md:items-center my-6"
    >
      <!-- Header menu links and mdall screen hamburger menu -->
      <div class="flex justify-between items-center p-4 md:px-0">
        <!-- Header logos -->
        <div>
          <router-link to="/"
            ><img src="@/assets/images/logobenerrr.png" class="w-24" alt="Logo" />
          </router-link>
        </div>

        <!-- Small screen hamburger menu -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-7 w-7"
               stroke="white"
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

      <!-- Header right section buttons -->
      <div
        class="hidden md:flex justify-between items-center flex-col lg:flex-row"
      >
        <!-- Hire me button -->
        <div class="hidden md:block">
          <Button
            title="Hire Us"
            class="text-md font-general-medium bg-transparent border border-white text-white shadow-sm rounded-md px-4 py-2 duration-300"
            @click="showModal()"
            aria-label="Hire Me Button"
          />
        </div>
      </div>
    </div>

    <!-- Hire me modal -->
    <HireMeModal
      :showModal="showModal"
      :modal="modal"
      :categories="categories"
      aria-modal="Hire Me Modal"
    />
  </nav>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@500&display=swap");


nav li:hover,
nav li:active {
  @apply text-blue-500;
  @apply font-medium;
}
h1 {
  font-family: "Roboto", sans-serif;
}
p {
  font-family: "Lato", sans-serif;
}

a {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-decoration: none;
}
</style>
