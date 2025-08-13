<script setup lang="ts">
	const props = defineProps<{
		src_image: string;
		name: string;
	}>();
</script>

<template>
	<div class="flex flex-col gap-2 items-center">
		<img :src="props.src_image" class="rounded-lg" />
		<span class="text-neutral-600 font-semibold text-center">{{ props.name }}</span>
	</div>
</template>
