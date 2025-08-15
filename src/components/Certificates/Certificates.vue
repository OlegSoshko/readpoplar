<script setup lang="ts">
	import { SectionDivider } from "../SectionDivider";
</script>

<template>
	<div>
		<SectionDivider class="bg-white" disableHr>
			<h3 class="font-pt-narrow text-5xl text-neutral-900">Вся продукция сертифицирована</h3>
		</SectionDivider>
		<div
			class="certificates-bg bg-fixed px-15 py-25 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-neutral-50/60 before:z-0"
		>
			<div class="flex flex-col gap-15 items-center relative z-1">
				<div class="flex gap-5">
					<a href="/src/documents/Декларация.pdf" target="_blank">
						<img src="/src/images/certificates/1.jpg" alt="certificate" />
					</a>
					<a href="/src/documents/Сертификат.pdf" target="_blank">
						<img src="/src/images/certificates/2.jpg" alt="certificate" />
					</a>
				</div>
				<img src="/src/images/certificates/cz.png" alt="certificate" />
				<button class="uppercase px-9 py-5 cursor-pointer rounded-full bg-red-700 hover:scale-110 transition-all duration-300">
					Остались вопросы? Перезвоним!
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.certificates-bg {
		background-image: url("/src/images/backgrounds/bg-3.jpg");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
