<script setup>
	import { ref } from "vue";
	import DesktopNav from "./DesktopNav.vue";
	import ContactBarDesktop from "./ContactBarDesktop.vue";
	import ContactDropdown from "./ContactDropdown.vue";
	import MobileMenu from "./MobileMenu.vue";

	const isMobileOpen = ref(false);
	const isContactOpen = ref(false);
</script>

<template>
	<header class="bg-gradient-to-b from-black via-black to-transparent font-pt-narrow">
		<div class="w-[90%] mx-auto px-4">
			<div class="flex items-center justify-between py-4">
				<div class="flex-shrink-0 w-[180px] h-auto">
					<a href="#" class="block">
						<img src="/src/images/icons/logo.png" alt="Красный Тополь" />
					</a>
				</div>

				<DesktopNav />
				<ContactBarDesktop />
				<ContactDropdown v-model="isContactOpen" />
				<MobileMenu v-model="isMobileOpen" />
			</div>
		</div>
	</header>
</template>

<style scoped></style>
