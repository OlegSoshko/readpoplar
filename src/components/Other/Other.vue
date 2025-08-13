<script setup lang="ts">
	import { SectionDivider } from "../SectionDivider";
	import Showcase from "./Showcase.vue";
</script>

<template>
	<div class="bg-white">
		<div class="flex gap-5 px-15 py-20">
			<Showcase
				:images="[
					{ src: '/src/images/products/1-1.jpg', alt: '1-1' },
					{ src: '/src/images/products/1-2.jpg', alt: '1-2' },
					{ src: '/src/images/products/1-3.jpg', alt: '1-3' },
					{ src: '/src/images/products/1-4.jpg', alt: '1-4' },
				]"
				:delay="1000"
				:duration="4000"
			/>
			<Showcase
				:images="[
					{ src: '/src/images/products/2-1.jpg', alt: '2-1' },
					{ src: '/src/images/products/2-2.jpg', alt: '2-2' },
					{ src: '/src/images/products/2-3.jpg', alt: '2-3' },
					{ src: '/src/images/products/2-4.jpg', alt: '2-4' },
				]"
				:delay="2000"
				:duration="4000"
			/>
			<Showcase
				:images="[
					{ src: '/src/images/products/3-1.jpg', alt: '3-1' },
					{ src: '/src/images/products/3-2.jpg', alt: '3-2' },
					{ src: '/src/images/products/3-3.jpg', alt: '3-3' },
					{ src: '/src/images/products/3-4.jpg', alt: '3-4' },
				]"
				:delay="3000"
				:duration="4000"
			/>
			<Showcase
				:images="[
					{ src: '/src/images/products/4-1.jpg', alt: '4-1' },
					{ src: '/src/images/products/4-2.jpg', alt: '4-2' },
					{ src: '/src/images/products/4-3.jpg', alt: '4-3' },
					{ src: '/src/images/products/4-4.jpg', alt: '4-4' },
				]"
				:delay="4000"
				:duration="4000"
			/>
		</div>
		<SectionDivider>
			<span class="font-pt-narrow text-3xl text-neutral-600 whitespace-nowrap">И многое другое...</span>
		</SectionDivider>
		<div class="flex flex-1 justify-center py-12">
			<button class="uppercase px-9 py-5 cursor-pointer rounded-full bg-red-700 hover:scale-110 transition-all duration-300">
				Получить расчёт стоимости
			</button>
		</div>
	</div>
</template>
