<template>
  <section>
    <div class="container my-12 mx-auto">
      <div class="flex items-center justify-center">
        <div class="w-full">
          <div class="text-center">
            <div class="space-y-5 mb-6 text-center">
              <h2 class="text-2xl md:text-4xl text-white">Testimonials</h2>
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
            <carousel
              :settings="settings"
              :breakpoints="breakpoints"
              class="mx-6 md:mx-6"
            >
              <slide v-for="product in products" :key="product.id">
                <div class="text-center carousel__item">
                  <div class="block rounded-lg shadow-lg bg-white">
                    <div
                      class="overflow-hidden rounded-t-lg h-24 background-gray"
                    ></div>
                    <div
                      class="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white"
                    >
                      <img src="../../assets/images/black.png" />
                    </div>
                    <div class="p-4">
                      <h4 class="text-lg md:text-2xl font-semibold mb-3">
                        {{ product.name }}
                      </h4>
                      <h5
                        class="text-lg md:text-xl font-semibold mb-3 text-yellow-400"
                      >
                        {{ product.owner }}
                      </h5>
                      <hr />
                      <p class="my-4 text-base md:text-lg max-w-sm">
                        {{ product.comment }}
                      </p>
                    </div>
                  </div>
                </div>
              </slide>

              <template #addons>
                <navigation />
                <pagination />
              </template>
            </carousel>
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
            "I'am very satisfied with the performance and service of websync, the website creation process is also quite fast but the best in my opinion is the friendliness and patience in answer my questions.",
        },
        {
          id: 2,
          name: "Nabila Putri",
          owner: "PT.Mitra Sona Persada",
          comment:
            " The results of the website are good even though the price is relatively cheap  compared to other services, very fast in responding questions, support from the beginning of the design stage, as welltaught me to configure a custom email.",
        },
        {
          id: 3,
          name: "Aquira Bellinda",
          owner: "Genova Indonesia",
          comment:
            "Very satisfied with the results and certainly the same fast response service! Highly recommended!",
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
  right: -60px;
  background-color: #444444 !important;
}
.carousel__prev {
  left: -60px;
  background-color: #444444 !important;
}
.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: white !important;
}
</style>
