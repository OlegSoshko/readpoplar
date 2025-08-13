<script setup>
	import { ref, onMounted, onUnmounted } from "vue";

	const props = defineProps({ modelValue: { type: Boolean, required: true } });
	const emit = defineEmits(["update:modelValue"]);

	const dropdownRef = ref(null);

	function toggle() {
		emit("update:modelValue", !props.modelValue);
	}

	function closeDropdown() {
		if (props.modelValue) {
			emit("update:modelValue", false);
		}
	}

	function handleClickOutside(event) {
		if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
			closeDropdown();
		}
	}

	onMounted(() => {
		document.addEventListener("click", handleClickOutside);
	});

	onUnmounted(() => {
		document.removeEventListener("click", handleClickOutside);
	});
</script>

<template>
	<div ref="dropdownRef" class="hidden lg:block xl:hidden relative">
		<button
			class="p-2 text-white hover:text-red-500 transition-colors cursor-pointer"
			aria-label="Контакты"
			:aria-expanded="modelValue"
			@click.stop="toggle()"
		>
			<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
				<path
					d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
				/>
			</svg>
		</button>

		<nav
			class="absolute right-0 bg-gray-800 rounded-lg mt-2 flex flex-col gap-1 whitespace-nowrap transition-all duration-200 ease-in-out z-50"
			:class="{
				'opacity-100 visible translate-y-0': modelValue,
				'opacity-0 invisible -translate-y-2 pointer-events-none': !modelValue,
			}"
		>
			<div class="py-4">
				<a
					href="tel:+79962812888"
					class="flex items-center space-x-2 text-white hover:text-red-500 px-4 py-2 transition-colors rounded hover:bg-gray-700"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
						<path
							d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
						/>
					</svg>
					<span>+7(996) 281-28-88</span>
				</a>
				<a
					href="#svyaz"
					class="flex items-center space-x-2 text-white hover:text-red-500 px-4 py-2 transition-colors rounded hover:bg-gray-700"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
						<path
							d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
						/>
					</svg>
					<span>redpoplar@yandex.ru</span>
				</a>
				<a href="#zvonok" class="text-gray-400 px-4 py-2 pl-11 hover:text-red-500 transition-colors rounded hover:bg-gray-700 group">
					заказать обратный звонок
					<hr class="border-0 border-t-1 border-dashed border-gray-400 group-hover:border-red-500" />
				</a>
			</div>
		</nav>
	</div>
</template>

<style scoped></style>
