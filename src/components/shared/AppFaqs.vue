<template>
  <section class="bg-service">
    <div
      class="container flex flex-col my-24 items-center mx-auto gap-y-12 box-shadow"
    >
      <div class="space-y-5 mb-4 text-center">
        <h2 class="text-2xl md:text-4xl text-white">
          Frequently Asked Question
        </h2>
        <p class="text-gray-400 text-base">
          The most common questions about how our business works and what can do
          for you.
        </p>
        <div class="text-center mb-24">
          <span
            class="inline-block w-1 h-1 rounded-full bg-yellow-400 ml-1"
          ></span>
          <span
            class="inline-block w-3 h-1 rounded-full bg-yellow-400 ml-1"
          ></span>
          <span class="inline-block w-40 h-1 rounded-full bg-yellow-400"></span>
          <span
            class="inline-block w-3 h-1 rounded-full bg-yellow-400 ml-1"
          ></span>
          <span
            class="inline-block w-1 h-1 rounded-full bg-yellow-400 ml-1"
          ></span>
        </div>
      </div>
      <div>
        <div class="flex flex-col">
          <div class="relative mb-4 center">
            <input type="checkbox" id="toggle1" class="toggle hidden" />
            <label
              class="title block background-gray px-4 py-6 cursor-pointer border-2"
              for="toggle1"
            >
              <h3 class="max-w-xs">Bagaimana Cara Melakukan Pemesanan?</h3>
            </label>
            <div class="content background-gray overflow-hidden">
              <ol class="custom-counter text-left p-3">
                <li class="p-2">
                  Pilih Paket dan informasikan kebutuhan SEO Anda pada kami
                </li>
                <li class="p-2">
                  Jelaskan fitur yang diinginkan pada website/apps anda
                </li>
                <li class="p-2">
                  Jika belum ada design maka kami melakukan custom design
                  berbayar untuk anda
                </li>
                <li class="p-2">
                  Kami buat penawaran resmi harga pembuatan untuk anda
                </li>
                <li class="p-2">
                  Jika sudah cocok, kami kirimkan Invoice pembayaran
                </li>
                <li class="p-2">
                  Silahkan kirim data yang akan digunakan pada website /
                  aplikasi anda
                </li>
                <li class="p-2">
                  Proses pembuatan dimulai dengan jangka waktu sesuai
                  kesepakatan
                </li>
                <li class="p-2">
                  Memperlihatkan hasil jadi kepada anda, jika anda menginginkan
                  perubahan bisa melakukan revisi sebanyak 3x
                </li>
              </ol>
            </div>
          </div>
          <div class="relative mb-4 center">
            <input type="checkbox" id="toggle2" class="toggle hidden" />
            <label
              class="title block background-gray px-4 py-6 cursor-pointer border-2"
              for="toggle2"
            >
              <h3 class="max-w-xs">Apa saja yang harus disiapkan?</h3>
            </label>
            <div class="content background-gray overflow-hidden">
              <ol class="custom-counter text-left p-2">
                <li class="p-2">
                  Siapkan design jika sudah punya design sendiri
                </li>
                <li class="p-2">Siapkan data website/aplikasi anda</li>
              </ol>
            </div>
          </div>
          <div class="relative mb-4 center">
            <input type="checkbox" id="toggle3" class="toggle hidden" />
            <label
              class="title block background-gray px-4 py-6 cursor-pointer border-2"
              for="toggle3"
            >
              <h3 class="max-w-xs">Bagaimana Skema Pembayaran?</h3>
            </label>
            <div class="content background-gray overflow-hidden">
              <ol class="custom-counter text-left p-2">
                <li class="p-2">
                  Pembayaran DP sesuai kesepakatan melalui transfer ke rekening
                  kami/pembayaran tunai ke kantor kami.
                </li>
                <li class="p-2">
                  Pembayaran Pelunasan sesuai kesepakatan ke rekening kami.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppsFaqs",
  data: () => {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.text-oscuro {
  color: #445065;
}

.title {
  color: white;
}

.title::after,
.title::before {
  content: "";
  position: absolute;
  right: 1.25em;
  top: 1.25em;
  width: 2px;
  height: 0.75em;
  background-color: white;
  transition: all 0.4s;
}

.title::after {
  transform: rotate(90deg);
}

.content {
  max-height: 0;
}

.toggle:checked + .title,
.toggle:checked + .title + .content {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.toggle:checked + .title + .content {
  max-height: 500px;
}

.toggle:checked + .title::before {
  transform: rotate(90deg) !important;
}

.custom-counter {
  margin: 0;
  padding: 10px;
  list-style-type: none;
}

.custom-counter li {
  counter-increment: step-counter;
  margin-bottom: 10px;
  color: white;
}

.custom-counter li::before {
  content: counter(step-counter);
  margin-right: 10px;
  font-size: 80%;
  background-color: navajowhite;
  color: black;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 3px;
}
</style>
