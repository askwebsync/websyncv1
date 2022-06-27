<script>
/* eslint-disable vue/no-side-effects-in-computed-properties */
export default {
  data() {
    return {
      showMenu: false,
      open: false,
    };
  },
  computed: {
    // navbarStyle() {
    //   const path = this.$route.path;
    //   return path == "/"
    //     ? "navbar fixed-top w-full p-8 mx-auto lg:flex lg:justify-between lg:items-center"
    //     : "bg-gray-700 p-8 mx-auto lg:flex lg:justify-between lg:items-center ";
    // },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    refresh(){
      window.location.reload();
    }
  },
};
</script>

<template>
  <header>
    <div class="bg-black">
      <nav
        class="
          px-3
          py-5
          mx-auto
          lg:flex lg:justify-between lg:items-center lg:container lg:py-6">
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
          >
            <img src="@/assets/images/logobenerrr.png" style="width:100px; height:30px;">
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex mr-2 lg:hidden">
            <button
              type="button"
              class="
                text-white
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-5
            space-y-4
            text-xl
            text-white
            font-medium
            lg:flex
            lg:space-y-0
            lg:flex-row
            lg:items-center
            lg:space-x-12
            lg:mt-0
            lg:mb-0
          "
        >
          <li>
            <router-link class="" :to="{ name: 'Projects' }"
              >Portofolio</router-link
            >
          </li>
          <li>
            <router-link class="" :to="{ name: 'Template' }"
              >Template</router-link
            >
          </li>
          <li>
            <router-link class="" :to="{ name: 'Contact' }"
              >Contact</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
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
