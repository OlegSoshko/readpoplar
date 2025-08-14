<script setup lang="ts">
	import { SectionDivider } from "../SectionDivider";
	import { Slider } from "../Slider";

	const images = [
		"/src/images/products/our-1.jpg",
		"/src/images/products/our-2.jpg",
		"/src/images/products/our-3.jpg",
		"/src/images/products/our-4.jpg",
		"/src/images/products/our-5.jpg",
		"/src/images/products/our-6.jpg",
		"/src/images/products/our-7.jpg",
		"/src/images/products/our-8.jpg",
		"/src/images/products/our-9.jpg",
		"/src/images/products/our-10.jpg",
		"/src/images/products/our-11.jpg",
		"/src/images/products/our-12.jpg",
		"/src/images/products/our-13.jpg",
		"/src/images/products/our-14.jpg",
		"/src/images/products/our-15.jpg",
		"/src/images/products/our-16.jpg",
		"/src/images/products/our-17.jpg",
		"/src/images/products/our-18.jpg",
		"/src/images/products/our-19.jpg",
		"/src/images/products/our-20.jpg",
	];
</script>

<template>
	<div class="our-works bg-white pb-15">
		<SectionDivider>
			<span class="font-pt-narrow text-5xl uppercase text-neutral-600 whitespace-nowrap my-15">Наши работы</span>
		</SectionDivider>

		<Slider :items="5" :images="images" />
	</div>
</template>

<style scoped>
	.image {
		width: calc((100% - 80px) / 5);
	}
</style>
