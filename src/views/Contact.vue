<script>
import feather from "feather-icons";

export default {
  name: "Contact",
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
  <section class="">
    <div class="container center mx-auto px-6 py-24 md:px-12 ">
      <div
        class="z max-w-lg flex flex-col text-center w-full gap-12 rounded-lg px-8 md:px-4 md:max-w-xl contact-shadow-box border"
      >
        <div class="flex flex-col gap-4 py-6">
          <h2 class="text-3xl text-white">Contact</h2>
          <p class="text-gray-400 text-base">24/7 Support For Client.</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-5 z">
            <div class="p-3 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-white z"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-3 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-white"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-3 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-white"
                  >Message</label
                >
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-3 mb-6 w-full">
              <button
                class="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none rounded-lg text-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      href="https://wa.me/message/2CFRHSJQU3K3P1"
      class="float"
      target="_blank"
    >
      <i class="fa-brands fa-whatsapp my-float"></i>
    </a>
  </section>
</template>
