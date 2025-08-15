<script setup lang="ts">
	import { computed, ref, onMounted, onUnmounted, reactive } from "vue";
	import { ArrowRight, ArrowLeft } from "../../icons";

	const { items, images } = defineProps<{ items: number; images: string[] }>();

	const imagesRef = ref<HTMLDivElement | null>(null);
	const currentIndex = ref(items);
	const state = reactive<{
		is_transition: boolean;
		interval_id: NodeJS.Timeout | null;
		paused: boolean;
	}>({
		is_transition: false,
		interval_id: null,
		paused: false,
	});

	const slides = computed(() => {
		return [...images.slice(-items), ...images, ...images.slice(0, items)];
	});

	const getPreciseWidth = (element: HTMLElement): number => {
		const rect = element.getBoundingClientRect();
		return rect.width;
	};

	const move = (widthAnimation?: boolean) => {
		if (!imagesRef.value) return;

		const firstElement = imagesRef.value.firstElementChild as HTMLElement;
		const widthItem = firstElement ? getPreciseWidth(firstElement) : 0;
		const widthGap = 20 * currentIndex.value;
		const widthTranslate = widthItem * currentIndex.value + widthGap;

		imagesRef.value.style.transition = widthAnimation ? "translate 0.3s ease-in-out" : "none";
		imagesRef.value.style.translate = `-${widthTranslate}px`;
	};

	const onResize = () => {
		move();
	};

	const next = () => {
		if (state.is_transition) return;

		state.is_transition = true;
		currentIndex.value++;
		move(true);
	};

	const prev = () => {
		if (state.is_transition) return;

		state.is_transition = true;
		currentIndex.value--;
		move(true);
	};

	const onTransitionEnd = () => {
		const savedCurrentIndex = currentIndex.value;

		if (currentIndex.value + items >= slides.value.length) {
			currentIndex.value = items;
		} else if (currentIndex.value <= 0) {
			currentIndex.value = images.length;
		}

		if (savedCurrentIndex !== currentIndex.value) {
			move();
		}

		state.is_transition = false;
	};

	onMounted(() => {
		move();

		window.addEventListener("resize", onResize);

		state.interval_id = setInterval(() => {
			if (state.paused) return;

			next();
		}, 3000);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", onResize);

		if (state.interval_id) {
			clearInterval(state.interval_id);
		}
	});
</script>

<template>
	<div class="slider px-15 flex items-stretch" @mouseenter="state.paused = true" @mouseleave="state.paused = false">
		<button class="cursor-pointer flex items-center justify-center hover:bg-neutral-50 active:bg-neutral-100" @click="prev">
			<ArrowLeft width="30" height="30" />
		</button>
		<div class="flex overflow-hidden">
			<div class="flex gap-5" ref="imagesRef" @transitionend="onTransitionEnd">
				<img v-for="slide in slides" :src="slide" class="image rounded-lg" />
			</div>
		</div>
		<button class="cursor-pointer flex items-center justify-center hover:bg-neutral-50 active:bg-neutral-100" @click="next">
			<ArrowRight width="30" height="30" />
		</button>
	</div>
</template>

<style scoped>
	.image {
		width: calc((100% - ((v-bind(items) - 1) * 20px)) / v-bind(items));
	}
</style>
