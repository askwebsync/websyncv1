<script>
export default {
  name: "AppBanner",
  data: () => {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<template>
  <div class="
      relative
      h-screen
      w-full
      flex
      items-center
      justify-center
      text-left
      bg-cover bg-center
    " style="
      background-image: url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80);
    ">
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

    <div class="max-w-2xl md:max-w-4xl text-center z-10 mt-4 mb-36 px-10 lg:px-24 xl:px-36 xl:mb-24">
      <h2 class="
            text-5xl
            tracking-tight
            font-extrabold
            indent-1
            lg:text-5xl
            xl:text-6xl
          ">
        Solusi Digital Untuk Bisnis Anda
      </h2>
      <p class="mt-8 text-lg tracking-tight lg:mt-12 lg:text-xl xl:text-2xl">
        Websync merupakan perusahaan jasa website profesional yang menerapkan
        konsep user & seo friendly dan menawarkan design yang modern serta
        unik dalam 3 jenis paket pilihan.
      </p>
      <div class="mt-12 sm:flex justify-center lg:mt-13">
        <button class="button-74 anim" role="button">
          Portofolio Demo
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  font-family: "Poppins", sans-serif !important;
}

h2 {
  color: #667EEA;
}

p {
  color: #fffaf0;
  text-align: center;
  position: relative;
}

.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}

.anim {
  animation: jiggle 2s ease-out infinite;
}

@keyframes jiggle {

  48%,
  62% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.1, 0.9);
  }

  56% {
    transform: scale(0.9, 1.1) translate(0, -5px);
  }

  59% {
    transform: scale(1, 1) translate(0, -3px);
  }
}
</style>
