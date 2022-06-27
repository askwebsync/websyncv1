<script>
export default {
  props: ["contacts"],
};
</script>

<template>
  <div class="container mx-auto w-full">
    <div class="flex flex-col gap-y-6 bg-gray-100">
      <form action="#" method="POST">
        <div class="shadowBox py-4 sm:rounded-md sm:overflow-hidden">
          <div class="py-5 space-y-8 sm:p-6">
            <div class="flex flex-col gap-y-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="company_website"
                  class="block text-base font-medium text-gray-700"
                >
                  Website Name
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span
                    class="
                      inline-flex
                      items-center
                      px-3
                      rounded-l-md
                      border border-r-0 border-gray-300
                      bg-gray-50
                      text-gray-500 text-base
                    "
                  >
                    http://
                  </span>
                  <input
                    type="text"
                    name="company_website"
                    id="company_website"
                    class="
                      focus:ring-indigo-500 focus:border-indigo-500
                      flex-1
                      block
                      w-full
                      rounded-none rounded-r-md
                      sm:text-base
                      border-gray-300
                    "
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>

            <div class="mt-2">
              <label
                for="about"
                class="block text-base font-medium text-gray-700"
              >
                Website Details
              </label>
              <div class="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    mt-1
                    block
                    w-full
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                  placeholder="you@example.com"
                ></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description & design for your website.
              </p>
            </div>
            <div class="mt-2">
              <label class="block text-base font-medium text-gray-700 mb-2">
                Upload Photo / Design
              </label>
              <div
                class="
                  mt-1
                  flex
                  justify-center
                  px-6
                  pt-5
                  pb-6
                  border-2 border-gray-300 border-dashed
                  rounded-md
                "
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="True"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-base text-gray-600">
                    <label
                      for="file-upload"
                      class="
                        relative
                        cursor-pointer
                        rounded-md
                        font-medium
                        text-indigo-600
                        hover:text-indigo-500
                        focus-within:outline-none
                      "
                    >
                      <span>Upload a file or drag and drop </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center justify-center my-1">
            <button
              type="submit"
              class="
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-base
                font-medium
                rounded-full
                text-white
                buttonColor
                transform
                transition
                duration-500
                hover:scale-125
                focus:outline-none
              "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.iconColor {
  color: #667eea;
}
.shadowBox {
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
}
.inputBorder {
  border: solid #112a46;
}
.buttonColor {
  background-color: #667eea;
}
.buttonColor:hover {
  box-shadow: 2px;
}
</style>
