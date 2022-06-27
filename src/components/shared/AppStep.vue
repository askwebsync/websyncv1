<template>
    <section>
        <div class="container mx-auto flex flex-col gap-y-2 my-12">
            <div class="items-center text-center mb-2">
                <h1 class="
            font-general-semibold
            text-3xl
            md:text-4xl
            font-semibold
            text-ternary-dark
          ">
                    Work Flow
                </h1>
            </div>
            <!-- component -->
            <div class="px-0 py-2 mb-4 md:px-5">
                <div class="mx-0 p-0 md:px-5 p-5">
                    <div class="flex items-center">
                        <div class="flex items-center text-teal-600 relative">
                           <div class="rounded-full icon-center h-12 w-12 py-3 border-2 bg-teal-600 border-gray-400">
                               <img src="@/assets/images/call.svg">
                            </div>
                            <div
                                class="absolute top-0 -ml-10 text-center mt-16 w-32 text-base md:text-lg font-semibold capitalize text-black step-procces-description">
                                Contact</div>
                        </div>
                        <div class="flex-auto border-t-2 border-blue-500"></div>
                        <div class="flex items-center text-teal-600 relative">
                            <div class="rounded-full icon-center h-12 w-12 py-3 border-2 bg-teal-600 border-gray-400">
                               <img src="@/assets/images/code.svg">
                            </div>
                            <div
                                class="absolute top-0 -ml-10 text-center mt-16 w-32 text-base md:text-lg font-semibold capitalize text-black step-procces-description">
                                Coding</div>
                        </div>
                        <div class="flex-auto border-t-2 border-blue-500"></div>
                        <div class="flex items-center text-gray-500 relative">
                            <div class="rounded-full h-12 w-12 py-3 border-2 border-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                                    viewBox="0 0 24 24" stroke="black" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-mail ">
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                    </path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div
                                class="absolute top-0 -ml-10 text-center mt-16 w-32 text-base md:text-lg font-semibold capitalize text-black step-procces-description">
                                Review</div>
                        </div>
                        <div class="flex-auto border-t-2 border-blue-500"></div>
                        <div class="flex items-center text-gray-500 relative">
                           <div class="rounded-full icon-center h-12 w-12 py-3 border-2 bg-teal-600 border-gray-400">
                               <img src="@/assets/images/percent.svg">
                            </div>
                            <div
                                class="absolute top-0 -ml-10 text-center mt-16 w-32 text-base md:text-lg font-semibold capitalize text-black step-procces-description">
                                Revision</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>

.icon-center{
    text-align: -webkit-center;
}
.step-procces-description {
  font-family: "Lato", sans-serif;
}
</style>