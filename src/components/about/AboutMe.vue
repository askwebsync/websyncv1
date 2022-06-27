<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Websync adalah website agency yang baru berdiri sejak tahun 2022 , kami memiliki tujuan untuk mempermudah umkm di indonesia melakukan penjualan secara online , menurut riset yang telah dilakukan oleh berbagai ahli baik dari organisasi seperti universitas atau hasil riset per orangan menunjukan bahwa penjualan online sangat berpengaruh positif dan signifikan untuk kemajuan umkm terutama di era pandemi seperti sekarang ini .',
				},
				{
					id: 2,
					bio:
						'Maka dari itu kami hadir disini sebagai solusi , mulai dari design hingga pembuatan website hingga optimasi seo serta jasa management social media seperti facebook dan instagram yang akan membuat para umkm tumbuh jauh lebih cepat dan siap menjadi unicorn baru indonesia.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/groupp.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 laptop:text-left text-left mobile:text-center mt-10 ml-3 mobile:ml-0 mobile:mt-3">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-xl"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
