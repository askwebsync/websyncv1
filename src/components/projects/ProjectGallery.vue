<script>
export default {
	props: ['projectImages'],
};
</script>

<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-10 laptop:gap-10 bg-gray-200">
		<div
			class="mb-10 sm:mb-0"
			v-for="projectImage in projectImages"
			:key="projectImage.id"
		>
			<img
				:src="projectImage.img"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				style="width:375px; height:650px;"
				alt="{{ projectImage.title }}"
			/>
		</div>
	</div>
</template>
