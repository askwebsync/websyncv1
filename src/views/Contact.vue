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
    <div class="container center mx-auto px-6 py-12 md:px-12">
      <div class="space-y-5 mb-12 text-center">
        <h2 class="text-2xl md:text-4xl text-white">Contact</h2>
        <p class="text-gray-400 text-base">Feel free to always contact us</p>
      </div>
      <div class="mx-auto flex flex-col items-center normal lg:flex-row">
        <div class="w-full md:w-1/2">
          <div class="map-responsive">
            <iframe
              src="https://maps.google.com/maps?q=jl%20citandui%20no%202%20cikini%20jakarta%20pusat&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="600"
              height="450"
              frameborder="0"
              style="border: 0"
              allowfullscreen
            >
              ></iframe
            >
          </div>
        </div>
        <div
          class="background-gray py-8 px-6 text-white w-full md:w-1/2 lg:px-12"
        >
          <div class="flex flex-col my-2">
            <div class="flex items-center mt-5 lg:mt-7">
              <i class="fa-regular fa-envelope fa-lg mr-6 text-yellow"></i>
              <span class="text base lg:text-xl">ask.websync@gmail.com</span>
            </div>
            <div class="flex items-center mt-5 lg:mt-7">
              <i class="fa-solid fa-phone fa-lg mr-6 text-yellow"></i>
              <span class="text base lg:text-xl">+6282122064150</span>
            </div>
            <div class="flex items-center mt-5 lg:mt-7">
              <i class="fa-regular fa-clock fa-lg mr-6 text-yellow"></i>
              <span class="text base lg:text-xl">Available 24/7</span>
            </div>
          </div>
          <hr class="my-5" />

          <div class="wrapper max-w-lg mt-4 lg:mt-7">
            <a
              href="https://www.instagram.com/websync.id/"
              class="icon instagram"
            >
              <div class="tooltip">Instagram</div>
              <span><i class="fa-brands fa-instagram"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.text-yellow {
  color: blanchedalmond;
}

.map-responsive {
  overflow: hidden;
  padding-bottom: 70%;
  position: relative;
  height: 0;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

.wrapper .icon {
  position: relative;
  background-color: #ffffff;
  border-radius: 50%;
  margin: 10px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  display: inline-block;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: #333;
  text-decoration: none;
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  line-height: 1.5;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}

@media only screen and (min-width: 1024px) {
  .normal {
    align-items: normal;
  }
  .map-responsive {
    overflow: hidden;
    padding-bottom: 79%;
    position: relative;
    height: 0;
  }
}
</style>
