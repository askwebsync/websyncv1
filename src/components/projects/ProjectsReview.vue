<template>
  <section>
    <div class="container py-12 mx-auto">
      <div class="flex items-center justify-center">
        <div class="w-full px-5 md:px-0">
          <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
              <div class="space-y-5 mb-6 text-center">
                <h2 class="text-2xl sm:text-4xl text-white">Testimonials</h2>
                <p class="text-gray-400 text-base">
                  See what our customer say about us, it's realy matter for us
                  about how good or bad and will make it for evaluation to make
                  websync better.
                </p>
              </div>
              <div class="text-center mb-24">
                <span
                  class="inline-block w-1 h-1 rounded-full bg-yellow-400 ml-1"
                ></span>
                <span
                  class="inline-block w-3 h-1 rounded-full bg-yellow-400 ml-1"
                ></span>
                <span
                  class="inline-block w-40 h-1 rounded-full bg-yellow-400"
                ></span>
                <span
                  class="inline-block w-3 h-1 rounded-full bg-yellow-400 ml-1"
                ></span>
                <span
                  class="inline-block w-1 h-1 rounded-full bg-yellow-400 ml-1"
                ></span>
              </div>
            </div>
            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="product in products" :key="product.id">
                <div class="md:p-5 md:mx-4 mb-3 text-center carousel__item">
                  <div>
                    <div class="block rounded-lg shadow-lg bg-white">
                      <div
                        class="overflow-hidden rounded-t-lg h-28 background-gray"
                      ></div>
                      <div
                        class="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white"
                      >
                        <img src="../../assets/images/black.png" />
                      </div>
                      <div class="p-6">
                        <h4 class="text-2xl font-semibold mb-4">
                          {{ product.name }}
                        </h4>
                        <h5 class="text-xl font-semibold mb-3 text-yellow-400">
                          {{ product.owner }}
                        </h5>
                        <hr />
                        <p class="mt-4">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="quote-left"
                            class="w-6 pr-2 inline-block"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                            ></path>
                          </svg>
                          {{ product.comment }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
            <!-- <div
              class="-m-3 py-2 items-start place-content-center md:flex md:gap-x-24"
            >
              <div class="max-w-lg px-3 mb-12 md:w-1/2 md:mb-0">
                <div
                  class="w-full mx-auto rounded-lg background-gray card-container-shadow p-5 font-light mb-6"
                >
                  <div class="w-full flex mb-6 items-center">
                    <div class="flex-grow pl-3">
                      <h3 class="text-xl uppercase text-yellow">Fatih Azka</h3>
                      <h5 class="text-base text-gray-400">Wisma52</h5>
                    </div>
                  </div>
                  <div class="max-w-lg">
                    <p class="text-sm leading-tight text-white">
                      I am very satisfied with the performance and service of
                      websync, the website creation process is also quite fast
                      but the best in my opinion is the friendliness and
                      patience in answer my questions.
                    </p>
                  </div>
                </div>
              </div>
              <div class="max-w-lg px-3 mb-12 md:w-1/2 md:mb-0">
                <div
                  class="w-full mx-auto rounded-lg background-gray card-container-shadow p-5 font-light mb-6"
                >
                  <div class="w-full flex mb-6 items-center">
                    <div class="flex-grow pl-3">
                      <h3 class="text-xl uppercase text-yellow">
                        Nabila Putri
                      </h3>
                      <h5 class="text-base text-gray-400">Mitrapersona</h5>
                    </div>
                  </div>
                  <div class="max-w-lg">
                    <p class="text-sm leading-tight text-white">
                      The results of the website are good even though the price
                      is relatively cheap compared to other services, very fast
                      in responding questions, support from the initial design
                      stage to revision even to teach how to configure custom
                      email.
                    </p>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "ProjectReview",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Fatih Azka",
          owner: "Wisma52",
          comment:
            "I am very satisfied with the performance and service of websync, the website creation process is also quite fast but the best in my opinion is the friendliness and patience in answer my questions.",
        },
        {
          id: 2,
          name: "Nabila Putri",
          owner: "PT.Mitra Sona Persada",
          comment:
            "  The results of the website are good even though the price is relatively cheap  compared to other services, very fast in responding questions, support from the beginning of the design stage, as welltaught me to configure a custom email.",
        },
      ],
      breakpoints: {
        400: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

.carousel__next {
  right: -45px;
  background-color: #444444 !important;
}
.carousel__prev {
  left: -45px;
  background-color: #444444 !important;
}
.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: white !important;
}
</style>
