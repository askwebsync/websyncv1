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
  <section>
    <div
      class="h-screen w-full flex items-center justify-center text-center pb-40 md:pb-44"
    >
      <main class="items-center px-4 sm:px-6 lg:px-8">
        <div
          class="center flex flex-col gap-y-10 text-center items-center max-w-md md:max-w-full"
        >
          <h2
            class="text-5xl tracking-wider text-white max-w-md lg:text-6xl"
            style="line-height: 4rem"
          >
            Your #1 Website Design Agency
          </h2>
          <p
            class="max-w-lg px-3 text-center mt-2 text-gray-400 text-lg sm:mx-auto sm:mt-5 md:mt-4"
          >
            We specialize in creating visual identities for your company brands
            and product
          </p>
        </div>
        <!-- <div class="mt-24 mx-2 p-3">
          <div class="flex items-center">
              <div class="flex items-center text-white relative">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-md uppercase text-teal-600">1.Contact</div>
              </div>
              <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
              <div class="flex items-center text-white relative">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="8.5" cy="7" r="4"></circle>
                          <line x1="20" y1="8" x2="20" y2="14"></line>
                          <line x1="23" y1="11" x2="17" y2="11"></line>
                      </svg>
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-md uppercase text-teal-600">2.Design</div>
              </div>
              <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div class="flex items-center text-white relative">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-md uppercase text-white">3.Coding</div>
              </div>
              <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
              <div class="flex items-center text-white relative">
                  <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database ">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                  </div>
                  <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-md uppercase text-white">4.Confirm</div>
              </div>
          </div>
      </div> -->
      </main>
    </div>
  </section>
</template>

<style scoped></style>
