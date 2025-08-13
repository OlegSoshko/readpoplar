<script setup lang="ts">
	import Card from "./Card.vue";
	import { Leaf } from "../../icons";
	import { SectionDivider } from "../SectionDivider";
</script>
<template>
	<div class="bg-neutral-100">
		<SectionDivider>
			<span class="font-pt-narrow text-5xl uppercase text-neutral-600 whitespace-nowrap my-15">Наша продукция</span>
		</SectionDivider>
		<div class="mx-15 flex flex-col gap-10">
			<div class="flex gap-5">
				<Card src_image="/src/images/products/product_1.jpg" name="Футболка мужская оверсайз из ткани варёнка" />
				<Card src_image="/src/images/products/product_2.jpg" name="Женская футболка оверсайз" />
				<Card src_image="/src/images/products/product_3.png" name="Топик на тонких бретельках" />
			</div>
			<div class="flex gap-5">
				<Card src_image="/src/images/products/product_4.jpg" name="Ведомственная футболка МЧС" />
				<Card src_image="/src/images/products/product_5.webp" name="Термобельё женское" />
				<Card src_image="/src/images/products/product_6.jpg" name="Кроп-топ женский" />
				<Card src_image="/src/images/products/product_7.jpg" name="Спортивная пара из шортиков и топика" />
			</div>
		</div>
		<SectionDivider>
			<Leaf class="fill-red-700 stroke-red-700" />
		</SectionDivider>
	</div>
</template>
<style scoped></style>
