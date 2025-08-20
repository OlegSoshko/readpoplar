<script setup>
	import { useScrollToSection } from "../../hooks";

	const { scrollToSection } = useScrollToSection();
</script>

<template>
	<nav class="hidden lg:flex space-x-8 w-[62%] justify-center p-[10px] flex-1">
		<button
			@click="scrollToSection('products')"
			class="text-white hover:text-red-500 transition-colors whitespace-nowrap"
			style="font-size: clamp(14px, 2vw, 20px)"
		>
			Продукция
		</button>
		<button
			@click="scrollToSection('info')"
			class="text-white hover:text-red-500 transition-colors whitespace-nowrap"
			style="font-size: clamp(14px, 2vw, 20px)"
		>
			Печать на одежде
		</button>
		<button
			@click="scrollToSection('our_works')"
			class="text-white hover:text-red-500 transition-colors whitespace-nowrap"
			style="font-size: clamp(14px, 2vw, 20px)"
		>
			Наши работы
		</button>
		<button
			@click="scrollToSection('contacts')"
			class="text-white hover:text-red-500 transition-colors whitespace-nowrap"
			style="font-size: clamp(14px, 2vw, 20px)"
		>
			Контакты
		</button>
	</nav>
</template>

<style scoped></style>
