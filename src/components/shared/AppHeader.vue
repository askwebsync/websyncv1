<script>
import feather from "feather-icons";

export default {
  components: {},
  data() {
    return {
      dropdown: false,
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
    dropdownMenu() {
      this.dropdown = !this.dropdown;
    },
    dropdownClose() {
      this.dropdown = !this.dropdown;
      this.isOpen = !this.isOpen;
    },
    toggleClose() {
      this.isOpen = !this.isOpen;
    },
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <section class="background-navbar">
    <nav id="nav" class="container mx-auto shadow-xl">
      <header class="md:flex md:justify-between md:items-center">
        <div class="flex justify-between items-center md:px-4 py-5 md:px-0">
          <div>
            <router-link :to="{ name: 'home' }" class="focus:outline-none"
              ><img
                src="@/assets/images/logo/logo-1.png"
                class="w-16 h-14 md:w-16 md:h-14 focus:outline-none"
                alt="Logo"
              />
            </router-link>
          </div>

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

        <div
          :class="isOpen ? 'block' : 'hidden'"
          class="px-5 py-3 justify-center items-center mt-0 md:p-0 md:ml-6 md:flex md:shadow-none"
        >
          <div class="text-left cursor-pointer">
            <a
              @click="dropdown = !dropdown"
              class="inline-flex focus:outline-none block text-left text-base font-medium text-white hover:text-gray-400 p-2 mr-4"
            >
              Services
              <svg
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                class="w-2 ml-1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </a>
            <ul
              v-show="dropdown"
              class="absolute background-gray text-base sm:contents float-left p-5 text-left rounded-base border-none focus:outline-none md:block"
            >
              <li>
                <router-link
                  :to="{ name: 'website' }"
                  @click="dropdownClose"
                  class="focus:outline-none block text-left text-base font-medium text-white hover:text-gray-400 p-3"
                  href="#"
                  >Website Development</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'apps' }"
                  @click="dropdownClose"
                  class="focus:outline-none block text-left text-base font-medium text-white hover:text-gray-400 p-3"
                  href="#"
                  >Apps Development</router-link
                >
              </li>
              <li>
                <router-link
                  :to="{ name: 'uiux' }"
                  @click="dropdownClose"
                  class="focus:outline-none block text-left text-base font-medium text-white hover:text-gray-400 p-3"
                  href="#"
                  >UI/UX</router-link
                >
              </li>
            </ul>
          </div>
          <router-link
            :to="{ name: 'projects' }"
            @click="toggleClose"
            class="focus:outline-none block text-left text-base font-medium text-white hover:text-gray-400 p-2 mr-4"
          >
            Portofolio</router-link
          >
          <router-link
            :to="{ name: 'contact' }"
            @click="toggleClose"
            class="focus:outline-none block text-left text-base font-medium text-white hover:text-gray-400 p-2 mr-4"
          >
            Contact
          </router-link>
        </div>
      </header>
    </nav>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@500&display=swap");

nav li:hover,
nav li:active {
  @apply text-gray-500;
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

.background-navbar {
  background-color: #444444;
}
.container-shadow {
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}
</style>
