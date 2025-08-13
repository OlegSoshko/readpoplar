<script setup lang="ts">
	import { SectionDivider } from "../SectionDivider";
	import Showcase from "./Showcase.vue";
</script>

<template>
	<div class="about bg-white px-15 py-5">
		<SectionDivider>
			<span class="font-pt-narrow text-3xl text-neutral-600 whitespace-nowrap"><span class="text-red-700">«Красный</span> Тополь»</span>
		</SectionDivider>
		<div class="flex">
			<div class="flex flex-col w-1/3 items-center text-neutral-600 font-montserrat gap-3 bg-neutral-50 p-10">
				<span class="font-pt-narrow text-3xl text-neutral-600 inline-block text-center">
					Быстрый и качественный пошив трикотажной одежды с печатью и доставкой по всей России
				</span>
				<hr class="h-[2px] w-1/3 border-none bg-red-700 my-4" />
				<p class="text-justify">
					Компания <span class="text-red-700">«Красный</span> Тополь» образована в 2019 году в текстильной столице России – городе Иванове.
					Основная цель компании это реализация текстильных идей заказчиков на высоком профессиональном уровне.
				</p>
				<p class="text-justify">
					Качество изделий, сроки исполнения, уважение своих клиентов и компаньонов – незыблемые принципы и основа организации работы
					компании «Красный Тополь».
				</p>
			</div>
			<div class="w-1/3">
				<Showcase
					:images="[
						{ src: '/src/images/products/our-1.jpg', alt: 'our-1' },
						{ src: '/src/images/products/our-2.jpg', alt: 'our-2' },
						{ src: '/src/images/products/our-3.jpg', alt: 'our-3' },
						{ src: '/src/images/products/our-4.jpg', alt: 'our-4' },
						{ src: '/src/images/products/our-5.jpg', alt: 'our-5' },
						{ src: '/src/images/products/our-6.jpg', alt: 'our-6' },
						{ src: '/src/images/products/our-7.jpg', alt: 'our-7' },
						{ src: '/src/images/products/our-8.jpg', alt: 'our-8' },
						{ src: '/src/images/products/our-9.jpg', alt: 'our-9' },
						{ src: '/src/images/products/our-10.jpg', alt: 'our-10' },
						{ src: '/src/images/products/our-11.jpg', alt: 'our-11' },
						{ src: '/src/images/products/our-12.jpg', alt: 'our-12' },
						{ src: '/src/images/products/our-13.jpg', alt: 'our-13' },
						{ src: '/src/images/products/our-14.jpg', alt: 'our-14' },
						{ src: '/src/images/products/our-15.jpg', alt: 'our-15' },
						{ src: '/src/images/products/our-16.jpg', alt: 'our-16' },
						{ src: '/src/images/products/our-17.jpg', alt: 'our-17' },
						{ src: '/src/images/products/our-18.jpg', alt: 'our-18' },
						{ src: '/src/images/products/our-19.jpg', alt: 'our-19' },
						{ src: '/src/images/products/our-20.jpg', alt: 'our-20' },
					]"
					:delay="0"
					:duration="3000"
				/>
			</div>
			<div class="flex flex-col w-1/3 font-montserrat text-neutral-200 bg-neutral-900 p-10">
				<p class="text-justify text-lg">
					Компания <span class="text-red-700">«Красный</span> Тополь» <br />
					– это многопрофильная организация, где основные направления работы:
				</p>
				<ul class="list-disc list-inside space-y-2 pl-7 py-5">
					<li>Пошив трикотажных изделий на заказ.</li>
					<li>Печать методом шелкографии (и другими), вышивка на одежде.</li>
					<li>Разработка уникальных лекал – реализация ваших текстильных идей.</li>
					<li>Производство мерча, как готового продукта.</li>
				</ul>
				<button
					class="uppercase rounded-full border-[2px] border-white text-white bg-red-700 py-4 px-9 leading-[20px] mt-auto cursor-pointer hover:scale-105 transition-all duration-300"
				>
					Напишите нам<br />
					прямо сейчас!
				</button>
			</div>
		</div>
	</div>
</template>
