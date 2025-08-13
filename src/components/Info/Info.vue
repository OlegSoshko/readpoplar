<script setup lang="ts">
	import { Success } from "../../icons";
</script>

<template>
	<div
		class="info relative bg-fixed px-15 py-25 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-neutral-50/30 before:z-0"
	>
		<div class="grid grid-cols-2 grid-rows-2 gap-5 relative z-1">
			<div class="rounded-lg overflow-hidden bg-white/80 flex flex-col items-center justify-center text-neutral-800 uppercase">
				<img src="/src/images/icons/logo.png" class="w-[250px] mb-5" />
				<span class="font-pt-narrow text-8xl leading-[60px]">Печать</span>
				<span class="font-pt-narrow text-6xl leading-[55px]">на одежде</span>
			</div>
			<div class="rounded-lg overflow-hidden">
				<img src="/src/images/backgrounds/bg-1.jpg" class="w-full h-full object-cover" />
			</div>
			<div class="rounded-lg overflow-hidden">
				<img src="/src/images/backgrounds/bg-2.jpg" class="w-full h-full object-cover" />
			</div>
			<div class="flex flex-col align-center gap-2 rounded-lg overflow-hidden bg-white/80 p-14 text-neutral-800 text-2xl font-montserrat">
				<div class="flex">
					<Success width="30" height="30" class="stroke-red-700 shrink-0" />
					<p>
						<strong>Шелкография</strong> – метод воспроизведения текстов, надписей, а также различных изображений на производимых нами
						текстильных изделиях. Надёжный и долговечный способом нанесения
					</p>
				</div>
				<div class="flex">
					<Success width="30" height="30" class="stroke-red-700 shrink-0" />
					<p>
						<strong>Машинная вышивка</strong> – элегантный способ декорирования трикотажной одежды. Прекрасно смотрится на изделиях из
						футера и флиса (толстовки, свитшоты, худи)
					</p>
				</div>
				<div class="flex">
					<Success width="30" height="30" class="stroke-red-700 shrink-0" />
					<p>
						<strong>Термотрансферный перенос</strong> – экономичный способ нанесения изображения на текстильный изделия с помощью
						температуры и давления
					</p>
				</div>
				<button
					class="uppercase text-base text-white bg-red-700 py-5 px-9 border-[2px] border-white rounded-full mt-10 cursor-pointer hover:scale-105 transition-all duration-300"
				>
					Оставить заявку на звонок
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.info {
		background-image: url("/src/images/backgrounds/etifi2.webp");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
