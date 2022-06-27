<template>
  <section>
    <div class="container flex flex-col mx-auto my-12 gap-y-8">
      <!-- Services Header -->
      <div class="items-center text-center mb-2">
        <h1
          class="
            font-general-semibold
            text-4xl
            md:text-5xl
            font-semibold
            text-ternary-dark
          "
        >
          Service
        </h1>
      </div>
      <div class="flex flex-col gap-5 md:grid grid-cols-3 gap-10">
        <!-- Services Item -->
        <div class="">
          <div class="border border-gray-300 p-7 md:p-6 rounded-lg">
            <div
              class="
                w-10
                h-10
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-4
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2>Web Development</h2>
          </div>
        </div>
        <div class="">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="
                w-10
                h-10
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-4
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path
                  d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                ></path>
              </svg>
            </div>
            <h2>UI/UX Custom Design</h2>
          </div>
        </div>
        <div class="">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="
                w-10
                h-10
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-4
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path
                  d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                ></path>
              </svg>
            </div>
            <h2>Logo Custom Design</h2>
          </div>
        </div>
        <!-- <div class="">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="
                w-10
                h-10
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-4
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
                ></path>
              </svg>
            </div>
            <h2>Social Media Ads</h2>
          </div>
        </div>
        <div class="">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="
                w-10
                h-10
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-4
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
                ></path>
              </svg>
            </div>
            <h2>SEO Optimation</h2>
          </div>
        </div>
        <div class="">
          <div class="border border-gray-300 p-6 rounded-lg">
            <div
              class="
                w-10
                h-10
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-4
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"
                ></path>
              </svg>
            </div>
            <h2>Google Analytic</h2>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-family: "Roboto", sans-serif;
  font-size: 1.35rem;
  line-height: 1.55rem;
  margin-bottom: 0.4rem;
  font-weight: 500;
}
p {
  color: gray;
}
</style>