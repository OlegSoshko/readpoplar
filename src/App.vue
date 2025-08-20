<script setup lang="ts">
	import { provide, ComponentPublicInstance, onMounted, ref, nextTick } from "vue";
	import { Intro, Products, Other, Info, About, OurWorks, Certificates } from "./components";
	import { useScrollToSection } from "./hooks";

	const { scrollToSection, registerSection } = useScrollToSection();

	provide("scrollToSection", scrollToSection);
</script>

<template>
	<div>
		<Intro />
		<Products :ref="(el: Element | ComponentPublicInstance | null) => registerSection('products', el as ComponentPublicInstance)" />
		<Other />
		<Info :ref="(el: Element | ComponentPublicInstance | null) => registerSection('info', el as ComponentPublicInstance)" />
		<About />
		<OurWorks :ref="(el: Element | ComponentPublicInstance | null) => registerSection('our_works', el as ComponentPublicInstance)" />
		<Certificates :ref="(el: Element | ComponentPublicInstance | null) => registerSection('certificates', el as ComponentPublicInstance)" />
	</div>
</template>

<style scoped></style>
