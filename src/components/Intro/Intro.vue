<script setup>
	import { Header } from "../Header";
	import Section from "./Section.vue";
	import { ArrowRight } from "../../icons";
</script>

<template>
	<div class="intro h-screen flex flex-col">
		<Header />
		<div class="w-[90%] mx-auto flex flex-1 justify-between">
			<Section class="flex flex-col justify-end items-center flex-[0_0_49%] pb-12">
				<img src="/src/images/icons/logo_width_label.webp" alt="Красный Тополь" />
				<h2 class="font-pt-narrow font-bold uppercase tracking-[3.4px] text-white text-shadow-4px-black text-4xl font-normal">
					работаем с 2019 года
				</h2>
			</Section>
			<Section class="flex flex-col items-center justify-center p-12 flex-[0_0_49%]">
				<h6 class="font-normal text-6xl text-center font-pt-narrow">
					Швейное <br />
					производство
				</h6>
				<h2 class="font-normal font-pt-narrow text-6xl">«<span class="text-red-700">Красный</span> тополь»</h2>
				<hr class="h-[2px] w-1/2 border-none bg-red-700 my-4" />
				<p class="font-montserrat text-lg">Быстрый и качественный пошив трикотажной одежды с печатью и доставкой по всей России</p>
				<div class="flex flex-col gap-2 w-full text-lg mt-12">
					<div class="flex items-center gap-2"><ArrowRight stroke="white" /> ПОШИВ ОТ 50 ШТУК</div>
					<div class="flex items-center gap-2"><ArrowRight stroke="white" /> ВСЯ ПРОДУКЦИЯ СЕРТИФИЦИРОВАНА</div>
					<div class="flex items-center gap-2"><ArrowRight stroke="white" /> ПРОИЗВОДСТВО В Г. ИВАНОВО</div>
				</div>
				<button
					class="text-white px-9 py-5 border-2 border-white rounded-full mt-auto uppercase font-montserrat tracking-[3.9px] bg-neutral-600 cursor-pointer"
				>
					Узнать больше
				</button>
			</Section>
		</div>
	</div>
</template>

<style scoped>
	.intro {
		background-image: url("/src/images/backgrounds/etifi2.webp");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
