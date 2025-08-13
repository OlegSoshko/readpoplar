<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from "vue";

	const props = defineProps<{ images: { src: string; alt: string }[]; duration: number; delay: number }>();

	const activeId = ref(0);
	let intervalId: NodeJS.Timeout | null = null;

	const changeImage = () => {
		activeId.value = activeId.value === props.images.length - 1 ? 0 : activeId.value + 1;
	};

	const startAnimation = () => {
		intervalId = setInterval(changeImage, props.duration);
	};

	onMounted(() => {
		setTimeout(startAnimation, props.delay);
	});

	onUnmounted(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<template>
	<div class="relative overflow-hidden">
		<img
			v-for="(image, index) in images"
			:key="index"
			:src="image.src"
			:alt="image.alt"
			class="absolute top-0 opacity-0 transition-opacity duration-500 rounded-lg"
			:class="{ 'opacity-100 relative': activeId === index }"
		/>
	</div>
</template>
